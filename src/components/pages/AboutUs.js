import React, { useEffect } from "react";
import {
  AboutUsContainer,
  GetInTouch,
  Content,
  Contact,
  Touch,
  AboutProcess,
  Mission,
  Vision,
  Image,
  Image2,
  Content1,
  Title,
  Cover,
  History,
  Left,
  LeftTitle,
  LeftDesc,
  LeftHistory,
  Right,
  LeftWrapper,
  CoreValue,
  Headers,
  HeadTitle,
  Cards,
  CorePartner,
  PartnerLogo,
} from "./AboutUsStyle";
import { Link } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";
import ourStoryBg from "../../images/OurStoryBg.png";
import AboutUsCard from "./AboutUsCard";
import thinkFuture from "../../images/ThinkFuture.png";
import CoreCard from "./CoreCard";
import exellenceLogo from "../../images/ExellenceImage.png";
import passionImage from "../../images/PassionImage.png";
import agilityImage from "../../images/AgilityImage.png";
import customerImage from "../../images/CustomerImage.png";
import zebra from "../../images/Zebra.png";
import damalog from "../../images/Dermalogue.png";
import firsAccess from "../../images/FirstAccess.png";
import ekory from "../../images/Ekory.png";
import zkTeko from "../../images/ZkTeko.png";

const AboutUs = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <AboutUsContainer>
      <GetInTouch>
        <Content>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1500}
          >
            <Contact>About us</Contact>
          </Link>

          <Touch>
            Driving Impact through
            <br />
            <span>Simplified Technology Solutions.</span>
          </Touch>
          <p>
            Committed to advancing the financial, identity and security
            industries through technology, driving positive and lasting impact.
          </p>
        </Content>
      </GetInTouch>
      <AboutProcess id="about">
        <Mission>
          <Image></Image>
          <Content1>
            <Cover>
              <Title>Our Mission</Title>
              <p>
                Providing customized solutions to make life easy and less
                complicated.
              </p>
            </Cover>
          </Content1>
        </Mission>
        <Vision>
          <Image2></Image2>
          <Content1>
            <Cover>
              <Title>Our Mission</Title>
              <p>
                Providing customized solutions to make life easy and less
                complicated.
              </p>
            </Cover>
          </Content1>
        </Vision>
      </AboutProcess>
      <History>
        <Left>
          <LeftWrapper>
            <LeftTitle>Our story</LeftTitle>
            <LeftDesc>Follow our story as told through milestones</LeftDesc>
            <LeftHistory>
              <AboutUsCard
                year="2011"
                yearDesc="Successful deployment of ATMs across several commercial banks"
              />
              <AboutUsCard
                year="2012"
                yearDesc="Successful deployment of financial instant card solution across several commercial banks"
              />
              <AboutUsCard
                year="2014"
                yearDesc="Implementation of Bank Verification Number exercise in all branches of commercial banks nationwide"
              />
              <AboutUsCard
                year="2016"
                yearDesc="Data capture and Ghost worker elimination in over 10 states of the Federation."
              />
              <AboutUsCard
                year="2017"
                yearDesc="Internally Generated Revenue (IGR) drivers for 5 States in Nigeria"
              />
              <AboutUsCard
                year="2017"
                yearDesc="Successfully deployed 10,000 devices to NIBBS for financial inclusion project"
              />
              <AboutUsCard
                year="2020"
                yearDesc="Deployment of Financial Instant Card Issuance solution across all Commercial Bank and MFB"
              />
            </LeftHistory>
          </LeftWrapper>
        </Left>
        <Right>
          <img src={ourStoryBg} alt="our story" />
        </Right>
      </History>
      <CoreValue>
        <Headers>
          <HeadTitle>Our core values</HeadTitle>
          <p>Our success is built on our commitment to these values.</p>
        </Headers>
        <Cards>
          <CoreCard
            coreImage={thinkFuture}
            header="THINK FUTURE"
            description="We constantly think of new ideas, and innovate into the future."
          />
          <CoreCard
            coreImage={exellenceLogo}
            header="EXCELLENCE"
            description="We strive to achieve the highest standards in all we do. We do not settle for mediocrity."
          />
          <CoreCard
            coreImage={passionImage}
            header="PASSION"
            description="We are passionate in everything we do. We love challenges and rising to the occasion."
          />
          <CoreCard
            coreImage={agilityImage}
            header="AGILITY"
            description="We value agility in our decision-making; in our planning; and in our delivery."
          />
          <CoreCard
            coreImage={customerImage}
            header="CUSTOMER-CENTRIC"
            description="We place you at the centre of our world"
          />
        </Cards>
      </CoreValue>
      <CorePartner>
        <p>Our Partners</p>
        <PartnerLogo>
          <img src={zebra} alt="zebra" />
          <img src={damalog} alt="zebra" />
          <img src={firsAccess} alt="zebra" />
          <img src={ekory} alt="zebra" />
          <img src={zkTeko} alt="zebra" />
        </PartnerLogo>
      </CorePartner>
      <ScrollToTop smooth />
    </AboutUsContainer>
  );
};

export default AboutUs;
