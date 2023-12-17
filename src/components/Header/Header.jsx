import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <section className={styles.header__content__logo}>ZAD.</section>
        <section className={styles.header__content__nav}>
          <li className={styles.header__content__nav__item}>Home</li>
          <li className={styles.header__content__nav__item}>About</li>
          <li className={styles.header__content__nav__item}>Projects</li>
          <li className={styles.header__content__nav__item}>Contact</li>
        </section>
      </div>
    </header>
  );
};

export default Header;
