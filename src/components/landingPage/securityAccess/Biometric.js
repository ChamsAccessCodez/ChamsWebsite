import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import biometricImage from "../../../images/BiometricImage.png";
import featureIcon from "../../../images/Featured-icon.svg";
import arrowRight from "../../../images/arrow-right.svg";
import featuredIcon1 from "../../../images/Featured-icon-1.svg";
import featuredIcon2 from "../../../images/Featured-icon2.svg";
import {
  BiometricWrapper,
  BiometricContent,
  BiometricImage,
  Solutions,
  Options,
  Two,
  Three,
  Four,
  Verification,
  Biometrics,
  Desc,
  DescHead,
  DescBody,
} from "./BiometricStyle";

const Biometric = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BiometricWrapper>
      <BiometricContent>
        <Solutions>
          <img src={featureIcon} alt="" />
          <Two>Biometrics Solutions</Two>
          <Three>
            Biometrics software products and solutions for biometric enrollment,
            fingerprint, face, and iris recognition and authentication
          </Three>
          <Four>
            <Link
              to="/biometric-solutions"
              style={{
                textDecoration: "none",
              }}
            >
              <p>
                learn more
                <span>
                  <img src={arrowRight} alt="rightArrow" />
                </span>
              </p>
            </Link>
          </Four>
        </Solutions>
        <Options>
          <Verification>
            <img
              src={featuredIcon1}
              alt="featuredIcon1"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            />
            <Desc
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <DescHead>Verification</DescHead>
              <DescBody>
                Helps confirm the identity of customers through liveliness
                checks.
              </DescBody>
            </Desc>
          </Verification>
          <Biometrics>
            <img
              src={featuredIcon2}
              alt="featuredIcon1"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            />
            <Desc
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <DescHead>
                Biometric enrollment and verification solution (BVN)
              </DescHead>
              <DescBody>
                Complete biometric enrolment devices, kits, and solutions enable
                the printing and encoding of biometric data.
              </DescBody>
            </Desc>
          </Biometrics>
        </Options>
      </BiometricContent>
      <BiometricImage>
        <img
          src={biometricImage}
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
      </BiometricImage>
    </BiometricWrapper>
  );
};

export default Biometric;
