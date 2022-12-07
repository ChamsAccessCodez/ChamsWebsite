import React from "react";
import { Link } from "react-router-dom";
import {
  SubsidiaryContainer,
  Left,
  Pension,
  ArgonWorld,
  Content,
  P1,
} from "./OurSubsidiaryStyle.js";
import biometricIcon from "../../../images/BiometricIcon.svg";
import paymentSolution from "../../../images/PaymentSolution.svg";

const OurSubsidiary = () => {
  return (
    <SubsidiaryContainer>
      <Left>
        <Pension>
          <img src={biometricIcon} alt="aboutIcon" />
          <Link
            to="/pc"
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
        </Pension>
        <ArgonWorld>
          <img src={paymentSolution} alt="aboutIcon" />
          <Link
            to="/argone"
            style={{
              textDecoration: "none",
            }}
          >
            <Content>
              <P1>Payment Solutions</P1>
              <p>Infrastructure and technologies for financial institutions</p>
            </Content>
          </Link>
        </ArgonWorld>
      </Left>
    </SubsidiaryContainer>
  );
};

export default OurSubsidiary;
