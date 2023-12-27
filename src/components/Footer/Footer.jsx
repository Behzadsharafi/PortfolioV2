import { Link, useNavigate } from "react-router-dom";
import styles from "./Footer.module.scss";
import Button from "../Button/Button";

const Footer = () => {
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <section className={styles.footer__content__links}>
          <Button
            className={styles.footer__content__links__button}
            onClick={() => handleClick("https://github.com/Behzadsharafi/")}
          >
            <i className="bx bxl-github"></i>
          </Button>
          <Button
            className={styles.footer__content__links__button}
            onClick={() =>
              handleClick("https://www.linkedin.com/in/zadsharafi/")
            }
          >
            <i className="bx bxl-linkedin"></i>
          </Button>
          <Button
            className={styles.footer__content__links__button}
            onClick={() => handleClick("mailto:behzadsharafi@gmail.com")}
          >
            <i className="bx bxl-gmail"></i>
          </Button>
        </section>
        <p className={styles.footer__content__copyright}>
          &copy; Copyright Zad Sharafi {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
