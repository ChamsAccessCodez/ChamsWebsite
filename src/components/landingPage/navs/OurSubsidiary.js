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
          <Link to="/pc" style={{
            textDecoration: "none",
          }}>
            <Content>
              <P1>Pension Central</P1>
              <p>Pension Remittance Gateway</p>
            </Content>
            </Link>
        </Pension>
        <ArgonWorld>
          <img src={argonIcon} alt="aboutIcon" />
          <Link to="/argone" style={{
            textDecoration: "none",
          }}>
            <Content>
              <P1>Argone World</P1>
              <p>Providing best-in-class retail experience</p>
            </Content>
            </Link>
        </ArgonWorld>
      </Left>
    </SubsidiaryContainer>
  );
};

export default OurSubsidiary;
