import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const Button = ({ children, className, onClick, type, url }) => {
  return (
    <Link
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      to={url}
    >
      {children}
    </Link>
  );
};

export default Button;
