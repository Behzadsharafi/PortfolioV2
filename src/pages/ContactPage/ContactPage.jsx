import { useContext, useEffect } from "react";
import styles from "./ContactPage.module.scss";
import { ActiveTabContext } from "../../context/ActiveTabContextProvider";
import Form from "../../components/Form/Form";
import { addMessage, getAllMessages } from "../../services/messages-service";

const ContactPage = () => {
  const { setActiveTab } = useContext(ActiveTabContext);

  useEffect(() => {
    setActiveTab("contact");
  }, []);

  return (
    <main className={styles.contactPage}>
      <div className={styles.contactPage__content}>
        <section className={styles.contactPage__content__details}>
          <h1 className={styles.contactPage__content__details__heading}>
            Contact Me
          </h1>
          <p className={styles.contactPage__content__details__paragraph}>
            You can contact me through:
          </p>
          <ul className={styles.contactPage__content__details__socials}>
            <li>
              <a href="mailto:behzadsharafi@gmail.com" target="_blank">
                <i className="bx bxl-gmail"></i>
                Behzadsharafi@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/zadsharafi/" target="_blank">
                <i className="bx bxl-linkedin"></i>
                <div>
                  <span
                    className={
                      styles.contactPage__content__details__socials__url
                    }
                  >
                    https://www.linkedin.com/in
                  </span>
                  <span>/ZadSharafi</span>
                </div>
              </a>
            </li>
            <li>
              <a href="https://github.com/Behzadsharafi/" target="_blank">
                <i className="bx bxl-github"></i>
                <div>
                  <span
                    className={
                      styles.contactPage__content__details__socials__url
                    }
                  >
                    https://github.com
                  </span>
                  <span> /BehzadSharafi</span>
                </div>
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.contactPage__content__form}>
          <p className={styles.contactPage__content__form__paragraph}>
            Or simply filling out this form:
          </p>
          <Form />
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
