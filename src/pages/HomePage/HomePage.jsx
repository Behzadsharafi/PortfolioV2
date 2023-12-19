import Cube from "../../components/Cube/Cube";
import styles from "./Homepage.module.scss";
import reactIcon from "../../assets/react.svg";
import jsIcon from "../../assets/javascript.svg";
import javaIcon from "../../assets/java.svg";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import sqlIcon from "../../assets/sql.svg";
import sassIcon from "../../assets/sass.svg";
import springIcon from "../../assets/spring.svg";

const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <div className={styles.homePage__content}>
        <h1 className={styles.homePage__content__heading}>
          Hello there! <br />
        </h1>
        <p className={styles.homePage__content__para1}>
          My name is Zad Sharafi
        </p>
        <p className={styles.homePage__content__para2}>I am a Web Developer</p>
        <p className={styles.homePage__content__para3}>
          Welcome to my website!
        </p>
        <Cube
          size={50}
          bottom={0.2}
          left={0.5}
          rotationSpeed={0.3}
          icon={reactIcon}
          initialRotation={30}
        />
        <Cube
          size={30}
          bottom={0.5}
          left={0.5}
          rotationSpeed={-0.3}
          icon={jsIcon}
          initialRotation={0}
        />
        <Cube
          size={50}
          bottom={0.3}
          left={0.3}
          rotationSpeed={0.3}
          icon={javaIcon}
          initialRotation={60}
        />
        <Cube
          size={50}
          bottom={0.6}
          left={0.1}
          rotationSpeed={0.3}
          icon={htmlIcon}
          initialRotation={30}
        />
        <Cube
          size={50}
          bottom={0.75}
          left={0.2}
          rotationSpeed={0.3}
          icon={cssIcon}
          initialRotation={0}
        />
        <Cube
          size={50}
          bottom={0.5}
          left={0.3}
          rotationSpeed={0.3}
          icon={sqlIcon}
          initialRotation={0}
        />
        <Cube
          size={50}
          bottom={0.2}
          left={0.2}
          rotationSpeed={0.3}
          icon={sassIcon}
          initialRotation={0}
        />
        <Cube
          size={50}
          bottom={0.1}
          left={0.1}
          rotationSpeed={0.3}
          icon={springIcon}
          initialRotation={0}
        />
      </div>
    </main>
  );
};

export default HomePage;
