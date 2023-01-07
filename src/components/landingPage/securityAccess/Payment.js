import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import paymentImage from "../../../images/PaymentImage.png";
import paymentIcon from "../../../images/PayementIcon.svg";
import paymentIcon2 from "../../../images/PaymentIcon2.svg";
import paymentIcon3 from "../../../images/PaymentIcon3.svg";
import paymentIcon4 from "../../../images/PaymentIcon4.svg";
import arrowRight from "../../../images/arrow-right.svg";
import {
  PaymentWrapper,
  PaymentContent,
  PaymentImage,
  Solutions,
  Options,
  Two,
  Three,
  Four,
  Financial,
  Self,
  Instant,
  Desc,
  DescHead,
  DescBody,
} from "./PaymentStyle";

const Payment = () => {
  return (
    <PaymentWrapper>
      <PaymentContent>
        <Solutions>
          <img src={paymentIcon} alt="" />
          <Two>Payments Solutions</Two>
          <Three>
            Infrastructure and Technologies for Commercial, Microfinance, and
            Neo banks.
          </Three>
          <Four>
            <Link
              to="/payment-solutions"
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
          <Financial>
            <img
              src={paymentIcon2}
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
              <DescHead>
                Financial Instant Card Issuance (FII) Solution{" "}
              </DescHead>
              <DescBody>
                FII allows for the on-demand printing of any financial card,
                allowing financial institutions to issue ready-to-use cards in
                minutes.
              </DescBody>
            </Desc>
          </Financial>
          <Self>
            <img
              src={paymentIcon3}
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
              <DescHead>Self-Service Interactive Kiosks</DescHead>
              <DescBody>
                We offer interactive kiosk machines and solutions, fully
                customizable for different functions and industries.
              </DescBody>
            </Desc>
          </Self>
          <Instant>
            <img
              src={paymentIcon4}
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
              <DescHead>Instant card printers</DescHead>
              <DescBody>
                Issue cards in an instant. Create personalized cards for any
                purpose..
              </DescBody>
            </Desc>
          </Instant>
        </Options>
      </PaymentContent>
      <PaymentImage>
        <img
          src={paymentImage}
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
      </PaymentImage>
    </PaymentWrapper>
  );
};

export default Payment;
