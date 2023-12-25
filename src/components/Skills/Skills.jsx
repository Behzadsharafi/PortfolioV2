import { library } from "@fortawesome/fontawesome-svg-core";
import styles from "./Skills.module.scss";

const Skills = ({ skills }) => {
  return (
    <ul className={styles.skills}>
      {skills.map((skill) => (
        <article className={styles.skills__article} key={skill.label}>
          <h1 className={styles.skills__article__heading}>{skill.label}</h1>
          <ul className={styles.skills__article__list}>
            {skill.technologies.map((technology) => (
              <li
                key={technology.title}
                className={styles.skills__article__list__item}
              >
                <img
                  className={styles.skills__article__list__item__icon}
                  src={technology.icon}
                  alt={`${technology.title} icon`}
                />
                <span className={styles.skills__article__list__item__title}>
                  {technology.title}
                </span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </ul>
  );
};

export default Skills;
