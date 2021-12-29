import React from "react";

class ClassCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	like(like = true) {
		if (like) this.setState({ count: this.state.count + 1 });
		else {
			if (this.state.count != 0) this.setState({ count: this.state.count - 1 });
		}
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={() => this.like()}>Increment</button>
				<button onClick={() => this.like(false)}>Decrement</button>
			</div>
		);
	}
}

export default ClassCounter;
