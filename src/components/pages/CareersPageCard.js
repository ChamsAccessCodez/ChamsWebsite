import React from "react";
import styled from "styled-components";

const CareersPageCard = ({ sampleImage, cardHeading, Description }) => {
  return (
    <CardContainer>
      <img src={sampleImage} alt="page-card" />
      <Text>{cardHeading}</Text>
      <p>{Description}</p>
    </CardContainer>
  );
};

export default CareersPageCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //   padding: 40px 30px;
  width: 25%;
  height: 287px;
  background: #f9fafb;
  border-radius: 10px;
  // margin-left: 40px;
  // margin-top: 60px;
  // margin-bottom: 20px;
  // margin-right: 40px;
  cursor: pointer;
  transition: transform 1s;

  :hover {
    transform: scale(0.9);
  }

  img {
    width: 60px;
    height: 60px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  p {
    margin-left: 30px;
    margin-right: 30px;
    margin-button: 20px;
    margin-top: 0px;
  }
`;

const Text = styled.div`
  width: 301px;
  height: 75px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #101828;
  margin-left: 30px;
  margin-right: 30px;
`;
