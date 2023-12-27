import jsIcon from "../assets/javascript2.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import tsIcon from "../assets/typescript2.svg";
import javaIcon from "../assets/java2.svg";
import reactIcon from "../assets/react2.svg";
import sassIcon from "../assets/sass.svg";
import nestJSIcon from "../assets/nestjs.svg";
import springIcon from "../assets/spring2.svg";
import mysqlIcon from "../assets/mysql2.svg";
import firebaseIcon from "../assets/firebase.svg";
import awsIcon from "../assets/aws.svg";
import jestIcon from "../assets/jest.svg";
import jUnitIcon from "../assets/jUnit.svg";
import reactTestIcon from "../assets/reactTestingLibrary.svg";
import gitIcon from "../assets/git.svg";
import githubIcon from "../assets/github.svg";
import nologyIcon from "../assets/_nology.png";
import digiKalaIcon from "../assets/Digikala.png";
import kntuIcon from "../assets/KNTUniversity.png";
import zadBooksIcon from "../assets/googleBooks.png";
import zadFashionIcon from "../assets/zadFashion.png";
import windowsXPIcon from "../assets/windowsXP.png";

export const skills = [
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

export const experiences = [
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

export const education = [
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

export const projects = [
  {
    title: "Zad Books",
    description:
      "A platform that enables the users to search for books and get more details about a certain title. I used React.JS and SCSS for front-end and utilized google books API as the backend.",
    techStack: ["ReactJS", "SCSS", "Google Books API"],
    imageLink: zadBooksIcon,
    gitHub: "https://github.com/Behzadsharafi/GoogleBooks",
    liveSite: "https://zadbooks.netlify.app/",
  },
  {
    title: "Zad Fashion",
    description:
      "A clothing e-shop full stack website developed in React.JS, SCSS, with Google Firestore realtime integration. The website showcases essential features such as a user-friendly shopping cart, a personalized list of favorite items, and detailed product pages providing more information about each item. ",
    techStack: ["ReactJS", "SCSS", "Google Firestore"],
    imageLink: zadFashionIcon,
    gitHub: "https://github.com/Behzadsharafi/React-eShop",
    liveSite: "https://zadfashion.netlify.app/",
  },
  {
    title: "Fake Windows XP",
    description:
      "This is a simulation of Windows XP user interface to exhibit my vanilla JavaScript, HTML, and CSS abilities. There is a start menu and 3 applications that the user can choose from. My focus in this project was on the UI, therefore some buttons and icons are merely placeholders and do not have functionality.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageLink: windowsXPIcon,
    gitHub: "https://github.com/Behzadsharafi/FakeOS",
    liveSite: "https://fakewinxp.netlify.app/",
  },
];
