import React from "react";
import {
  WhoContainer,
  Left,
  Right,
  About,
  Leadership,
  OurImpact,
  Content,
  P1,
  Career
} from "./WhoWeAreStyles";
import aboutIcon from "../../../images/AboutIcon.png";
import leadershipIcon from "../../../images/LeadershipIcon.png";
import impactIcon from "../../../images/ImpactIcon.png";
import careerIcon from "../../../images/CareerIcon.png";

const WhoWeAre = () => {
  return (
    <WhoContainer>
      <Left>
        <About>
          <img src={aboutIcon} alt="aboutIcon" />
          <Content>
            <P1>About Us</P1>
            <p>Learn more about our culture</p>
          </Content>
        </About>
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

export default WhoWeAre;
