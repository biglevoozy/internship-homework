import Heading from "@/ui/Heading/Heading";
import Spinner from "@/ui/Spinner/Spinner";

import Post from "./Post/Post";

import styles from "./PostList.module.css";

const PostList = ({ posts, status, error, heading }) => {
	return (
		<>
			<div className={styles.header}>
				<Heading>{heading}</Heading>

				<span className={styles.status}>
					{status === "fulfilled" ? (
						"Uploaded!"
					) : status === "pending" ? (
						<Spinner />
					) : (
						`Rejected with error: ${error}`
					)}
				</span>
			</div>
			<ul className={styles.postList}>
				{posts &&
					posts.length > 0 &&
					posts.map((post) => (
						<Post
							body={post.body}
							title={post.title}
							userId={post.userId}
							key={post.id}
						/>
					))}
			</ul>
		</>
	);
};

export default PostList;
