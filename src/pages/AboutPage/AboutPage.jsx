import styles from "./AboutPage.module.scss";
import Experience from "../../components/Experience/Experience";

import Skills from "../../components/Skills/Skills";
import { useContext, useEffect, useState } from "react";
import { ActiveTabContext } from "../../context/ActiveTabContextProvider";
import { skills, experiences, education } from "../../data/data";

const AboutPage = () => {
  const [activeTabLink, setActiveTabLink] = useState("skills");
  const { setActiveTab } = useContext(ActiveTabContext);

  useEffect(() => {
    setActiveTab("about");
  }, []);

  const handleNavClick = (value) => {
    setActiveTabLink(value);
  };

  return (
    <main className={styles.aboutPage}>
      <div className={styles.aboutPage__content}>
        <section className={styles.aboutPage__content__bio}>
          <h1 className={styles.aboutPage__content__bio__heading}>About Me</h1>
          <p className={styles.aboutPage__content__bio__paragraph}>
            I’m Zad Sharafi, a tech enthusiast and a
            <span> computer science graduate </span>
            with robust skill set in <span>web development tools</span> such as
            JavaScript, React.JS, HTML, CSS/SCSS and Java. I have always known
            myself as someone who has a commitment to
            <span> constant and never-ending improvement</span> and this part of
            my personality has drawn me towards software development. Acquiring
            solid foundation in various aspects of software engineering in
            university, and solidifying this knowledge through _nology
            full-stack development bootcamp has made me eager to continue my
            journey in tech stronger and make a better version of myself
            day-by-day.
          </p>
        </section>
        <section className={styles.aboutPage__content__info}>
          <ul className={styles.aboutPage__content__info__tabs}>
            <li
              className={
                activeTabLink === "skills"
                  ? `${styles.aboutPage__content__info__tabs__title__active} ${styles.aboutPage__content__info__tabs__title}`
                  : styles.aboutPage__content__info__tabs__title
              }
              onClick={() => handleNavClick("skills")}
            >
              Skills
            </li>
            <li
              className={
                activeTabLink === "experience"
                  ? `${styles.aboutPage__content__info__tabs__title__active} ${styles.aboutPage__content__info__tabs__title}`
                  : styles.aboutPage__content__info__tabs__title
              }
              onClick={() => handleNavClick("experience")}
            >
              Experience
            </li>
            <li
              className={
                activeTabLink === "education"
                  ? `${styles.aboutPage__content__info__tabs__title__active} ${styles.aboutPage__content__info__tabs__title}`
                  : styles.aboutPage__content__info__tabs__title
              }
              onClick={() => handleNavClick("education")}
            >
              Education
            </li>
          </ul>
          {activeTabLink === "skills" && <Skills skills={skills} />}
          {activeTabLink === "experience" && (
            <Experience experiences={experiences} />
          )}
          {activeTabLink === "education" && (
            <Experience experiences={education} />
          )}
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
