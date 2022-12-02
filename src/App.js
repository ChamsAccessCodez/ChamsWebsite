import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/landingPage/header/Header";
// import Footer from "./components/landingPage/footer/Footer";
import Chams from "./components/main/main";
import Contact from "./components/pages/ContactUs";
import About from "./components/pages/AboutUs";
import PC from "./components/pages/PensionCentral";
import RequestCallback from "./components/pages/RequestCallbackForm";
import Careers from "./components/pages/CareersForm";
import CareersPage from "./components/pages/CareersPage";
import Biometric from "./components/pages/Biometric";
import CyberSecurity from "./components/pages/CyberSecurity";
import PaymentSolution from "./components/pages/PaymentSolution";
import CustomSolution from "./components/pages/CustomSolutions";

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
        <Route exact path="/career-form" element={<Careers />} />
        <Route exact path="/career-page" element={<CareersPage />} />
        <Route exact path="/biometric" element={<Biometric />} />
        <Route exact path="/cybersecurity" element={<CyberSecurity />} />
        <Route exact path="/payment-solution" element={<PaymentSolution />} />
        <Route exact path="/custom-solution" element={<CustomSolution />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
