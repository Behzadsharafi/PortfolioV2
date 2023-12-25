import styles from "./Experience.module.scss";
import nologyIcon from "../../assets/_nology.png";
import { Link } from "react-router-dom";
import Tag from "../Tag/Tag";

const Experience = ({ experiences }) => {
  return (
    <ul className={styles.experiences}>
      {experiences.map((experience) => (
        <li className={styles.experiences__item} key={experience.company}>
          <h1 className={styles.experiences__item__duration}>
            {experience.duration}
          </h1>
          <a
            href={experience.link}
            target="_blank"
            className={styles.experiences__item__heading}
          >
            <img
              src={experience.icon}
              alt={`${experience.company} icon`}
              className={styles.experiences__item__heading__icon}
            />
            <span className={styles.experiences__item__heading__company}>
              {experience.company}
            </span>
          </a>
          <p className={styles.experiences__item__description}>
            {experience.description}
          </p>
          <ul className={styles.experiences__item__tags}>
            {experience.tags?.map((tag) => (
              <Tag className={styles.experiences__item__tags__item} key={tag}>
                {tag}
              </Tag>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
