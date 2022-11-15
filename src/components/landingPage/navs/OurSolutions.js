import React from "react";
import {
  WhoContainer,
  Left,
  Right,
  Biometric,
  Leadership,
  OurImpact,
  Content,
  P1,
  Career,
} from "./OurSolutionStyle.js";
import aboutIcon from "../../../images/AboutIcon.png";
import leadershipIcon from "../../../images/LeadershipIcon.png";
import impactIcon from "../../../images/ImpactIcon.png";
import careerIcon from "../../../images/CareerIcon.png";

const OurSolutions = () => {
  return (
    <WhoContainer>
      <Left>
        <Biometric>
          <img src={aboutIcon} alt="aboutIcon" />
          <Content>
            <P1>Biometrics Solutions</P1>
            <p>Amet minim mollit non seru ulco est sit.</p>
          </Content>
        </Biometric>
        <Leadership>
          <img src={leadershipIcon} alt="aboutIcon" />
          <Content>
            <P1>Leadership/Management Team</P1>
            <p>Our leadership at management and board levels</p>
          </Content>
        </Leadership>
        <OurImpact>
          <img src={impactIcon} alt="aboutIcon" />
          <Content>
            <P1>Our Impact</P1>
            <p>More about our sustained impact through the years</p>
          </Content>
        </OurImpact>
      </Left>
      <Right>
        <Career>
          <img src={careerIcon} alt="aboutIcon" />
          <Content>
            <P1>Career</P1>
            <p>Join us in creating possibilities</p>
          </Content>
        </Career>
      </Right>
    </WhoContainer>
  );
};

export default OurSolutions;