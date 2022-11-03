import React from "react";
import cyberSecurityImage from "../../../images/CybersecurityImage.png";
import cyberIcon from "../../../images/CyberIcon.png";
import arrowRight from "../../../images/arrow-right.png";
import cyberIcon2 from "../../../images/CyberIcon2.png";
import {
  CyberWrapper,
  CyberImage,
  CyberContent,
  CyberHeading,
  CyberInfo,
  CyberFeatures,
  CyberNav,
  Items,
  ItemDesc,
} from "./CybersecurityStyle";

const Cybersecurity = () => {
  return (
    <CyberWrapper>
      <CyberImage>
        <img
          src={cyberSecurityImage}
          alt="biometricImage"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          //   data-aos-anchor-placement="top-center"
        />
      </CyberImage>
      <CyberContent>
        <img src={cyberIcon} alt="cyberIcon" />
        <CyberHeading>Cybersecurity Solutions</CyberHeading>
        <CyberInfo>
          Cybersecurity is one of the main concerns for most businesses, and for
          a good reason. Companies of all sizes, from small mom-and-pop
          businesses to large corporations, are facing cyber attacks. Each year,
          cybercriminals become more and more innovative when it comes to the
          types of cyber attacks they launch against organizations.
        </CyberInfo>
        <CyberFeatures>
          <Items>
            <img
              src={cyberIcon2}
              alt="ItemIcon"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <ItemDesc
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              All features and premium support
            </ItemDesc>
          </Items>
          <Items>
            <img
              src={cyberIcon2}
              alt="ItemIcon"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <ItemDesc
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1700"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              All features and premium support
            </ItemDesc>
          </Items>
          <Items>
            <img
              src={cyberIcon2}
              alt="ItemIcon"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1900"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <ItemDesc
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="2400"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              All features and premium support
            </ItemDesc>
          </Items>
        </CyberFeatures>
        <CyberNav>
          <p>
            learn more
            <span>
              <img src={arrowRight} alt="rightArrow" />
            </span>
          </p>
        </CyberNav>
      </CyberContent>
    </CyberWrapper>
  );
};

export default Cybersecurity;
