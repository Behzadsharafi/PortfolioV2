import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
