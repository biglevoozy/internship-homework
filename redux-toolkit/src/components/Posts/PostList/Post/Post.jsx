import styles from "./Post.module.css";

const Post = ({ title, userId, body }) => {
	return (
		<li className={styles.post}>
			<div className={styles.postCredentials}>
				<span className={styles.author}>posted by user {userId}</span>
				<span className={styles.title}>{title}</span>
			</div>
			<p className={styles.content}>{body}</p>
		</li>
	);
};

export default Post;
