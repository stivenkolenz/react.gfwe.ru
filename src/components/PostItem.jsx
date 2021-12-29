import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = function (props) {
	return (
		<div className="Post">
			<div className="Post__content">
				<strong>
					{props.number}.{props.post.title}
				</strong>
				<div>{props.post.body}</div>
			</div>
			<div className="Post__bttns">
				<MyButton
					onClick={() => {
						props.remove(props.post);
					}}
				>
					Удалить
				</MyButton>
			</div>
		</div>
	);
};

export default PostItem;
