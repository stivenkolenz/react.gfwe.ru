import React from "react";
import PostItem from "./PostItem";

const PostList = function ({ posts, title, remove }) {
	if (!posts.length) {
		return <h1>Посты не найдены</h1>;
	}
	return (
		<div className="PostList">
			<h1>{title}</h1>
			{posts.map((post, index) => {
				return (
					<PostItem
						remove={remove}
						number={index + 1}
						post={post}
						key={post.id}
					/>
				);
			})}
		</div>
	);
};

export default PostList;
