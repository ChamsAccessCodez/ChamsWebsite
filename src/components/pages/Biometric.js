import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BiometricContainer,
  BiometricWrapper,
  BiometricBg,
  BiometricTransparentCard,
  Deliver,
  BiometricButton,
  Story1,
  StoryDescription,
  ImageAndText,
  Left,
  Right,
  Story2,
  Right2,
  Left2,
  Right2Head,
  Right2Navs,
  Right2Button,
  Story3,
  Left3,
  Right3,
  Right3Head,
  Right3Button,
  Right3Navs,
  Story4,
  Right4,
  Right4Head,
  Right4Navs,
  Right4Button,
  Left4,
  IndustrialApplication,
  IndustrialCardWrapper,
} from "./BiometricStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import biometricImage from "../../images/BiometricBackgrond.png";
import story1Image from "../../images/Story1Image.png";
import dermalogRegistration from "../../images/dermalog_Portable_Biometric_Registration.gif";
import fingerPrintImage from "../../images/FingerPrintImage.png";
import scannerSFI from "../../images/ScannerZFI.png";
import IndustrailCard from "./IndustrailCard";
import govt from "../../images/BiometricGovtImage.svg";
import enterprise from "../../images/BiometricEnterpriseImage.svg";
import bank from "../../images/BiometricBankImage.svg";

const Biometric = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  return (
    <BiometricContainer>
      <Header />
      <BiometricWrapper>
        <BiometricBg>
          <img src={biometricImage} alt="biometric" />
        </BiometricBg>
        <BiometricTransparentCard>
          <Deliver>
            Delivering the most
            <span> reliable</span> identity
            <span> assurance</span>
          </Deliver>
          <p>
            Realizing a safe and secure world with digital technology through
            biometric authentication & verification.
          </p>
          <div
            style={{
              // backgroundColor: "red",
              width: "205px",
              marginLeft: "56px",
            }}
          >
            <Link to="/request-a-callback" style={{ textDecoration: "none" }}>
              <BiometricButton>Request a callback</BiometricButton>
            </Link>
          </div>

          {/* <BiometricButton>
            <Link to="/request-a-callback" style={{ textDecoration: "none" }}>
              Request a callback
            </Link>
          </BiometricButton> */}
        </BiometricTransparentCard>
      </BiometricWrapper>
      <Story1>
        <StoryDescription>
          For many enterprises and governmental organizations, on-boarding and
          authenticating identity of new users, customers, and employees is an
          essential task.
        </StoryDescription>
        <ImageAndText>
          <Left>
            <img src={story1Image} alt="story1" />
          </Left>
          <Right>
            <p>
              It is crucial to accurately enroll and confirm a person's
              identity, which is made easier by biometrics. <br />
              <br />
              Chamsaccess provides many biometric enrollment methods that are
              convenient while maintaining security and safety. Our biometric
              solutions are applicable and relevant across multiple industries
              where data capture and verification play a major role.
            </p>
          </Right>
        </ImageAndText>
      </Story1>
      <Story2>
        <ImageAndText>
          <Right2>
            <Right2Navs>
              <Right2Button>Fingerprint</Right2Button>
              <Right2Button>Liveness Detection</Right2Button>
              <Right2Button>Face Recognition</Right2Button>
            </Right2Navs>
            <Right2Head>Portable Biometric Registration Unit</Right2Head>
            <p>
              The kit may be used for offline as well as online registration,
              thus it can be used even in distant locations without network or
              electrical access. To guarantee that each person is registered
              only once, the Automated Biometric Identification System (ABIS)
              compares the collected data and accurately detects duplicates.{" "}
              <br />
              <br />
              Government organizations can implement extensive identity
              management, including biometric data, in order to improve process
              security and safeguard each registered person's identity, thanks
              to the Portable Biometric Registration Unit.
            </p>
          </Right2>
          <Left2>
            <img src={dermalogRegistration} alt="story2" />
          </Left2>
        </ImageAndText>
      </Story2>
      <Story3>
        <ImageAndText>
          <Left3>
            <img src={fingerPrintImage} alt="story3" />
          </Left3>
          <Right3>
            <Right3Navs>
              <Right3Button>4 Fingerprint</Right3Button>
              <Right3Button>Liveness Detection</Right3Button>
              <Right3Button>Signatures</Right3Button>
              <Right3Button>Rolled Fingerprints</Right3Button>
            </Right3Navs>
            <Right3Head>Fingerprint Scanner LF10</Right3Head>
            <p>
              The LF10 scanner is the first rolled and tenprint scanner that can
              detect liveness.
              <br />
              <br />
              The LF10 is designed to produce photographs of the highest quality
              by making use of its sizable scanning area. Its sophisticated
              optical system can quickly capture both rolled fingerprints and
              photos of plain fingerprints.
              <br />
              <br />A complete biometric solution, from border management to
              voter registration or law enforcement.
            </p>
          </Right3>
        </ImageAndText>
      </Story3>
      <Story4>
        <ImageAndText>
          <Right4>
            <Right4Navs>
              <Right4Button>Single Fingerprints</Right4Button>
              <Right4Button>Liveness Detection</Right4Button>
            </Right4Navs>
            <Right4Head>Fingerprint Scanner ZF1</Right4Head>
            <p>
              The ZF1 can be used for enrollment, authentication, and
              identification in governmental, commercial, and industrial
              applications. It can also be used to capture fingerprints for
              e-Passports and ID cards. <br />
              <br />
              The ZF1 scanner is the go-to option for biometric business because
              to its wide range of application industries.
            </p>
          </Right4>
          <Left4>
            <img src={scannerSFI} alt="story4" />
          </Left4>
        </ImageAndText>
      </Story4>
      <IndustrialApplication>
        <p>Multi-Industrial Applications</p>
        <IndustrialCardWrapper>
          <IndustrailCard cardHeader="Banking and Finance" sourceImage={bank} />
          <IndustrailCard cardHeader="Enterprise" sourceImage={enterprise} />
          <IndustrailCard cardHeader="Government" sourceImage={govt} />
        </IndustrialCardWrapper>
      </IndustrialApplication>
      <Footer />
    </BiometricContainer>
  );
};

export default Biometric;
