import { useContext } from "react";
import Project from "../../components/Project/Project";
import styles from "./ProjectsPage.module.scss";
import { useEffect } from "react";
import { ActiveTabContext } from "../../context/ActiveTabContextProvider";
import { projects } from "../../data/data";

const ProjectsPage = () => {
  const { setActiveTab } = useContext(ActiveTabContext);
  useEffect(() => {
    setActiveTab("projects");
  }, []);

  return (
    <main className={styles.projectsPage}>
      <div className={styles.projectsPage__content}>
        <h2 className={styles.projectsPage__content__heading}>
          Some Of My Projects
        </h2>
        <ul className={styles.projectsPage__content__projectList}>
          {projects.map((project, index) => (
            <Project index={index} key={index} project={project} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ProjectsPage;
