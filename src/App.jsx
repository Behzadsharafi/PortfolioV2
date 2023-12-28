import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import ActiveTabContextProvider from "./context/ActiveTabContextProvider";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ActiveTabContextProvider>
      <BrowserRouter>
        <div className={styles.app}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ActiveTabContextProvider>
  );
}

export default App;
