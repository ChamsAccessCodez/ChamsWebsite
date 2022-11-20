import React, { useEffect } from "react";
import Hero from "../landingPage/hero/Hero";
import SecurityAccess from "../landingPage/securityAccess/SecurityAccess";
import About from "../landingPage/about/About";
import Testimonial from "../landingPage/trustee/Trustee";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
// import OurSolutions from "../landingPage/navs/OurSolutions";
import { MainWrapper } from "./mainStyle";

const Main = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <MainWrapper>
      {/* <OurSolutions /> */}
      <Header />
      <Hero />
      <SecurityAccess />
      <About />
      <Testimonial />
      <Footer />
    </MainWrapper>
  );
};

export default Main;
