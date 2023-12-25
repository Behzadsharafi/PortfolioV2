import { useContext } from "react";
import Project from "../../components/Project/Project";
import styles from "./ProjectsPage.module.scss";
import { useEffect } from "react";
import { ActiveTabContext } from "../../context/ActiveTabContextProvider";

const ProjectsPage = () => {
  const { setActiveTab } = useContext(ActiveTabContext);
  useEffect(() => {
    setActiveTab("projects");
  }, []);

  const projects = [1, 2, 3];

  return (
    <main className={styles.projectsPage}>
      <div className={styles.projectsPage__content}>
        {projects.map((project) => (
          <Project />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
