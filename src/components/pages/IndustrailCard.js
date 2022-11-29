import React, { useEffect } from "react";
import styled from "styled-components";
import industrialBanking from "../../images/IndustrialBanking.svg";

const IndustrailCard = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  return (
    <IndustrialCardContainer>
      <p>Banking and Finance</p>
      <img id="cardImage" src={industrialBanking} alt="industrial-banking" />
      <IndustrialInfo id="cardDescription">No Details found</IndustrialInfo>
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
    margin-top: 0px;
    width: 183px;
    height: 82px;
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
  }
`;

const IndustrialInfo = styled.div`
  display: none;
  margin-left: 30px;
  color: #ffffff;
`;
// const IndustrialHeader = styled.div``;
// const IndustrialHeader = styled.div``;
// const IndustrialHeader = styled.div``;
// const IndustrialHeader = styled.div``;
// const IndustrialHeader = styled.div``;
