import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  SurveilanceContainer,
  SurveilanceMaster,
  S1,
  S2,
  SurveillanceButton,
  WriteUp,
  WriteUpWrapper,
  WriteLeft,
  WriteRight,
  VideoSurveillance,
  DivisionWrapper,
  VideoLeft,
  VideoRight,
  P1,
  P2,
  VideoOptions,
  Opt,
  Intrusion,
  IntrusionDivider,
  IntrusionLeft,
  IntrusionRight,
  I1,
  I2,
  TextDiv,
  Ready,
  RequestButton,
} from "./SurveilanceStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import surveillanceImage from "../../images/SurveillanceImage2.png";
import surveillanceIcon from "../../images/FinancialInsurranceIcon.svg";
import surveillanceImage3 from "../../images/SurveilanceImage3.png";

const Surveilance = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  return (
    <SurveilanceContainer>
      <Header />
      <SurveilanceMaster>
        <S1>A secure environment to build your solution</S1>
        <S2>
          Protect your business from theft, vandalism and intruders with our
          comprehensive video surveillance systems and CCTV systems.
        </S2>
        <Link to="/callback" style={{ textDecoration: "none" }}>
          <SurveillanceButton>Request a callback</SurveillanceButton>
        </Link>
      </SurveilanceMaster>
      <WriteUp>
        <WriteUpWrapper>
          <WriteLeft>
            <p>
              We deliver a broad array of security solutions around access
              control, intrusion detection, video surveillance and management.
            </p>
          </WriteLeft>
          <WriteRight>
            <p>
              In partnership with Original Equipment Manufacturers around the
              world, we enable our customers get competitive offers and
              world-class support on high-quality products and systems.
              <br />
              <br />
              Choosing the right video surveillance system for your premises can
              be challenging when you don’t know what to look for. From
              traditional local video surveillance to IP systems and cloud-based
              storage options, our technical experts can design, install,
              service and monitor the right video system for your needs.
            </p>
          </WriteRight>
        </WriteUpWrapper>
      </WriteUp>
      <VideoSurveillance>
        <DivisionWrapper>
          <VideoLeft>
            <img src={surveillanceImage} alt="videoSurveillance" />
          </VideoLeft>
          <VideoRight>
            <P1>Video Surveillance Systems & Solutions</P1>
            <P2>
              A video surveillance system is a critical component of a
              comprehensive security strategy. Whether you manage one location
              or thousands, an effective video surveillance system can serve as
              a crime deterrent - as well as provide key insights on your
              business.
            </P2>
            <VideoOptions>
              <Opt>
                <img src={surveillanceIcon} alt="videoOptions" />
                <p>Interactive video monitoring</p>
              </Opt>
              <Opt>
                <img src={surveillanceIcon} alt="videoOptions" />
                <p>Advanced video analytics capabilities and reporting</p>
              </Opt>
              <Opt>
                <img src={surveillanceIcon} alt="videoOptions" />
                <p>Local, network and cloud-based video storage options</p>
              </Opt>
              <Opt>
                <img src={surveillanceIcon} alt="videoOptions" />
                <p>IP, analog and hybrid video surveillance camera systems</p>
              </Opt>
              <Opt>
                <img src={surveillanceIcon} alt="videoOptions" />
                <p>
                  Integration with intrusion systems, access control and more
                </p>
              </Opt>
            </VideoOptions>
          </VideoRight>
        </DivisionWrapper>
      </VideoSurveillance>
      <Intrusion>
        <IntrusionDivider>
          <IntrusionLeft>
            <I1>Intrusion Alarm</I1>
            <I2>
              Protect people and property with security you can rely on. From
              simple installations to extensive projects, we offer integrated
              security solutions based on award-winning technology and backed by
              superior support. Our easy-to-use alarm systems integrate
              seamlessly with video cameras, smoke alarms, home automation
              devices, and more.
              <br />
              <br />
              Our easy-to-use alarm systems integrate seamlessly with video
              cameras, smoke alarms, home automation devices, and more.
            </I2>
          </IntrusionLeft>
          <IntrusionRight>
            <img src={surveillanceImage3} alt="surveillance3" />
          </IntrusionRight>
        </IntrusionDivider>
      </Intrusion>
      <TextDiv>
        <Ready>Ready to get started?</Ready>
        <p>
          You need a partner that does more than talk about security, you need
          ChamsAccess, where the security of your premises is our highest
          priority.
        </p>
        <NavLink to="/callback" style={{ textDecoration: "none" }}>
          <RequestButton>Request a callback</RequestButton>
        </NavLink>
      </TextDiv>
      <Footer />
    </SurveilanceContainer>
  );
};

export default Surveilance;
