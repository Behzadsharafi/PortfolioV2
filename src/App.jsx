import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import ActiveTabContextProvider from "./context/ActiveTabContextProvider";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <ActiveTabContextProvider>
      <BrowserRouter>
        <div className={styles.app}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ActiveTabContextProvider>
  );
}

export default App;
