import styles from "./Project.module.scss";

import googleBooksIcon from "../../assets/googleBooks.png";

const Project = () => {
  return (
    <article className={styles.project}>
      <svg className={styles.svg}>
        <defs>
          <filter id="noise">
            <feTurbulence
              baseFrequency="0.7,0.8"
              numOctaves="1"
              seed="0"
              type="fractalNoise"
              result="static"
            >
              <animate
                attributeName="seed"
                values="0;100"
                dur="80ms"
                repeatCount="5"
                begin="card.mouseenter"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="static">
              <animate
                attributeName="scale"
                values="0;40;0"
                dur="80ms"
                repeatCount="5"
                begin="card.mouseenter"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>
      <div className={styles.project__details}>
        <h2 className={styles.project__details__title}>Zad Books</h2>
        <p className={styles.project__details__description}>
          A platform that enables the users to search for books and get more
          details about a certain title. I used React.JS and SCSS for front-end
          and utilized google books API as the backend.
        </p>
      </div>
      <div id="card" className={styles.project__imageContainer}>
        <img
          src={googleBooksIcon}
          alt=""
          className={styles.project__imageContainer__image}
        />
      </div>
    </article>
  );
};

export default Project;
