import { Link, useNavigate } from "react-router-dom";
import styles from "./Footer.module.scss";
import Button from "../Button/Button";

const Footer = () => {
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <section className={styles.footer__content__links}>
          <Button
            className={styles.footer__content__links__gmail}
            url="https://github.com/Behzadsharafi/"
          >
            <i className="bx bxl-github"></i>
          </Button>
          <Button url="https://www.linkedin.com/in/zadsharafi/">
            <i className="bx bxl-linkedin"></i>
          </Button>
          <Button url="mailto:behzadsharafi@gmail.com">
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
