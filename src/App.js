import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PostService from './API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/Loader/Loader';
import MyModal from './components/UI/Modal/MyModal';
import useFetching from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';
import Pagination from './pagination/Pagination';
import './styles/app.css';
import { getPageCount, getPagesArray } from './utils/pages';

function App() {
	const [posts, setPosts] = useState([
		// { id: 1, title: 'JavaScript 0', body: '5 Description' },
		// { id: 2, title: 'JavaScript 1', body: '4 Description' },
		// { id: 3, title: 'JavaScript 2', body: '3 Description' },
	]);

	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const [totalPage, setTotalPage] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	// usePagination(); // TODO: Реализовать чуть позже

	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data);
		const totallCount = response.headers['x-total-count'];
		setTotalPage(getPageCount(totallCount, limit));
	});

	useEffect(() => {
		fetchPosts();
	}, [page]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(!modal);
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const changePage = (p) => {
		setPage(p);
	}

	return (
		<div className="App">
			<MyButton onClick={fetchPosts}>GET POSTS</MyButton>
			<MyButton onClick={() => setModal(true)}>Добавить пост</MyButton>
			<MyModal title="Добавление поста" visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: '15px 0' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			{postError &&
				<h1>Произошла ошибка: {postError}</h1>}
			{isPostLoading ? <Loader /> : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />}

			<Pagination page={page} changePage={changePage} totalPage={totalPage} />
		</div >
	);
}

export default App;