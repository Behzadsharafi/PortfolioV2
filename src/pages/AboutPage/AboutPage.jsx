import Skill from "../../components/Skill/Skill";
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

const AboutPage = () => {
  const languages = [
    { title: "JavaScript", icon: jsIcon },
    { title: "HTML", icon: htmlIcon },
    { title: "CSS", icon: cssIcon },
    { title: "TypeScript", icon: tsIcon },
    { title: "Java", icon: javaIcon },
  ];
  const frontend = [
    { title: "ReactJS", icon: reactIcon },
    { title: "Sass", icon: sassIcon },
  ];
  const backend = [
    { title: "NestJS", icon: nestJSIcon },
    { title: "Spring", icon: springIcon },
  ];
  const database = [
    { title: "MySQL", icon: mysqlIcon },
    { title: "Firebase", icon: firebaseIcon },
    { title: "Amazon Web Services", icon: awsIcon },
  ];
  const testing = [
    { title: "Jest", icon: jestIcon },
    { title: "JUnit", icon: jUnitIcon },
    { title: "React Testing Library", icon: reactTestIcon },
  ];
  const versionControl = [
    { title: "Git", icon: gitIcon },
    { title: "GitHub", icon: githubIcon },
  ];

  return (
    <main className={styles.aboutPage}>
      <div className={styles.aboutPage__content}>
        <section className={styles.aboutPage__content__bio}>
          <h1 className={styles.aboutPage__content__bio__heading}>About Me</h1>
          <p className={styles.aboutPage__content__bio__paragraph}>
            I’m Zad Sharafi, a tech enthusiast and a computer science graduate
            with robust skill set in web development tools such as JavaScript,
            React.JS, HTML, CSS/SCSS and Java. I have always known myself as
            someone who has a commitment to constant and never-ending
            improvement and this part of my personality has drawn me towards
            software development. Acquiring solid foundation in various aspects
            of software engineering in university, and solidifying this
            knowledge through _nology full-stack development bootcamp has made
            me eager to continue my journey in tech stronger and make a better
            version of myself day-by-day.
          </p>
        </section>
        <section className={styles.aboutPage__content__info}>
          <ul className={styles.aboutPage__content__info__tabs}>
            <li className={styles.aboutPage__content__info__tabs__title}>
              Skills
            </li>
            <li className={styles.aboutPage__content__info__tabs__title}>
              Experience
            </li>
            <li className={styles.aboutPage__content__info__tabs__title}>
              Education
            </li>
          </ul>

          <ul className={styles.aboutPage__content__info__details}>
            <Skill title="Languages" skills={languages} />
            <Skill title="Frontend" skills={frontend} />
            <Skill title="Backend" skills={backend} />
            <Skill title="Database & Cloud" skills={database} />
            <Skill title="Testing" skills={testing} />
            <Skill title="Version Control" skills={versionControl} />
          </ul>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
