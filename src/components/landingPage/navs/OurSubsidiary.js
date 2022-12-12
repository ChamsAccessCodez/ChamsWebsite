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
import pensionCentralIcon from "../../../images/PensionCentralIcon.svg";
import argonIcon from "../../../images/ArgonIcon.svg";

const OurSubsidiary = () => {
  return (
    <SubsidiaryContainer>
      <Left>
        <Pension>
          <img src={pensionCentralIcon} alt="aboutIcon" />
          <a
            href="https://pensioncentral.ng/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#ffffff",
            }}
          >
            <Content>
              <P1>Pension Central</P1>
              <p>Pension Remittance Gateway</p>
            </Content>
            </a>
        </Pension>
        <ArgonWorld>
          <img src={argonIcon} alt="aboutIcon" />
          <a
            href="https://argone.ng/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#ffffff",
            }}
          >
            <Content>
              <P1>Argone World</P1>
              <p>Providing best-in-class retail experience</p>
            </Content>
          </a>
        </ArgonWorld>
      </Left>
    </SubsidiaryContainer>
  );
};

export default OurSubsidiary;
