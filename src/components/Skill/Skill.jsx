import styles from "./Skill.module.scss";

const Skill = ({ skills, title }) => {
  return (
    <div className={styles.skill}>
      <h1 className={styles.skill__heading}>{title}</h1>
      <ul className={styles.skill__list}>
        {skills.map((skill) => (
          <li className={styles.skill__list__item}>
            <img
              className={styles.skill__list__item__icon}
              src={skill.icon}
              alt={`${skill.title} icon`}
            />
            <span className={styles.skill__list__item__title}>
              {skill.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
