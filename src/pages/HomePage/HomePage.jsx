import Cube from "../../components/Cube/Cube";
import styles from "./HomePage.module.scss";
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
import nextjsIcon from "../../assets/nextjs.svg";
import jestIcon from "../../assets/jest.svg";

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
          size={30}
          bottom={0.7}
          left={0.85}
          icon={jsIcon}
          initialRotation={0}
        />
        <Cube bottom={0.3} left={0.8} icon={reactIcon} initialRotation={30} />
        <Cube
          bottom={0.55}
          left={0.65}
          icon={javaIcon}
          initialRotation={0}
          rotationSpeed={-0.2}
        />
        <Cube bottom={0.08} left={0.83} icon={htmlIcon} initialRotation={60} />
        <Cube
          bottom={0.8}
          left={0.6}
          icon={cssIcon}
          initialRotation={0}
          rotationSpeed={-0.2}
        />
        <Cube
          bottom={0.4}
          left={0.45}
          icon={nestjsIcon}
          initialRotation={120}
        />
        <Cube
          bottom={0.1}
          left={0.6}
          icon={sassIcon}
          initialRotation={120}
          rotationSpeed={-0.2}
        />
        <Cube
          bottom={0.65}
          left={0.35}
          icon={springIcon}
          initialRotation={330}
        />
        <Cube bottom={0.32} left={0.2} icon={gitIcon} initialRotation={0} />
        <Cube bottom={0.2} left={0.35} icon={tsIcon} initialRotation={180} />
        <Cube
          bottom={0.75}
          left={0.1}
          icon={mysqlIcon}
          initialRotation={210}
          rotationSpeed={-0.2}
        />
        <Cube
          bottom={0.4}
          left={0.13}
          icon={nextjsIcon}
          initialRotation={240}
          rotationSpeed={-0.2}
        />
        <Cube bottom={0.1} left={0.05} icon={jestIcon} initialRotation={270} />
      </div>
    </main>
  );
};

export default HomePage;
