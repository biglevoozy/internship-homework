import styles from "./Textarea.module.css";
const Textarea = ({ onChange, value, id, placeholder }) => {
  return (
    <label className={styles.label} htmlFor={id}>
      {placeholder && <span>{placeholder}</span>}
      <textarea
        className={styles.textarea}
        onChange={onChange}
        value={value}
        id={id}
      />
    </label>
  );
};

export default Textarea;
