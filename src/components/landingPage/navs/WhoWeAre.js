import React from "react";
import { Link } from "react-router-dom";
import {
  WhoContainer,
  Left,
  Right,
  About,
  Leadership,
  OurImpact,
  Content,
  P1,
  Career,
} from "./WhoWeAreStyles";
import aboutIcon from "../../../images/AboutUsIcon.svg";
import leadershipIcon from "../../../images/LeadershipIcon.svg";
import impactIcon from "../../../images/OurImpactIcon.svg";
import careerIcon from "../../../images/CareerIcon.svg";

const WhoWeAre = () => {
  return (
    <WhoContainer>
      <Left>
        <About>
          <img src={aboutIcon} alt="aboutIcon" />
          <Link
            to="/about"
            style={{
              textDecoration: "none",
            }}
          >
            <Content>
              <P1>About Us</P1>
              <p>Learn more about our culture</p>
            </Content>
          </Link>
        </About>
        <Leadership>
          <img src={leadershipIcon} alt="aboutIcon" />
          <Link
            to="/leadership-team"
            style={{
              textDecoration: "none",
            }}
          >
            <Content>
              <P1>Leadership/Management Team</P1>
              <p>Our leadership at management and board levels</p>
            </Content>
          </Link>
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
          <Link
            to="/career-page"
            style={{
              textDecoration: "none",
            }}
          >
            <Content>
              <P1>Career</P1>
              <p>Join us in creating possibilities</p>
            </Content>
          </Link>
        </Career>
      </Right>
    </WhoContainer>
  );
};

export default WhoWeAre;
