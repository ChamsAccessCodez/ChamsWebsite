import React from "react";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import ImpactHeroImg from "../../images/ImpactHeroImg.png";
import verificationIcon from "../../images/VerificationIcon.svg";
import CreditIcon from "../../images/VerificationIcon.svg";
import atmIcon from "../../images/AtmIcon.svg";
import verificationLarge from "../../images/VerificationLarge.png";
import atmLarge from "../../images/AtmLarge.png";
import creditLarge from "../../images/CreditLarge.png";
import {
  ImpactContainer,
  Hero1,
  HeroContent,
  HeroImage,
  ContentHeader,
  ContentDescription,
  OurImpact,
  Verification,
  VerificationWrapper,
  Credit,
  CreditWrapper,
  Atm,
  AtmWrapper,
  W1,
  W2,
  W21,
  A1,
  A2,
  A21,
  C1,
  C2,
  C21,
  VerifyOption,
  CreditOption,
  AtmOption,
  Options,
  OptionsAtm,
  OptionsCredit,
} from "./ImpactStyles";

const Impact = () => {
  return (
    <ImpactContainer>
      <Header />
      <Hero1>
        <HeroContent>
          <OurImpact>Our Impact</OurImpact>
          <ContentHeader>
            Possibilities that drive
            <span> Global Impact </span>
          </ContentHeader>
          <ContentDescription>
            Since 2007, we have successfully delivered solutions at scale that
            have, and still positively impact the lives of millions globally.
          </ContentDescription>
        </HeroContent>
        <HeroImage>
          <img src={ImpactHeroImg} alt="realImage" />
        </HeroImage>
      </Hero1>
      <Verification>
        <VerificationWrapper>
          <W1>
            <img src={verificationLarge} alt="kid1" />
          </W1>
          <W2>
            <W21>
              Implemented and supported 500m financial banking verification
              transactions
            </W21>
            <p>
              he Central Bank of Nigeria in partnership with the Bankers'
              Committee initiated the Bank Verification Number Project in 2014.
              The objective of the BVN is to use biometric information as a
              means of first identifying and verifying all individuals that have
              account(s) in any Nigerian bank and consequently, as a means of
              authenticating customer's identity at the point of transactions.
            </p>
            <VerifyOption>
              <Options>
                <img src={verificationIcon} alt="opt" />
                <p>Verification of 2 million financial transactions daily</p>
              </Options>
              <Options>
                <img src={verificationIcon} alt="opt" />
                <p>ReInstallation across 5,000 bank branches Nationwide</p>
              </Options>
              <Options>
                <img src={verificationIcon} alt="opt" />
                <p>
                  52 million Bank Verification Numbers (BVNs) issued till date
                </p>
              </Options>
            </VerifyOption>
          </W2>
        </VerificationWrapper>
      </Verification>
      <Atm>
        <AtmWrapper>
          <A2>
            <A21>
              Over 30m issued financial cards through Financial Instant Issuance
              Solution
            </A21>
            <p>
              Thanks to our fully powered, end-to-end instant card issuance
              solutions and in partnership with Enterprise solutions providers,
              we enable financial institutions issue new or replacement debit
              credit and credit cards to customers.
            </p>
            <AtmOption>
              <OptionsAtm>
                <img src={atmIcon} alt="opt" />
                <p>2000 bank branches covered Nationwide</p>
              </OptionsAtm>
              <OptionsAtm>
                <img src={atmIcon} alt="opt" />
                <p>
                  Increase 7m customers' satisfaction with 'on-the-spot'
                  issuance
                </p>
              </OptionsAtm>
            </AtmOption>
          </A2>
          <A1>
            <img src={atmLarge} alt="kid1" />
          </A1>
        </AtmWrapper>
      </Atm>
      <Credit>
        <CreditWrapper>
          <C1>
            <img src={creditLarge} alt="kid1" />
          </C1>
          <C2>
            <C21>200k employees delighted with timely remittance credit</C21>
            <p>
              In aiming to drive our impact beyond hardware and device
              offerings, we launched Pension Central out of a need to fully
              digitize the schedule and remittance infrastructure, thereby
              providing stakeholders with enhanced operations and value.
            </p>
            <CreditOption>
              <OptionsCredit>
                <img src={CreditIcon} alt="opt" />
                <p>5bn processed in total remittances</p>
              </OptionsCredit>
              <OptionsCredit>
                <img src={CreditIcon} alt="opt" />
                <p>2,000 schedules processed successfully.</p>
              </OptionsCredit>
              <OptionsCredit>
                <img src={CreditIcon} alt="opt" />
                <p>
                  Live integration with leading payroll and HR platforms in
                  Nigeria
                </p>
              </OptionsCredit>
              <OptionsCredit>
                <img src={CreditIcon} alt="opt" />
                <p>
                  Supporting organizations across all regions of the federation.
                </p>
              </OptionsCredit>
            </CreditOption>
          </C2>
        </CreditWrapper>
      </Credit>
      <Footer />
    </ImpactContainer>
  );
};

export default Impact;
