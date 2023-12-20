import styles from "./Header.module.scss";
import Hamburger from "./../Hamburger/Hamburger";
import { useRef, useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(true);

  const toggleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <section className={styles.header__content__logo}>ZAD.</section>
        <nav className={styles.header__content__nav}>
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
