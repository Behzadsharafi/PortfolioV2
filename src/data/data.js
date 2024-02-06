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
import nextJSIcon from "../assets/nextjs.svg";
import tailwindcssIcon from "../assets/tailwindcss.svg";
import digitalOceanIcon from "../assets/digitalOcean.svg";
import gitIcon from "../assets/git.svg";
import githubIcon from "../assets/github.svg";
import nologyIcon from "../assets/_nology.png";
import digiKalaIcon from "../assets/Digikala.png";
import kntuIcon from "../assets/KNTUniversity.png";
import zadBooksImage from "../assets/googleBooks.png";
import zadFashionImage from "../assets/zadFashion.png";
import windowsXPImage from "../assets/windowsXP.png";
import morseTranslatorImage from "../assets/morseCodeTranslator.png";
import minesweeperImage from "../assets/mineSweeper.png";
import employeeSystemImage from "../assets/employeeSystem.png";
import postcodeAPIImage from "../assets/postcodeAPI.png";
import portfolioImage from "../assets/portfolio.png";
import eventsCalendarImage from "../assets/eventsCalendar.png";

export const skills = [
  {
    label: "Languages",
    technologies: [
      { title: "JavaScript", icon: jsIcon },
      { title: "TypeScript", icon: tsIcon },
      { title: "Java", icon: javaIcon },
      { title: "HTML", icon: htmlIcon },
      { title: "CSS", icon: cssIcon },
    ],
  },
  {
    label: "Frontend",
    technologies: [
      { title: "React", icon: reactIcon },
      { title: "Next.js", icon: nextJSIcon },
      { title: "Tailwind CSS", icon: tailwindcssIcon },
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
      { title: "Digital Ocean", icon: digitalOceanIcon },
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
      "Tailwind CSS",
    ],
  },
  {
    duration: "2022-2023",
    company: "Digikala",
    description:
      "During my time at Digikala my tasks included maintaining and upgrading frontend and backend of the website codes mostly in JavaScript, HTML, and CSS, and React and Java. Working on responsiveness of the website, collaborating with in-house web designers to improve UI design and translating user requirements into implementation plans, and also writing unit tests and fixing the bugs and issues along the way. ",
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
    title: "Events Calendar",
    description:
      "A full-stack calendar app that allows the user to create and manage events in a calendar. The backend is in Spring Boot, and MySQL, and the frontend is in Next.js, Tailwind and TypeScript.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Java",
      "Spring",
      "JUnit",
    ],
    imageLink: eventsCalendarImage,
    gitHub: "https://github.com/Behzadsharafi/EventsCalendar",
    liveSite: "https://events-calendar-five.vercel.app/",
  },
  {
    title: "Zad Fashion",
    description:
      "A clothing e-shop full stack website developed in React.JS, SCSS, with Google Firestore realtime integration. The website showcases essential features such as a user-friendly shopping cart, a personalized list of favorite items, and detailed product pages providing more information about each item. ",
    techStack: ["ReactJS", "SCSS", "Google Firestore"],
    imageLink: zadFashionImage,
    gitHub: "https://github.com/Behzadsharafi/React-eShop",
    liveSite: "https://zadfashion.netlify.app/",
  },
  {
    title: "Employee Management System",
    description:
      "An employee management system written in Java Spring and MySQL database for the backend, and React TypeScript for the frontend. This web app allows the user to create, read, update, and delete employee details using standard CRUD operations.",
    techStack: ["Spring", "Java", "JUnit", "ReactJS", "TypeScript", "SCSS"],
    imageLink: employeeSystemImage,
    gitHub: "https://github.com/Behzadsharafi/EmployeeCreator",
    liveSite: "https://zademployee.netlify.app/",
  },
  {
    title: "Zad Books",
    description:
      "A platform that enables the users to search for books by title, author, etc. By clicking on each search result a modal opens up with more information about each title. I used React.JS and SCSS for front-end and utilized google books API as the backend.",
    techStack: ["ReactJS", "SCSS", "Google Books API"],
    imageLink: zadBooksImage,
    gitHub: "https://github.com/Behzadsharafi/GoogleBooks",
    liveSite: "https://zadbooks.netlify.app/",
  },

  {
    title: "Fake Windows XP",
    description:
      "This is a simulation of Windows XP user interface to exhibit my vanilla JavaScript, HTML, and CSS abilities. There is a start menu and 3 applications that the user can choose from. My focus in this project was on the UI, therefore some buttons and icons are merely placeholders and do not have functionality.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageLink: windowsXPImage,
    gitHub: "https://github.com/Behzadsharafi/FakeOS",
    liveSite: "https://fakewinxp.netlify.app/",
  },
  {
    title: "Postcode API",
    description:
      "An API in Java that allows mobile clients to retrieve and add suburb and postcode combinations. I utilized Spring and MySQL for the backend of this project. The frontend is written in ReactJS and TypeScript .",
    techStack: ["Spring", "Java", "JUnit", "ReactJS", "TypeScript", "SCSS"],
    imageLink: postcodeAPIImage,
    gitHub: "https://github.com/Behzadsharafi/PostcodeFrontend",
    liveSite: "https://postcodeapi.netlify.app/",
  },
  {
    title: "Morse Code Translator",
    description:
      "Explore the world of communication through my Morse Code Translator project crafted with JavaScript, Html and CSS. This interactive web application converts text to Morse code and vice versa, providing a user-friendly experience. I utilized Jest to test the application. The user can type in english or morse code, and the app detects it automatically.",
    techStack: ["JavaScript", "HTML", "CSS", "Jest"],
    imageLink: morseTranslatorImage,
    gitHub: "https://github.com/Behzadsharafi/MorseCodeTranslator",
    liveSite: "https://zadmorse.netlify.app/",
  },
  {
    title: "Minesweeper in Java",
    description:
      "A Minesweeper game in Java which allows the user to customize the number of mines and also the grid dimensions. In this Java game I have utilized AWT to create a graphical user interface.",
    techStack: ["Java", "Awt"],
    imageLink: minesweeperImage,
    gitHub: "https://github.com/Behzadsharafi/minesweeper",
  },
  {
    title: "Portfolio Website",
    description:
      "My portfolio website written in ReactJS, SCSS, and Google Firebase. I have put some of my latest projects here. This website enables the user to directly send me a message using the contact form.",
    techStack: ["ReactJS", "SCSS", "Google Firebase"],
    imageLink: portfolioImage,
    gitHub: "https://github.com/Behzadsharafi/PortfolioV2",
    liveSite: "https://zadsharafi.netlify.app/",
  },
];
