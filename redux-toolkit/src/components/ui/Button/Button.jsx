import styles from "./Button.module.css";

const Button = ({ onClick, placeholder, type = "submit" }) => {
	return (
		<button className={styles.btn} onClick={onClick} type={type}>
			{placeholder}
		</button>
	);
};

export default Button;
