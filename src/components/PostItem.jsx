import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = function (props) {
	return (
		<article className="Post" data-id={props.post.id}>
			<header>
				<h2 className="Post__title" data-id={props.post.id}>
					{props.post.title}
				</h2>
			</header>
			<div className="Post__content">
				<p>{props.post.body}</p>
			</div>
			<footer>
				<div className="Post__bttns">
					<MyButton
						onClick={() => {
							props.remove(props.post);
						}}
					>
						Удалить
					</MyButton>
				</div>
			</footer>
		</article>
	);
};

export default PostItem;
