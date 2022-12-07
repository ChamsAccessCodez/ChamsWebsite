import React from "react";
import accessImage1 from "../../../images/AccessImage1.png";
import accessIcon1 from "../../../images/AccessIcon01.svg";
import arrowRight from "../../../images/arrow-right.svg";
import arrowRightWhite from "../../../images/arrow-right-white.svg";
import {
  CyberWrapper,
  CyberImage,
  CyberContent,
  CyberHeading,
  CyberInfo,
  CyberNav,
} from "./CustomStyle";

const Custom = () => {
  return (
    <CyberWrapper>
      <CyberContent>
        <img src={accessIcon1} alt="cyberIcon" />
        <CyberHeading>Custom Solutions</CyberHeading>
        <CyberInfo>
          We believe in resource flexibility and the ability to find the most
          effective solution to the most complex problems; in a simple way. By
          assessing your unique needs, we create customized technology solutions
          tailored to maximize the precise outcome you desire.
        </CyberInfo>
        <CyberNav>
          <p>
            Build your solution here
            <span>
              <img src={arrowRightWhite} alt="rightArrow" />
            </span>
          </p>
        </CyberNav>
      </CyberContent>
      <CyberImage>
        <img
          src={accessImage1}
          alt="biometricImage"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          //   data-aos-anchor-placement="top-center"
        />
      </CyberImage>
    </CyberWrapper>
  );
};

export default Custom;
