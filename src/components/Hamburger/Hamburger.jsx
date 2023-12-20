import { useState } from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  const hamburgerStyle =
    isActive === false
      ? `${styles.hamburger}`
      : `${styles.hamburger} ${styles.hamburger__isActive}`;

  return (
    <button onClick={handleClick} className={hamburgerStyle}>
      <div className={styles.bar}></div>
    </button>
  );
};

export default Hamburger;
