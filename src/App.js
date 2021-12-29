import React, { useMemo, useState, useRef } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyModal from './components/UI/Modal/MyModal';
import './styles/app.css';

function App() {
	// console.clear()
	const [posts, setPosts] = useState([
		{ id: 1, title: 'JavaScript 0', body: '5 Description' },
		{ id: 2, title: 'JavaScript 1', body: '4 Description' },
		{ id: 3, title: 'JavaScript 2', body: '3 Description' },
		{ id: 4, title: 'JavaScript 3', body: '2 Description' },
		{ id: 5, title: 'JavaScript 4', body: '1 Description' },
		{ id: 6, title: 'JavaScript 5', body: '0 Description' }
	]);

	const [filter, setFilter] = useState({ sort: '', query: '' })

	const sortedPosts = useMemo(() => {
		console.log(`getSortedPosts`);
		if (filter.sort) {
			return [...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))];
		} else {
			return posts;
		}
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
	}, [filter.query, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id != post.id))
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
		</div>
	);
}

export default App;