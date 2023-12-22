import styles from "./Header.module.scss";
import Hamburger from "./../Hamburger/Hamburger";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const navigate = useNavigate();

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
        <span
          className={styles.header__content__logo}
          onClick={() => navigate("/")}
        >
          ZAD.
        </span>
        <nav className={navStyle}>
          <li
            className={styles.header__content__nav__item}
            onClick={() => {
              navigate("/");
              setShowNav(!showNav);
            }}
          >
            Home
          </li>
          <li
            className={styles.header__content__nav__item}
            onClick={() => {
              navigate("/about");
              setShowNav(!showNav);
            }}
          >
            About
          </li>
          <li className={styles.header__content__nav__item}>Projects</li>
          <li className={styles.header__content__nav__item}>Contact</li>
        </nav>
        <Hamburger showNav={showNav} setShowNav={setShowNav} />
      </div>
    </header>
  );
};

export default Header;
