import React from "react";
import { Link } from "react-router-dom";
import {
  SolutionContainer,
  Left,
  Right,
  Biometric,
  Payment,
  AccessManagement,
  Content,
  P1,
  CyberSecurity,
  CustomSolution,
} from "./OurSolutionStyle.js";
import biometricIcon from "../../../images/BiometricIcon.svg";
import paymentSolution from "../../../images/PaymentSolution.svg";
import cyberSecurityIcon from "../../../images/CybersecurityIcon.svg";
import AccessManagementIcon from "../../../images/AccessManagementIcon.svg";
import customSolutionIcon from "../../../images/CustomSolutionIcon.svg";
// import AccessManagement from "../../pages/AccessManagement.js";

const OurSolutions = () => {
  return (
    <SolutionContainer>
      <Left>
        <Biometric>
          <img src={biometricIcon} alt="aboutIcon" />
          <Link
            to="/biometric-solutions"
            style={{
              textDecoration: "none",
            }}
          >
            <Content>
              <P1>Biometrics Solutions</P1>
              <p>
                Hardware and software offerings for enrollment and verification
              </p>
            </Content>
          </Link>
        </Biometric>
        <Payment>
          <img src={paymentSolution} alt="aboutIcon" />
          <Link
            to="/payment-solutions"
            style={{
              textDecoration: "none",
            }}
          >
            <Content>
              <P1>Payment Solutions</P1>
              <p>Infrastructure and technologies for financial institutions</p>
            </Content>
          </Link>
        </Payment>
        <AccessManagement>
          <img src={AccessManagementIcon} alt="aboutIcon" />
          <Link
            to="/access-and-identity-solutions"
            style={{
              textDecoration: "none",
            }}
          >
            <Content>
              <P1>Access Management Solutions</P1>
              <p>Creating access for a safer world</p>
            </Content>
          </Link>
        </AccessManagement>
      </Left>
      <Right>
        <CyberSecurity>
          <img src={cyberSecurityIcon} alt="aboutIcon" />
          <Link
            to="/cybersecurity-solutions"
            style={{
              textDecoration: "none",
            }}
          >
            <Content>
              <P1>Cybersecurity Solutions</P1>
              <p>Endpoint protection and monitoring of critical IT assets</p>
            </Content>
          </Link>
        </CyberSecurity>
        <CustomSolution>
          <img src={customSolutionIcon} alt="aboutIcon" />
          <Link
            to="/customized-solutions"
            style={{
              textDecoration: "none",
            }}
          >
            <Content>
              <P1>Custom Solutions</P1>
              <p>Bespoke solutions for specific needs.</p>
            </Content>
          </Link>
        </CustomSolution>
      </Right>
    </SolutionContainer>
  );
};

export default OurSolutions;
