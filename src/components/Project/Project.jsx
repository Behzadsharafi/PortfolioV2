import styles from "./Project.module.scss";

import googleBooksIcon from "../../assets/googleBooks.png";

const Project = ({ project }) => {
  return (
    <article className={styles.project}>
      <div className={styles.project__details}>
        <div className={styles.project__details__heading}>
          <h2 className={styles.project__details__heading__featured}>
            Featured Project
          </h2>
          <h2 className={styles.project__details__heading__title}>
            {project.title}
          </h2>
        </div>

        <p className={styles.project__details__description}>
          {project.description}
        </p>
        <ul className={styles.project__details__techStack}>
          {project.techStack.map((tech) => (
            <li>{tech} </li>
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
      <div id="card" className={styles.project__imageContainer}>
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
