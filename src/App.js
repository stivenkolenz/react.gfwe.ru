import React, { useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/Modal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/app.css';

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript 0', body: '5 Description' },
		{ id: 2, title: 'JavaScript 1', body: '4 Description' },
		{ id: 3, title: 'JavaScript 2', body: '3 Description' },
	]);

	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(!modal);
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className="App">
			<MyButton onClick={() => setModal(true)}>Добавить пост</MyButton>
			<MyModal title="Добавление поста" visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: '15px 0' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
		</div>
	);
}

export default App;