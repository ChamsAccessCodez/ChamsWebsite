import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/landingPage/header/Header";
import Footer from "./components/landingPage/footer/Footer";
import Chams from "./components/main/main";
import Contact from "./components/pages/ContactUs"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Chams />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
