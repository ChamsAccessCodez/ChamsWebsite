import React from "react";
import Marquee from "react-fast-marquee";
import gtBank from "../../../images/GTBank.svg";
import centralBank from "../../../images/CentralBank.svg";
import promasidor from "../../../images/Promasidor.svg";
import pwc from "../../../images/PWC.svg";
import accessBank from "../../../images/AccessBank.svg";
import zenith from "../../../images/Zenith.svg";
import gigm from "../../../images/GIGM.svg";
import grand from "../../../images/Grand.svg";
import fg from "../../../images/Fg.svg";
import firstBank from "../../../images/FirstBank.svg";
import cussons from "../../../images/Cusson.svg";
import stirlingBank from "../../../images/StirlingBank.svg";
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
          <Marquee speed={100} pauseOnHover={true} style={{cursor: "pointer"}}>
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
        <RequestButton>Request a call back</RequestButton>
      </TextDiv>
    </TestContainer>
  );
};

export default Testimonial;
