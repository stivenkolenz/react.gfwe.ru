import React from "react";
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = function ({ posts, title, remove }) {
	if (!posts.length) {
		return <h1>Посты не найдены</h1>;
	}
	return (
		<div className="PostList">
			<h1>{title}</h1>
			<TransitionGroup>
				{posts.map((post, index) => {
					return (
						<CSSTransition key={post.id} timeout={500} classNames="Post">
							<PostItem remove={remove} number={index + 1} post={post} />
						</CSSTransition>
					);
				})}
			</TransitionGroup>
		</div>
	);
};

export default PostList;
