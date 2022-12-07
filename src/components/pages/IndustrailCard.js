import React from "react";
import styled from "styled-components";
import industrialBanking from "../../images/IndustrialBanking.svg";
import bankingIcon from "../../images/BankingIcon.png";

const IndustrailCard = ({cardHeader, sourceImage}) => {
  return (
    <IndustrialCardContainer>
      <p>{cardHeader}</p>
      <img id="cardImage" src={sourceImage} alt="industrial-banking" />
      <IndustrialInfo id="cardDescription">
        <List>
          <img src={bankingIcon} alt="list1" />
          <p>Single Sign-On</p>
        </List>
        <List>
          <img src={bankingIcon} alt="list1" />
          <p>Access Control</p>
        </List>
        <List>
          <img src={bankingIcon} alt="list1" />
          <p>Fraud Prevention</p>
        </List>
        <List>
          <img src={bankingIcon} alt="list1" />
          <p>Compliance (KYC)</p>
        </List>
        <List>
          <img src={bankingIcon} alt="list1" />
          <p>Biometric Payments</p>
        </List>
        <List>
          <img src={bankingIcon} alt="list1" />
          <p>ATM User Authentication</p>
        </List>
        <List>
          <img src={bankingIcon} alt="list1" />
          <p>Multi-Factor Authentication</p>
        </List>
        <List>
          <img src={bankingIcon} alt="list1" />
          <p>Bank Transaction Authentication</p>
        </List>
      </IndustrialInfo>
    </IndustrialCardContainer>
  );
};

export default IndustrailCard;

const IndustrialCardContainer = styled.div`
  width: 360px;
  height: 500px;
  background: linear-gradient(26.57deg, #022412 8.33%, #08783d 91.67%);
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  margin: 30px 20px;

  img {
    width: 300px;
    height: 300px;
    align-self: center;
  }

  p {
    width: 183px;
    // height: 82px;
    font-family: "Roslindale Text";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #ffffff;
    text-align: left;
    margin-left: 30px;
    margin-top: 40px;
    margin-bottom: 48px;
  }

  :hover #cardImage {
    display: none;
  }

  :hover #cardDescription {
    display: flex;
    visibility: visible;
    flex-direction: column;
  }
`;

const IndustrialInfo = styled.div`
  // background-color: red;
  display: none;
  margin-left: 30px;
  margin-top: 20px;
  color: #ffffff;
`;
const List = styled.div`
  width: 100%;
  height: 30px;
  // background: blue;
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  img {
    width: 24px;
    height: 24px;
    // background: pink;
    align-self: center;
  }

  p {
    width: 100%;
    // background: red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0px;
    margin-left: 12px;
    margin-bottom: 16px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ebf5f0;
    height: 100%;
  }
`;
// const IndustrialHeader = styled.div``;
// const IndustrialHeader = styled.div``;
// const IndustrialHeader = styled.div``;
// const IndustrialHeader = styled.div``;
