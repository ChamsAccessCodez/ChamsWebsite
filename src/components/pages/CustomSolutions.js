import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  CustomSolutionsContainer,
  Customizable,
  CustomBanner,
  ContentWrapper,
  P1,
  P2,
  CustomButton,
  OurTeam,
  TeamWrapper,
  Left1,
  Right1,
  BuildingSolution,
  BuildingCardWrapper,
  TextDiv,
  Ready,
  RequestButton,
} from "./CustomSolutionsStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import teamImage from "../../images/TeamImage1.png";
import CustomCard from "./CustomCard";
import financeAndCustomImage from "../../images/FinanceAndPaymentIcon.png";

const CustomSolutions = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <CustomSolutionsContainer>
      <Header />
      <Customizable>
        <CustomBanner>
          <ContentWrapper>
            <P1>
              We offer customizable solutions to address the challenges you face
              every day.
            </P1>
            <P2>
              We are constantly evolving, learning, listening, and understanding
              some of the biggest challenges faced across the industries we
              serve.
            </P2>
            <CustomButton>Request a callback</CustomButton>
          </ContentWrapper>
        </CustomBanner>
      </Customizable>
      <OurTeam>
        <TeamWrapper>
          <Left1>
            <img src={teamImage} alt="team" />
          </Left1>
          <Right1>
            <p>
              Our team of software development, engineering, research, and
              development have the required expertise to build reliable,
              scalable, and fully functional solutions.
            </p>
          </Right1>
        </TeamWrapper>
      </OurTeam>
      <BuildingSolution>
        <p>Build your custom solution</p>
        <BuildingCardWrapper>
          <CustomCard
            customSourceImage={financeAndCustomImage}
            customTitle="Finance and Payments"
            customDescription="Bespoke Infrastructures for commercial banks, microfinance banks, neo
      banks, and digital banks."
          />
          <CustomCard
            customSourceImage={financeAndCustomImage}
            customTitle="Identity
            Management"
            customDescription="Eliminate uncertainty. Know your Customers and Know your Business."
          />
          <CustomCard
            customSourceImage={financeAndCustomImage}
            customTitle="Intelligent
            Systems"
            customDescription="Build advanced computer systems that can gather, analyze and respond to computed or gathered data."
          />
          <CustomCard
            customSourceImage={financeAndCustomImage}
            customTitle="Workplace Management"
            customDescription="Enhanced employee relations, visitor management, and vicinity security."
          />
          <CustomCard
            customSourceImage={financeAndCustomImage}
            customTitle="Enrollment and Verification"
            customDescription="Multi-industrial applications to simplify registration and accreditation of your most valued assets - people."
          />
          <CustomCard
            customSourceImage={financeAndCustomImage}
            customTitle="Surveillance and Security"
            customDescription="Keep a close eye on important assets, onsite and remotely, and build access for safer communities."
          />
        </BuildingCardWrapper>
      </BuildingSolution>
      <TextDiv>
        <Ready>Ready to build for the future?</Ready>
        {/* <p>
          Rely on our experience securing innovative hardware and software
          solutions for the world's largest global corporations.
        </p> */}
        <NavLink to="/career-form" style={{ textDecoration: "none" }}>
          <RequestButton>Request a callback</RequestButton>
        </NavLink>
      </TextDiv>
      <Footer />
    </CustomSolutionsContainer>
  );
};

export default CustomSolutions;
