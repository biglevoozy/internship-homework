import styles from "./Input.module.css";

const Input = ({ onChange, value, id, type = "text", placeholder }) => {
  return (
    <label className={styles.label} htmlFor={id}>
      {placeholder && <span>{placeholder}</span>}
      <input
        className={styles.input}
        onChange={onChange}
        value={value}
        type={type}
        id={id}
      />
    </label>
  );
};

export default Input;
