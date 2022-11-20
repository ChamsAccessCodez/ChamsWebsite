import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/landingPage/header/Header";
// import Footer from "./components/landingPage/footer/Footer";
import Chams from "./components/main/main";
import Contact from "./components/pages/ContactUs";
import About from "./components/pages/AboutUs";
import PC from "./components/subPages/PensionCentral";
import RequestCallback from "./components/subPages/RequestCallback";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Chams />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/pc" element={<PC />} />
        <Route exact path="/callback" element={<RequestCallback />} />
        <Route exact path="/callback" element={<RequestCallback />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
