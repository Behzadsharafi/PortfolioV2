import { useContext } from "react";
import Project from "../../components/Project/Project";
import styles from "./ProjectsPage.module.scss";
import { useEffect } from "react";
import { ActiveTabContext } from "../../context/ActiveTabContextProvider";
import zadBooksIcon from "../../assets/googleBooks.png";
import zadFashionIcon from "../../assets/zadFashion.png";

const ProjectsPage = () => {
  const { setActiveTab } = useContext(ActiveTabContext);
  useEffect(() => {
    setActiveTab("projects");
  }, []);

  const projects = [
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
        "A clothing e-shop full stack website developed in React.JS, SCSS, with Google Firestore realtime integration.",
      techStack: ["ReactJS", "SCSS", "Google Firestore"],
      imageLink: zadFashionIcon,
      gitHub: "https://github.com/Behzadsharafi/React-eShop",
      liveSite: "https://zadfashion.netlify.app/",
    },
    {
      title: "Fake Windows XP",
      description:
        "This is a simulation of Windows XP user interface to exhibit my vanilla JavaScript, HTML, and CSS abilities. There is a start menu and 3 applications that the user can choose from. My focus in this project was on the UI, therefore some buttons and icons are merely placeholders and do not hav functionality.",
      techStack: ["HTML", "CSS", "JavaScript"],
      imageLink: zadFashionIcon,
      gitHub: "https://github.com/Behzadsharafi/FakeOS",
      liveSite: "https://fakewinxp.netlify.app/",
    },
  ];

  return (
    <main className={styles.projectsPage}>
      <div className={styles.projectsPage__content}>
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
