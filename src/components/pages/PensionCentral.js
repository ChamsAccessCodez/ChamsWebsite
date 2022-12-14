import React, { useEffect } from "react";
import pcHeroImage from "../../images/PcHeroImage.png";
import AOS from "aos";
import pcCentralLogo from "../../images/PcCentralLogo.svg";
import yoBg from "../../images/YObg.png";
import featuresBg from "../../images/Features.png";
import featureOptionImage from "../../images/FeatureOption.png";
import {
  PenContainer,
  Hero1,
  HeroContent,
  HeroImage,
  ContentHeader,
  ContentDescription,
  ContentButton,
  OurNumber,
  YoImage,
  YoText,
  NumberButton,
  Desc,
  NumberCard,
  Features,
  FeaturesInfo,
  FeaturesImage,
  FeatureButton,
  FeatureOptions,
  OptionContainer,
  OptionDesc,
  TextDiv,
  Ready,
  RequestButton,
} from "./PensionCentralStyles";
import PensionCentralCard from "./PensionCentralCard";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";

const PensionCentral = () => {
  const dollarMan = (
    <html>
      <span
        style={{
          fontFamily: "Roboto",
          fontSize: "30px",
        }}
      >
        &#36;
      </span>
      7m+
    </html>
  );
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
    AOS.init();
  }, []);

  return (
    <PenContainer>
      <Header />
      <Hero1>
        <HeroContent>
          <img src={pcCentralLogo} alt="pension-central" />
          <ContentHeader>
            Pension Remittance Switch <span>Infrastructure for Africa</span>
          </ContentHeader>
          <ContentDescription>
            Pension Central helps individuals and organizations seamlessly make
            pension contributions in seconds to desired Pension fund
            administrators and custodians.
          </ContentDescription>
          <a
            href="https://pensioncentral.ng/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#ffffff",
            }}
          >
            <ContentButton>Get started for free</ContentButton>
          </a>
        </HeroContent>
        <HeroImage>
          <img
            src={pcHeroImage}
            alt="realImage"
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          />
        </HeroImage>
      </Hero1>
      <OurNumber>
        <YoImage>
          <img
            src={yoBg}
            alt="yo"
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          />
        </YoImage>
        <YoText>
          <NumberButton>Our Numbers</NumberButton>
          <Desc>Our Impact represented in numbers</Desc>
          <NumberCard>
            <PensionCentralCard
              intValue="21+"
              intDescription="PFAs Supported"
            />
            <PensionCentralCard
              intValue={dollarMan}
              intDescription="Transactions"
            />
            <PensionCentralCard
              intValue="200k+"
              intDescription="Employees credited"
            />
            <PensionCentralCard
              intValue="400+"
              intDescription="Employers Supported"
            />
          </NumberCard>
        </YoText>
      </OurNumber>
      <Features>
        <FeaturesInfo>
          <FeatureButton>Features</FeatureButton>
          <p>
            Empowering employers with smooth transmission to all PFAs
            seamlessly.
          </p>
          <FeatureOptions>
            <OptionContainer>
              <img
                src={featureOptionImage}
                alt="feature-option"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              />
              <OptionDesc>Generate reports for anything at ease</OptionDesc>
            </OptionContainer>
            <OptionContainer>
              <img
                src={featureOptionImage}
                alt="feature-option"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              />
              <OptionDesc>Unmatched technical and business support.</OptionDesc>
            </OptionContainer>
            <OptionContainer>
              <img
                src={featureOptionImage}
                alt="feature-option"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              />
              <OptionDesc>
                API Integration with HR and Payment platforms.
              </OptionDesc>
            </OptionContainer>
            <OptionContainer>
              <img
                src={featureOptionImage}
                alt="feature-option"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              />
              <OptionDesc>
                Multiple Period, Single Schedule, Single Payment.
              </OptionDesc>
            </OptionContainer>
            <OptionContainer>
              <img
                src={featureOptionImage}
                alt="feature-option"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="1400"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              />
              <OptionDesc>
                Electronic payment, and instant delivery of schedules
              </OptionDesc>
            </OptionContainer>
          </FeatureOptions>
        </FeaturesInfo>
        <FeaturesImage>
          <img src={featuresBg} alt="" />
        </FeaturesImage>
      </Features>
      <TextDiv>
        <Ready>Ready to make the Switch?</Ready>
        <p>
          Join hundreds of organizations who use Pension Central to fulfill
          their obligatory statutory pension remittances
        </p>
        <a
          href="https://pensioncentral.ng/"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          <RequestButton>Learn more</RequestButton>
        </a>
      </TextDiv>
      <Footer />
    </PenContainer>
  );
};

export default PensionCentral;
