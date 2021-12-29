import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: "", body: "" });

	const addNewPost = (event) => {
		event.preventDefault();
		const newPost = { ...post, id: Date.now() };
		create(newPost);
		setPost({ title: "", body: "" });
	};

	return (
		<form onSubmit={addNewPost}>
			<MyInput
				value={post.title}
				type="text"
				name="postTitle"
				required
				// ref={postTitle}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				placeholder="Название поста"
			/>
			<MyInput
				value={post.body}
				type="text"
				name="postDescription"
				required
				// ref={postDescription}
				onChange={(e) => setPost({ ...post, body: e.target.value })}
				placeholder="Описание поста"
			/>
			<MyButton>Создать пост</MyButton>
		</form>
	);
};

export default PostForm;
