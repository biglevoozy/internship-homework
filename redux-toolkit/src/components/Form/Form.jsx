import { useDispatch, useSelector } from "react-redux";

import Button from "@/ui/Button/Button";
import Heading from "@/ui/Heading/Heading";
import Input from "@/ui/Input/Input";
import Textarea from "@/ui/Textarea/Textarea";

import {
	handleBodyChange,
	handleResetForm,
	handleTitleChange,
	handleUserIdChange,
} from "@/redux/features/form/formSlice";
import { addPost } from "@/redux/features/posts/postsSlice";

import styles from "./Form.module.css";

const Form = () => {
	const title = useSelector((state) => state.form.title);
	const body = useSelector((state) => state.form.body);
	const userId = useSelector((state) => state.form.userId);

	const dispatch = useDispatch();

	return (
		<section className={styles.wrapper}>
			<Heading>Add your post</Heading>
			<form className={styles.form}>
				<Input
					onChange={(e) => dispatch(handleUserIdChange(e.target.value))}
					value={userId}
					placeholder="Your id: "
					type="number"
					id="userId"
				/>
				<Input
					value={title}
					onChange={(e) => dispatch(handleTitleChange(e.target.value))}
					placeholder="Title of your post: "
					type="text"
					id="title"
				/>
				<Textarea
					onChange={(e) => dispatch(handleBodyChange(e.target.value))}
					placeholder="Content of your post: "
					value={body}
					type="text"
					id="body"
				/>

				<Button
					placeholder="Add post"
					type="button"
					onClick={() => {
						dispatch(handleResetForm());
						dispatch(addPost({ title, body, userId }));
					}}
				/>
			</form>
		</section>
	);
};

export default Form;
