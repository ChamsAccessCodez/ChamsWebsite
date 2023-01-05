import React from "react";
import cyberSecurityImage from "../../../images/CybersecurityImage.png";
import cyberIcon from "../../../images/CyberIcon.svg";
import arrowRight from "../../../images/arrow-right.svg";
import cyberIcon2 from "../../../images/CyberIcon2.svg";
import cyberIcon3 from "../../../images/CyberIcon3.svg";
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
          data-aos-once="true"
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
        <CyberNav>
          <p>
            learn more
            <span>
              <img src={arrowRight} alt="rightArrow" />
            </span>
          </p>
        </CyberNav>
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
              data-aos-once="true"
            />
            <ItemDesc
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <div
                style={{
                  width: "470px",
                  height: "30px",
                  fontFamily: "Komet",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "30px",
                  display: "flex",
                  alignItems: "center",
                  color: "#1D2939",
                }}
              >
                Data Security
              </div>
              <div
                style={{
                  width: "470px",
                  height: "46px",
                  fontFamily: "Komet",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#475467",
                }}
              >
                Get complete visibility into where your data is (on premises or
                in the cloud) and how it’s being stored and shared at all times.
              </div>
            </ItemDesc>
          </Items>
          <Items>
            <img
              src={cyberIcon3}
              alt="ItemIcon"
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            />
            <ItemDesc
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1700"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <div
                style={{
                  width: "470px",
                  height: "30px",
                  fontFamily: "Komet",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "30px",
                  display: "flex",
                  alignItems: "center",
                  color: "#1D2939",
                }}
              >
                Infrastructure Protection
              </div>
              <div
                style={{
                  width: "470px",
                  height: "46px",
                  fontFamily: "Komet",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#475467",
                }}
              >
                World class stack of solutions and services that provide both web-application and network security.
              </div>
            </ItemDesc>
          </Items>
        </CyberFeatures>
      </CyberContent>
    </CyberWrapper>
  );
};

export default Cybersecurity;
