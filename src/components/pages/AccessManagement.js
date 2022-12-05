import React, { useEffect } from "react";
import {Link} from "react-router-dom"
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
  AccessControlComponent
} from "./AccessManagementStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import accessManagementImage1 from "../../images/AccessManagementImage1.png";
import accessManagementImage2 from "../../images/AccessManagementImage2.png";
import secureKidNav from "../../images/SecureKidNav.png";
import secureKidIcon from "../../images/SecureKidIcon.svg";
import kidArrow from "../../images/KidArrow.svg";

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
      <AccessControlComponent>some stuff will be here</AccessControlComponent>
      <Footer />
    </AccessManagementContainer>
  );
};

export default AccessManagement;
