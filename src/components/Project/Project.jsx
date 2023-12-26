import styles from "./Project.module.scss";

import googleBooksIcon from "../../assets/googleBooks.png";

const Project = ({ project, index }) => {
  return (
    <article
      className={
        index % 2 === 1
          ? `${styles.project} ${styles.project__odd}`
          : styles.project
      }
    >
      <div
        className={
          index % 2 === 1
            ? `${styles.project__details} ${styles.project__details__odd}`
            : styles.project__details
        }
      >
        <div
          className={
            index % 2 === 1
              ? `${styles.project__details__heading} ${styles.project__details__heading__odd}`
              : styles.project__details__heading
          }
        >
          <h2 className={styles.project__details__heading__featured}>
            Featured Project
          </h2>
          <h2 className={styles.project__details__heading__title}>
            {project.title}
          </h2>
        </div>

        <p
          className={
            index % 2 === 1
              ? `${styles.project__details__description} ${styles.project__details__description__odd}`
              : styles.project__details__description
          }
        >
          {project.description}
        </p>
        <ul className={styles.project__details__techStack}>
          {project.techStack.map((tech) => (
            <li key={tech}>{tech} </li>
          ))}
        </ul>
        <ul className={styles.project__details__links}>
          <li>
            <a href={project.liveSite} target="_blank">
              <i className="bx bx-link-external"></i>
            </a>
          </li>
          <li>
            <a href={project.gitHub} target="_blank">
              <i className="bx bxl-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div
        id="card"
        className={
          index % 2 === 1
            ? `${styles.project__imageContainer} ${styles.project__imageContainer__odd}`
            : styles.project__imageContainer
        }
      >
        <img
          src={project.imageLink}
          alt={`${project.title} image`}
          className={styles.project__imageContainer__image}
        />
      </div>
    </article>
  );
};

export default Project;
