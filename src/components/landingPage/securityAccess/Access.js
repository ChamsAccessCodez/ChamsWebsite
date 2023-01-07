import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import accessImage from "../../../images/AccessImage.png";
import accessIcon from "../../../images/AccessIcon.svg";
import accessIcon2 from "../../../images/AccessIcon1.svg";
import accessIcon3 from "../../../images/AccessIcon2.svg";
import accessIcon4 from "../../../images/AccessIcon4.png";
import arrowRight from "../../../images/arrow-right.svg";

import {
  AccessWrapper,
  AccessContent,
  AccessImage,
  Solutions,
  Options,
  Two,
  Three,
  Four,
  Secure,
  AccessInfo,
  Visitor,
  Desc,
  DescHead,
  DescBody,
} from "./AccessStyle";

const Access = () => {
  return (
    <AccessWrapper>
      <AccessImage>
        <img
          src={accessImage}
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
      </AccessImage>
      <AccessContent>
        <Solutions>
          <img src={accessIcon} alt="solutions" />
          <Two>Access Management Solutions</Two>
          <Three>
            Every day, our security and access control solutions help millions
            of people move through a safer, more open world with ease
          </Three>
          <Four>
          <Link
            to="/access-and-identity-solutions"
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
          <Secure>
            <img
              src={accessIcon2}
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
              <DescHead>Secure Kid solution for Schools</DescHead>
              <DescBody>
                Innovative solution designed to ensure efficient management and
                security of child/ward drop-off and pickup at school.
              </DescBody>
            </Desc>
          </Secure>
          <AccessInfo>
            <img
              src={accessIcon3}
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
              <DescHead>Access Control and Surveillance Solution</DescHead>
              <DescBody>
                Prevent unauthorized access to facilities, equipment, and
                resources and protect your people and property.
              </DescBody>
            </Desc>
          </AccessInfo>
          <Visitor>
            <img
              src={accessIcon4}
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
              <DescHead>Visitor's management system</DescHead>
              <DescBody>
                Welcome guests with the innovative visitor management system
                that safeguards your workplace and supercharges your front desk.
              </DescBody>
            </Desc>
          </Visitor>
        </Options>
      </AccessContent>
    </AccessWrapper>
  );
};

export default Access;
