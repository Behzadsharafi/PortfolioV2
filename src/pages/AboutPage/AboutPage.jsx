import styles from "./AboutPage.module.scss";
import jsIcon from "../../assets/javascript2.svg";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import tsIcon from "../../assets/typescript2.svg";
import javaIcon from "../../assets/java2.svg";
import reactIcon from "../../assets/react2.svg";
import sassIcon from "../../assets/sass.svg";
import nestJSIcon from "../../assets/nestjs.svg";
import springIcon from "../../assets/spring2.svg";
import mysqlIcon from "../../assets/mysql2.svg";
import firebaseIcon from "../../assets/firebase.svg";
import awsIcon from "../../assets/aws.svg";
import jestIcon from "../../assets/jest.svg";
import jUnitIcon from "../../assets/jUnit.svg";
import reactTestIcon from "../../assets/reactTestingLibrary.svg";
import gitIcon from "../../assets/git.svg";
import githubIcon from "../../assets/github.svg";
import Experience from "../../components/Experience/Experience";
import nologyIcon from "../../assets/_nology.png";
import digiKalaIcon from "../../assets/Digikala.png";
import kntuIcon from "../../assets/KNTUniversity.png";
import Skills from "../../components/Skills/Skills";
import { useContext, useEffect, useState } from "react";
import { ActiveTabContext } from "../../context/ActiveTabContextProvider";

const AboutPage = () => {
  const [activeTabLink, setActiveTabLink] = useState("skills");

  const { setActiveTab } = useContext(ActiveTabContext);

  useEffect(() => {
    setActiveTab("about");
  }, []);

  const skills = [
    {
      label: "Languages",
      technologies: [
        { title: "JavaScript", icon: jsIcon },
        { title: "HTML", icon: htmlIcon },
        { title: "CSS", icon: cssIcon },
        { title: "TypeScript", icon: tsIcon },
        { title: "Java", icon: javaIcon },
      ],
    },
    {
      label: "Frontend",
      technologies: [
        { title: "ReactJS", icon: reactIcon },
        { title: "Sass", icon: sassIcon },
      ],
    },
    {
      label: "Backend",
      technologies: [
        { title: "NestJS", icon: nestJSIcon },
        { title: "Spring", icon: springIcon },
      ],
    },
    {
      label: "Database & Cloud",
      technologies: [
        { title: "MySQL", icon: mysqlIcon },
        { title: "Firebase", icon: firebaseIcon },
        { title: "Amazon Web Services", icon: awsIcon },
      ],
    },
    {
      label: "Testing",
      technologies: [
        { title: "Jest", icon: jestIcon },
        { title: "JUnit", icon: jUnitIcon },
        { title: "React Testing Library", icon: reactTestIcon },
      ],
    },
    {
      label: "Version Control",
      technologies: [
        { title: "Git", icon: gitIcon },
        { title: "GitHub", icon: githubIcon },
      ],
    },
  ];

  const experiences = [
    {
      duration: "2023-Present",
      company: "_nology",
      description:
        "Full-stack web development bootcamp along with working on new features for a student metrics application. The app tracks student performance, assessment results, and project feedback. Stack: MySQL, & NestJS on the backend & TypeScript and React on the frontend.",
      icon: nologyIcon,
      link: "https://au.nology.io/",
      tags: [
        "JavaScript",
        "TypeScript",
        "Java",
        "ReactJS",
        "Spring",
        "NestJS",
        "NextJS",
        "HTML",
        "CSS",
        "SCSS",
      ],
    },
    {
      duration: "2022-2023",
      company: "Digikala",
      description:
        "During my time at Digikala my tasks included maintaining and upgrading front end of the website codes mostly in JavaScript, HTML, and CSS. Working on responsiveness of the website, collaborating with in-house web designers to improve UI design and translated user requirements into implementation plans, and also fixing the bugs and issues along the way.",
      icon: digiKalaIcon,
      link: "https://www.digikala.com/",
      tags: ["JavaScript", "HTML", "CSS", "ReactJS"],
    },
  ];
  const education = [
    {
      duration: "2023",
      company: "_nology",
      description: "Full-stack web development bootcamp.",
      icon: nologyIcon,
      link: "https://au.nology.io/",
    },
    {
      duration: "2017-2021",
      company: "KNT University of Technology",
      description: "Bachelor of Software Engineering",
      icon: kntuIcon,
      link: "https://en.kntu.ac.ir/",
    },
  ];

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
