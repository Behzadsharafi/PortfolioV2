import { useState } from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = ({ showNav, setShowNav }) => {
  // const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  const hamburgerStyle =
    showNav === true
      ? `${styles.hamburger}`
      : `${styles.hamburger} ${styles.hamburger__isActive}`;

  return (
    <button onClick={handleClick} className={hamburgerStyle}>
      <div className={styles.bar}></div>
    </button>
  );
};

export default Hamburger;
