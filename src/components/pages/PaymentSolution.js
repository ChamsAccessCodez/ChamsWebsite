import React, { useEffect } from "react";
import AOS from "aos";
import {
  PaymentContainer,
  AdvanceThreats,
  A1,
  PaymentButton,
  FinancialInstance,
  FinancialInfo,
  Right3Navs,
  Right3Button,
  Text1,
  FinancialOptions,
  List,
  ChamsRequirement,
  C1,
  C2,
  DesignInstance,
  DesignInfo,
  DesignOption,
  Opt,
  Text2,
  Left,
  Right,
  Left2,
  Right2,
  FinanceWrapper,
  DesignWrapper,
  SelfService,
  SelfServiceWrapper,
  Left3,
  Right3,
  SelfDescription,
  SelfHeading,
  IndustriesWeServe,
  Gradient,
  ServeContent,
  ServeLeft,
  L1,
  L2,
  ServeRight,
  R1,
  R2,
  R3,
  R4,
  R5,
} from "./PaymentSolutionStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import paymentCards from "../../images/ParymentCards.png";
import financialInstant from "../../images/FinancialInstantImage.png";
import financialInsuranceImage from "../../images/FinancialInsurancIcon.png";
import ChamsRequiementImage from "../../images/ChamsRequiementImage.png";
import DesignImage from "../../images/DesignImage.png";
import selfService from "../../images/SelfServiceImage.png";

const PaymentSolution = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
    AOS.init();
  }, []);
  return (
    <PaymentContainer>
      <Header />
      <AdvanceThreats>
        <A1>
          Infrastructure and Technologies for{" "}
          <span>Financial Institutions</span>
        </A1>
        <PaymentButton>Request a callback</PaymentButton>
        <img src={paymentCards} alt="cyber2" />
      </AdvanceThreats>
      <FinancialInstance>
        <FinanceWrapper>
          <Left>
            <img src={financialInstant} alt="financial" />
          </Left>
          <Right>
            <FinancialInfo>
              <Right3Navs>
                <Right3Button>FII Hardware</Right3Button>
                <Right3Button>Cards on the Spot</Right3Button>
                <Right3Button>FII as a Service</Right3Button>
              </Right3Navs>
              <Text2>Financial Instant Issuance</Text2>
              <p>
                Financial institutions can instantly issue new or replacement
                debit or credit cards to customers in branch locations thanks to
                our fully powered, end-to-end instant card issuance solution.
              </p>
              <FinancialOptions>
                <List>
                  <img src={financialInsuranceImage} alt="listOfIcons" />
                  <p>Increases card usage and activation</p>
                </List>
                <List>
                  <img src={financialInsuranceImage} alt="listOfIcons" />
                  <p>Activate cards instantly/automatically</p>
                </List>
                <List>
                  <img src={financialInsuranceImage} alt="listOfIcons" />
                  <p>
                    Creates differentiation in Bank’s offering to its customers
                  </p>
                </List>
                <List>
                  <img src={financialInsuranceImage} alt="listOfIcons" />
                  <p>
                    Increases customer service and satisfaction with
                    “on-the-spot” issuance
                  </p>
                </List>
                <List>
                  <img src={financialInsuranceImage} alt="listOfIcons" />
                  <p>
                    Guarantees secure card delivery while eliminating courier
                    fees
                  </p>
                </List>
              </FinancialOptions>
            </FinancialInfo>
          </Right>
        </FinanceWrapper>
      </FinancialInstance>
      <ChamsRequirement>
        <C1>
          ChamsAccess is a true partner for all of your instant issuance
          requirements. <br />
        </C1>
        <C2>
          Thanks to experienced staff, fully integrated, tested instant issuance
          software that streamlines the card issuance process, hardware and
          printers for every card program need, and service levels that
          prioritize the needs of the customer.
        </C2>
        <img src={ChamsRequiementImage} alt="cyber2" />
      </ChamsRequirement>
      <DesignInstance>
        <DesignWrapper>
          <Left2>
            <DesignInfo>
              <Text2>
                Design and print virtually any card with groundbreaking
                simplicity.{" "}
              </Text2>
              <p>
                You can print what you want, when you want, from just about
                anywhere, all at lightning speed. Print single or dual-sided
                edge-to-edge color or black-and-white cards, with ribbons that
                offer specialty colors and special effects.
              </p>
              <DesignOption>
                <Opt>
                  <img src={financialInsuranceImage} alt="OptOfIcons" />
                  <p>Compact Card Printers That Deliver it All</p>
                </Opt>
                <Opt>
                  <img src={financialInsuranceImage} alt="OptOfIcons" />
                  <p>Reliable Performance and Outstanding Print Quality</p>
                </Opt>
                <Opt>
                  <img src={financialInsuranceImage} alt="OptOfIcons" />
                  <p>Worldwide Pre-sales and post-sales technical support</p>
                </Opt>
                <Opt>
                  <img src={financialInsuranceImage} alt="OptOfIcons" />
                  <p>
                    Readily-available parts and printer consumables (ribbons,
                    cards, cleaning kits, etc)
                  </p>
                </Opt>
                <Opt>
                  <img src={financialInsuranceImage} alt="OptOfIcons" />
                  <p>
                    Exceptional Image Quality That is Efficient and Cost
                    Effective
                  </p>
                </Opt>
              </DesignOption>
            </DesignInfo>
          </Left2>
          <Right2>
            <img src={DesignImage} alt="financial" />
          </Right2>
        </DesignWrapper>
      </DesignInstance>
      <SelfService>
        <SelfServiceWrapper>
          <Left3>
            <img src={selfService} alt="self-service-image" />
          </Left3>
          <Right3>
            <SelfDescription>
              <SelfHeading>Self-Service Interactive Kiosks</SelfHeading>
              <p>
                Our Self Service Kiosk Ecosystem has everything you could need
                to lead your organization securely into the digital era,
                connecting more deeply with consumers and delivering omnichannel
                experiences.
                <br />
                <br />
                When combining a self-service kiosk machine with self-service
                applications and kiosk management software, the result is a
                complete self-service solution that leads to lower operational
                and labor costs and reduced demand on staff.
                <br />
                <br />
                With the greatest digital kiosk technology available, create a
                more effective workplace and usher your sector into the
                twenty-first century.
              </p>
            </SelfDescription>
          </Right3>
        </SelfServiceWrapper>
      </SelfService>
      <IndustriesWeServe>
        <Gradient />
        <ServeContent>
          <ServeLeft>
            <L1>Industries We Serve</L1>
            <L2>
              Our payment and financial solutions are applicable and currently
              serve multiple industries, not limited to:
            </L2>
          </ServeLeft>
          <ServeRight>
            <R1>FMCG</R1>
            <R2>Financial</R2>
            <R3>Public Sector</R3>
            <R4>Manufacturing</R4>
            <R5>Transportation</R5>
          </ServeRight>
        </ServeContent>
      </IndustriesWeServe>
      <Footer />
    </PaymentContainer>
  );
};

export default PaymentSolution;
