import { createSelector } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostList from "./PostList/PostList";
import { fetchPosts } from "@/redux/features/posts/postsSlice";

import styles from "./Posts.module.css";

const Posts = () => {
	const posts = useSelector((state) => state.posts.posts);
	const status = useSelector((state) => state.posts.status);
	const error = useSelector((state) => state.posts.error);

	const dispatch = useDispatch();

	const filterSelector = createSelector(
		(state) => state.posts.posts,
		(posts) => posts.filter((post) => post.title.length > 20),
	);

	const filteredPosts = useSelector(filterSelector);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<div className={styles.wrapper}>
			<PostList
				heading="All posts: "
				posts={posts}
				status={status}
				error={error}
			/>

			<PostList
				heading="Posts with the title length longer than 20 chars: "
				posts={filteredPosts}
				status={status}
				error={error}
			/>
		</div>
	);
};

export default Posts;
