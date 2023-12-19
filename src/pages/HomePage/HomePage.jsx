import Cube from "../../components/Cube/Cube";
import styles from "./Homepage.module.scss";
import reactIcon from "../../assets/react.svg";
import jsIcon from "../../assets/javascript.svg";
import javaIcon from "../../assets/java.svg";

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
          bottom={0.1}
          left={0.5}
          rotationSpeed={0.1}
          icon={reactIcon}
        />
        <Cube
          size={30}
          bottom={0.5}
          left={0.5}
          rotationSpeed={-0.09}
          icon={jsIcon}
        />
        <Cube
          size={50}
          bottom={0.3}
          left={0.3}
          rotationSpeed={0.09}
          icon={javaIcon}
        />
      </div>
    </main>
  );
};

export default HomePage;
