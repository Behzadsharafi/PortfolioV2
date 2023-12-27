import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import styles from "./App.module.scss";
import AboutPage from "./pages/AboutPage/AboutPage";
import ActiveTabContextProvider from "./context/ActiveTabContextProvider";
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
