import styles from "./Header.module.scss";
import Hamburger from "./../Hamburger/Hamburger";
import { useRef, useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(true);

  const toggleShowNav = () => {
    setShowNav(!showNav);
  };

  const navStyle =
    showNav === true
      ? `${styles.header__content__nav}`
      : `${styles.header__content__nav} ${styles.header__content__nav__isActive}`;

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <section className={styles.header__content__logo}>ZAD.</section>
        <nav className={navStyle}>
          <li className={styles.header__content__nav__item}>Home</li>
          <li className={styles.header__content__nav__item}>About</li>
          <li className={styles.header__content__nav__item}>Projects</li>
          <li className={styles.header__content__nav__item}>Contact</li>
        </nav>
        <Hamburger onClick={toggleShowNav} />
      </div>
    </header>
  );
};

export default Header;
