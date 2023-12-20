import Cube from "../../components/Cube/Cube";
import styles from "./Homepage.module.scss";
import reactIcon from "../../assets/react.svg";
import jsIcon from "../../assets/javascript.svg";
import javaIcon from "../../assets/java.svg";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import mysqlIcon from "../../assets/mysql.svg";
import sassIcon from "../../assets/sass.svg";
import springIcon from "../../assets/spring.svg";
import gitIcon from "../../assets/git.svg";
import tsIcon from "../../assets/typescript.svg";
import nestjsIcon from "../../assets/nestjs.svg";

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
        <Cube bottom={0.2} left={0.5} icon={reactIcon} initialRotation={150} />
        <Cube
          size={30}
          bottom={0.5}
          left={0.5}
          icon={jsIcon}
          initialRotation={0}
        />
        <Cube bottom={0.3} left={0.3} icon={javaIcon} initialRotation={50} />
        <Cube bottom={0.6} left={0.1} icon={htmlIcon} initialRotation={0} />
        <Cube bottom={0.75} left={0.2} icon={cssIcon} initialRotation={0} />
        <Cube bottom={0.5} left={0.3} icon={mysqlIcon} initialRotation={30} />
        <Cube bottom={0.2} left={0.2} icon={sassIcon} initialRotation={0} />
        <Cube bottom={0.1} left={0.1} icon={springIcon} initialRotation={70} />
        <Cube bottom={0.7} left={0.6} icon={gitIcon} initialRotation={80} />
        <Cube bottom={0.2} left={0.8} icon={tsIcon} initialRotation={300} />
        <Cube bottom={0.7} left={0.4} icon={nestjsIcon} initialRotation={200} />
      </div>
    </main>
  );
};

export default HomePage;
