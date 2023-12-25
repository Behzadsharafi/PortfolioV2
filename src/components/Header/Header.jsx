import styles from "./Header.module.scss";
import Hamburger from "./../Hamburger/Hamburger";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActiveTabContext } from "../../context/ActiveTabContextProvider";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  // const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);

  const toggleShowNav = () => {
    setShowNav(!showNav);
  };

  const handleNavClick = (value) => {
    setShowNav(false);
    navigate(`/${value !== "home" ? value : ""}`);
    setActiveTab(value);
  };

  const navStyle =
    showNav === false
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
            className={
              activeTab === "home"
                ? `${styles.header__content__nav__item__active} ${styles.header__content__nav__item}`
                : styles.header__content__nav__item
            }
            onClick={() => handleNavClick("home")}
          >
            Home
          </li>
          <li
            className={
              activeTab === "about"
                ? `${styles.header__content__nav__item__active} ${styles.header__content__nav__item}`
                : styles.header__content__nav__item
            }
            onClick={() => handleNavClick("about")}
          >
            About
          </li>
          <li
            className={
              activeTab === "projects"
                ? `${styles.header__content__nav__item__active} ${styles.header__content__nav__item}`
                : styles.header__content__nav__item
            }
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </li>
          <li
            className={
              activeTab === "contact"
                ? `${styles.header__content__nav__item__active} ${styles.header__content__nav__item}`
                : styles.header__content__nav__item
            }
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </li>
        </nav>
        <Hamburger showNav={showNav} setShowNav={setShowNav} />
      </div>
    </header>
  );
};

export default Header;
