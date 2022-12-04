import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import gtBank from "../../../images/GTBank.png";
import centralBank from "../../../images/CentralBank.png";
import promasidor from "../../../images/Promasidor.png";
import pwc from "../../../images/PWC.png";
import accessBank from "../../../images/AccessBank.png";
import zenith from "../../../images/Zenith.png";
import gigm from "../../../images/GIGM.png";
import grand from "../../../images/Grand.png";
import fg from "../../../images/Fg.png";
import firstBank from "../../../images/FirstBank.png";
import cussons from "../../../images/Cusson.png";
import stirlingBank from "../../../images/StirlingBank.png";
import secure from "../../../images/Secure.png";
import {
  TestContainer,
  TrusteeLogos,
  TextDiv,
  Ready,
  RequestButton,
  Text,
  ImageWrapper,
  Items,
} from "./TrusteeStyle";

const Testimonial = () => {
  return (
    <TestContainer>
      <TrusteeLogos>
        <Text>Trusted by top companies in the markets we serve</Text>
        <ImageWrapper>
          <Marquee
            speed={100}
            pauseOnHover={true}
            style={{ cursor: "pointer" }}
          >
            <Items>
              <img src={gtBank} alt="some-text" />
            </Items>
            <Items>
              <img src={centralBank} alt="some-text" />
            </Items>
            <Items>
              <img src={promasidor} alt="some-text" />
            </Items>
            <Items>
              <img src={pwc} alt="some-text" />
            </Items>
            <Items>
              <img src={accessBank} alt="some-text" />
            </Items>
            <Items>
              <img src={zenith} alt="some-text" />
            </Items>
            <Items>
              <img src={gigm} alt="some-text" />
            </Items>
            <Items>
              <img src={grand} alt="some-text" />
            </Items>
            <Items>
              <img src={fg} alt="some-text" />
            </Items>
            <Items>
              <img src={firstBank} alt="some-text" />
            </Items>
            <Items>
              <img src={cussons} alt="some-text" />
            </Items>
            <Items>
              <img src={stirlingBank} alt="some-text" />
            </Items>
            <Items>
              <img src={secure} alt="some-text" />
            </Items>
          </Marquee>
        </ImageWrapper>
      </TrusteeLogos>
      <TextDiv>
        <Ready>Ready to connect with us?</Ready>
        <p>
          Let's explore existing opportunities or create bespoke solutions to
          serve your specific business needs.
        </p>
        <Link to="/callback" style={{ textDecoration: "none" }}>
          <RequestButton>Request a call back</RequestButton>
        </Link>
      </TextDiv>
    </TestContainer>
  );
};

export default Testimonial;
