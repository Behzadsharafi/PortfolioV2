import styles from "./Homepage.module.scss";

const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <div className={styles.homePage__content}>
        <h1 class="main__content__heading">
          Hello there! <br />
        </h1>
        <p class="main__content__para1">My name is Zad Sharafi</p>
        <p class="main__content__para2">I am a Software Engineer</p>
        <p class="main__content__para3">Welcome to my website!</p>
      </div>
    </main>
  );
};

export default HomePage;
