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
import SecureKids from "./components/pages/SecureKids";
import VisitorManage from "./components/pages/VisitorManage";
import Surveilance from "./components/pages/Surveilance";
import AccessControl from "./components/pages/AccessControl";
import AccessManagement from "./components/pages/AccessManagement";
import Argone from "./components/pages/ArgonePage";
import ManagementTeam from "./components/pages/ManagementTeam";
import Dumebi from "./components/subPages/DumebiObodo";
import Olayemi from "./components/subPages/Olayemi";
import Gbenga from "./components/subPages/Gbenga";
import Dami from "./components/subPages/Dami";
import Uche from "./components/subPages/Uche";
import Seun from "./components/subPages/Seun";
import Modal from "./components/subPages/modal/Modal";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Chams />} />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/pension-central" element={<PC />} />
        <Route exact path="/request-a-callback" element={<RequestCallback />} />
        <Route exact path="/career-form" element={<Careers />} />
        <Route exact path="/career-page" element={<CareersPage />} />
        <Route exact path="/biometric-solutions" element={<Biometric />} />
        <Route exact path="/cybersecurity-solutions" element={<CyberSecurity />} />
        <Route exact path="/payment-solutions" element={<PaymentSolution />} />
        <Route exact path="/customized-solutions" element={<CustomSolution />} />
        <Route exact path="/secure-kid" element={<SecureKids />} />
        <Route exact path="/visitors-management-solutions" element={<VisitorManage />} />
        <Route exact path="/surveillance-and-security" element={<Surveilance />} />
        <Route exact path="/access-control-solutions" element={<AccessControl />} />
        <Route exact path="/access-and-identity-solutions" element={<AccessManagement />} />
        <Route exact path="/argone-world" element={<Argone />} />
        <Route exact path="/leadership-team" element={<ManagementTeam />} />
        <Route exact path="/dumebi" element={<Dumebi />} />
        <Route exact path="/olayemi" element={<Olayemi />} />
        <Route exact path="/gbenga" element={<Gbenga />} />
        <Route exact path="/dami" element={<Dami />} />
        <Route exact path="/uche" element={<Uche />} />
        <Route exact path="/seun" element={<Seun />} />
        <Route exact path="/modal" element={<Modal />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
