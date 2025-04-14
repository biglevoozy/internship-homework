import styles from "./Heading.module.css";

const Heading = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

export default Heading;
