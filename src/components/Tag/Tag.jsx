import styles from "./Tag.module.scss";

const Tag = ({ children, className }) => {
  return <span className={`${styles.tag} ${className}`}>{children}</span>;
};

export default Tag;
