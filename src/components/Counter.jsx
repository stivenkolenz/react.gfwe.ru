import React, { useState } from "react";

const Counter = function () {
	const [count, setCount] = useState(0);
	const like = (like = true) => {
		if (like) setCount(count + 1);
		else {
			if (count != 0) setCount(count - 1);
		}
	};
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => like()}>Increment</button>
			<button onClick={() => like(false)}>Decrement</button>
		</div>
	);
};

export default Counter;
