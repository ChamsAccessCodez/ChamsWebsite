import React from "react";
import Marquee from "react-fast-marquee";
import promasidor from "../../../images/Promasidor.png";
import pwc from "../../../images/PWC.png";
import accessBank from "../../../images/AccessBank.png";
import zenith from "../../../images/Zenith.png";
import gigm from "../../../images/GIGM.png";
import grand from "../../../images/Grand.png";
import fg from "../../../images/Fg.png";
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
