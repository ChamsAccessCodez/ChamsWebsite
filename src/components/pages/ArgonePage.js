import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  ArgoneContainer,
  ArgoneHero,
  ArgoneDivider,
  ArgonRight,
  ArgonLeft,
  ArgoneHead,
  ArgoneDesc,
  ArgoneButton,
  DeviceSale,
  SaleDivider,
  SalesLeft,
  SalesRight,
  D1,
  D2,
  SalesControl,
  SalesList,
  DeviceRepair,
  DeviceDivider,
  DeviceLeft,
  DeviceRight,
  L1,
  L2,
  DeviceControl,
  DeviceList,
  DeviceTraining,
  TrainingDivider,
  TrainingLeft,
  TrainingRight,
  T1,
  T2,
  TrainingControl,
  TrainingList,
  DeviceFinance,
  FinanceDivider,
  FinanceLeft,
  FinanceRight,
  F1,
  F2,
  FinanceControl,
  FinanceList,
  DeviceSwap,
  SwapDivider,
  SwapLeft,
  SwapRight,
  S1,
  S2,
  SwapControl,
  SwapList,
  TextDiv,
  Ready,
  RequestButton
} from "./ArgonePageStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import argonHeroImage from "../../images/ArgonHeroImage.png";
import argoneLogo from "../../images/ArgonLogo.svg";
import argoneDeviceImage from "../../images/ArgonDeviceSales.png";
import argoneDeviceImage2 from "../../images/ArgoneDeviceRepair.png";
import argoneDeviceImage3 from "../../images/ArgonDeviceTraining.png";
import argoneDeviceImage4 from "../../images/ArgoneDeviceFinance.png";
import argoneDeviceImage5 from "../../images/ArgoneDeviceSwap.png";
import salesIcon from "../../images/FinancialInsurranceIcon.svg";
import argonRepairIcon from "../../images/ArgonRepairIcon.svg";

const ArgonePage = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <ArgoneContainer>
      <Header />
      <ArgoneHero>
        <ArgoneDivider>
          <ArgonLeft>
            <img src={argoneLogo} alt="argoneLogo" />
            <ArgoneHead>
              Providing Delightful <span>Retail Experience</span>
            </ArgoneHead>
            <ArgoneDesc>
              Mobile solutions provider, providing a customer-centric retail
              experience in sales and post-sales support of phones, laptops,
              accessories, and gadgets.
            </ArgoneDesc>
            <ArgoneButton>Shop with Argone</ArgoneButton>
          </ArgonLeft>
          <ArgonRight>
            <img src={argonHeroImage} alt="argonHero" />
          </ArgonRight>
        </ArgoneDivider>
      </ArgoneHero>
      <DeviceSale>
        <SaleDivider>
          <SalesLeft>
            <img src={argoneDeviceImage} alt="sales" />
          </SalesLeft>
          <SalesRight>
            <D1>Device sales</D1>
            <D2>
              We supply everyday customers and corporate organizations with
              mobile, smart devices, accessories and electronics.{" "}
            </D2>
            <SalesControl>
              <SalesList>
                <img src={salesIcon} alt="sales" />
                <p>Up to 2-year International Warranty</p>
              </SalesList>
              <SalesList>
                <img src={salesIcon} alt="sales" />
                <p>Best-in-class Customer Support</p>
              </SalesList>
              <SalesList>
                <img src={salesIcon} alt="sales" />
                <p>Friendly, accommodating prices</p>
              </SalesList>
              <SalesList>
                <img src={salesIcon} alt="sales" />
                <p>Device Insurance on select devices</p>
              </SalesList>
            </SalesControl>
          </SalesRight>
        </SaleDivider>
      </DeviceSale>
      <DeviceRepair>
        <DeviceDivider>
          <DeviceLeft>
            <L1>Device repairs</L1>
            <L2>
              We offer premium repairs on a wide range of gadgets. These repairs
              are carried out either at your place of preference or our store.{" "}
            </L2>
            <DeviceControl>
              <DeviceList>
                <img src={argonRepairIcon} alt="sales" />
                <p>Home pick-up and drop off</p>
              </DeviceList>
              <DeviceList>
                <img src={argonRepairIcon} alt="sales" />
                <p>Specialist device technicians</p>
              </DeviceList>
              <DeviceList>
                <img src={argonRepairIcon} alt="sales" />
                <p>Original replacement parts</p>
              </DeviceList>
            </DeviceControl>
          </DeviceLeft>
          <DeviceRight>
            <img src={argoneDeviceImage2} alt="sales" />
          </DeviceRight>
        </DeviceDivider>
      </DeviceRepair>
      <DeviceTraining>
        <TrainingDivider>
          <TrainingLeft>
            <img src={argoneDeviceImage3} alt="sales" />
          </TrainingLeft>
          <TrainingRight>
            <T1>Device training</T1>
            <T2>
              We provide a variety of courses in smartphone and tablet repairs.
              Our courses comprise a series of both practical and theory
              lessons, taught by professionals with expert knowledge of Gadget
              Engineering.{" "}
            </T2>
            <TrainingControl>
              <TrainingList>
                <img src={salesIcon} alt="sales" />
                <p>Device Specialist Trainers</p>
              </TrainingList>
              <TrainingList>
                <img src={salesIcon} alt="sales" />
                <p>Virtual and physical training sessions</p>
              </TrainingList>
              <TrainingList>
                <img src={salesIcon} alt="sales" />
                <p>Coding Classes and Hackathons</p>
              </TrainingList>
            </TrainingControl>
          </TrainingRight>
        </TrainingDivider>
      </DeviceTraining>
      <DeviceFinance>
        <FinanceDivider>
          <FinanceLeft>
            <F1>Device financing</F1>
            <F2>
              In partnership with service providers, we extend our buy now pay
              later offering to customers who wish to buy items and pay in
              installments.{" "}
            </F2>
            <FinanceControl>
              <FinanceList>
                <img src={argonRepairIcon} alt="sales" />
                <p>Ease of onboarding</p>
              </FinanceList>
              <FinanceList>
                <img src={argonRepairIcon} alt="sales" />
                <p>Market friendly interest rates</p>
              </FinanceList>
              <FinanceList>
                <img src={argonRepairIcon} alt="sales" />
                <p>Ease of repayment</p>
              </FinanceList>
              <FinanceList>
                <img src={argonRepairIcon} alt="sales" />
                <p>Available to all customers</p>
              </FinanceList>
            </FinanceControl>
          </FinanceLeft>
          <FinanceRight>
            <img src={argoneDeviceImage4} alt="sales" />
          </FinanceRight>
        </FinanceDivider>
      </DeviceFinance>
      <DeviceSwap>
        <SwapDivider>
          <SwapLeft>
            <img src={argoneDeviceImage5} alt="sales" />
          </SwapLeft>
          <SwapRight>
            <S1>Trade-in/Device swap</S1>
            <S2>
            Our Trade-in service offers you the opportunity to swap your used device for a new device.{" "}
            </S2>
            <SwapControl>
              <SwapList>
                <img src={salesIcon} alt="sales" />
                <p>In-store old device inspection</p>
              </SwapList>
            </SwapControl>
          </SwapRight>
        </SwapDivider>
      </DeviceSwap>
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
    </ArgoneContainer>
  );
};

export default ArgonePage;
