import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AccessManagementContainer,
  Management,
  Div1,
  Div2,
  M1,
  M2,
  AccessManagementButton,
  ManagementHistory,
  ManagementWrapper,
  ManagementLeft,
  ManagementRight,
  TextHeader,
  SecureKidComponent,
  KidDivider,
  KidLeft,
  KidRight,
  K1,
  K2,
  KidOption,
  OptList,
  KidNav,
  Name,
  AccessControlComponent,
  ControlDivider,
  ControlLeft,
  ControlRight,
  AccessName,
  AccessNav,
  C1,
  C2,
  VisitorsManagementComponent,
  VisitorDivider,
  VisitorLeft,
  VisitorRight,
  V1,
  V2,
  SurveillanceComponent,
  SurveillanceDivider,
  SurveillanceLeft,
  SurveillanceRight,
  SurveillanceNav,
  SurveillanceName,
  S1,
  S2,
  IndustriesWeServe,
  Gradient,
  ServeContent,
  ServeLeft,
  L1,
  L2,
  ServeRight,
  R1,
  R2,
  R3,
  R4,
  R5,
} from "./AccessManagementStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import accessManagementImage1 from "../../images/AccessManagementImage1.png";
import accessManagementImage2 from "../../images/AccessManagementImage2.png";
import secureKidNav from "../../images/SecureKidNav.png";
import secureKidIcon from "../../images/SecureKidIcon.svg";
import kidArrow from "../../images/KidArrow.svg";
import AccessArrow from "../../images/AccessArrow.svg";
import accessManagementImage3 from "../../images/AccessManagementImage3.png";
import accessManagementImage4 from "../../images/AccessManagementImage4.png";
import accessManagementImage5 from "../../images/AccessManagementImage5.png";

const AccessManagement = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <AccessManagementContainer>
      <Header />
      <Management>
        <Div1>
          <M1>Creating access to a safer world</M1>
          <M2>
            Powerful, Scalable Solutions to protect your people, workplace and
            IT assets.
          </M2>
          <AccessManagementButton>Request a callback</AccessManagementButton>
        </Div1>
        <Div2>
          <img src={accessManagementImage1} alt="div" />
        </Div2>
      </Management>
      <ManagementHistory>
        <ManagementWrapper>
          <ManagementLeft>
            <img src={accessManagementImage2} alt="management" />
          </ManagementLeft>
          <ManagementRight>
            <TextHeader>
              For over 15 years, we have provided advanced digital solutions in
              access management, integrated biometric technologies and versatile
              terminals for ensuring a safer world.
            </TextHeader>
            <p>
              Every digital and physical interaction begins with identity. We
              help build trusted identity and access management for customers
              and employees.
              <br />
              <br />
              Over the years, we have successfully deployed comprehensive
              security systems incorporating a variety of technologies such as
              physical and logical security technology needs, systems
              integration, systems servicing, and remote monitoring
            </p>
          </ManagementRight>
        </ManagementWrapper>
      </ManagementHistory>
      <SecureKidComponent>
        <KidDivider>
          <KidLeft>
            <K1>Secure Kid solution for Schools</K1>
            <K2>
              Innovative solution designed to ensure efficient management and
              security of child/ward drop-off and pickup at school.
            </K2>
            <KidOption>
              <OptList>
                <img src={secureKidIcon} alt="kids" />
                <p>Student GPS Positioning (Out Of School)</p>
              </OptList>
              <OptList>
                <img src={secureKidIcon} alt="kids" />
                <p>Picking Up Students With Biometric Verification</p>
              </OptList>
              <OptList>
                <img src={secureKidIcon} alt="kids" />
                <p>Student And Teacher Time Attendance Management</p>
              </OptList>
              <OptList>
                <img src={secureKidIcon} alt="kids" />
                <p>
                  Mobile APP For Guardian To Receive Notifications Of Students
                </p>
              </OptList>
            </KidOption>
            <Link to="/secure-kids" style={{ textDecoration: "none" }}>
              <KidNav>
                <Name>Learn more</Name>
                <img src={kidArrow} alt="kidArrow" />
              </KidNav>
            </Link>
          </KidLeft>
          <KidRight>
            <img src={secureKidNav} alt="secure" />
          </KidRight>
        </KidDivider>
      </SecureKidComponent>
      <AccessControlComponent>
        <ControlDivider>
          <ControlLeft>
            <img src={accessManagementImage3} alt="access" />
          </ControlLeft>
          <ControlRight>
            <C1>Access Control/Time and Attendance </C1>
            <C2>
              We deliver a broad array of security solutions around access
              control, intrusion detection, video surveillance, and management.
              Our OEM partnerships enable our customers to get competitive
              offers and world-class support on high-quality products and
              systems.
            </C2>
            <Link to="/access-control" style={{ textDecoration: "none" }}>
              <AccessNav>
                <AccessName>Learn more</AccessName>
                <img src={AccessArrow} alt="AccessArrow" />
              </AccessNav>
            </Link>
          </ControlRight>
        </ControlDivider>
      </AccessControlComponent>
      <VisitorsManagementComponent>
        <VisitorDivider>
          <VisitorLeft>
            <V1>Visitors Management Solution</V1>
            <V2>
              Welcome guests with the intuitive visitor management system that
              safeguards your workplace and supercharges your front desk.
            </V2>
            <Link to="/visitor" style={{ textDecoration: "none" }}>
              <AccessNav>
                <AccessName>Learn more</AccessName>
                <img src={AccessArrow} alt="AccessArrow" />
              </AccessNav>
            </Link>
          </VisitorLeft>
          <VisitorRight>
            <img src={accessManagementImage4} alt="Visitor" />
          </VisitorRight>
        </VisitorDivider>
      </VisitorsManagementComponent>
      <SurveillanceComponent>
        <SurveillanceDivider>
          <SurveillanceLeft>
            <img src={accessManagementImage5} alt="surveillance" />
          </SurveillanceLeft>
          <SurveillanceRight>
            <S1>Surveillance and Security: </S1>
            <S2>
              Protect your business from theft, vandalism and intruders with our
              comprehensive video surveillance systems and CCTV systems.
            </S2>
            <Link to="/surveillance" style={{ textDecoration: "none" }}>
              <SurveillanceNav>
                <SurveillanceName>Learn more</SurveillanceName>
                <img src={AccessArrow} alt="AccessArrow" />
              </SurveillanceNav>
            </Link>
          </SurveillanceRight>
        </SurveillanceDivider>
      </SurveillanceComponent>
      <IndustriesWeServe>
        <Gradient />
        <ServeContent>
          <ServeLeft>
            <L1>Industries We Serve</L1>
            <L2>
              Our access management solutions are applicable and currently serve
              multiple industries, not limited to:
            </L2>
          </ServeLeft>
          <ServeRight>
            <R1>Retail</R1>
            <R2>Education</R2>
            <R3>Government</R3>
            <R4>Manufacturing</R4>
            <R5>Banking & Finance</R5>
          </ServeRight>
        </ServeContent>
      </IndustriesWeServe>
      <Footer />
    </AccessManagementContainer>
  );
};

export default AccessManagement;
