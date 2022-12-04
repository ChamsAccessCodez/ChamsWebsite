import React from "react";
import styled from "styled-components";

const SecureKidCard = ({ sourceImage, TitleHead, TitleHead2 }) => {
  return (
    <CardContainer>
      <img src={sourceImage} alt="source" />
      <p>{TitleHead}</p>
      <P2>{TitleHead2}</P2>
    </CardContainer>
  );
};

export default SecureKidCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 30px;
  width: 350px;
  height: 396px;
  background: #ffffff;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 14px;
  cursor: pointer;

  img {
    width: 350px;
    height: 250px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }

  p {
    background: blue;
    margin-top: 34px;
    width: 95%;
    height: 120px;
    font-family: "Roslindale Text";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
    margin-left: 30px;
    text-align: left;
    overflow-wrap: break-word;
    display: flex;
  }
`;
const P2 = styled.p`
  background: red;
  width: 200px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-left: 30px;
  margin-top: 0px;
  text-align: left;
  // overflow-wrap: break-word;
`;
// const CardContainer = styled.div``;
// const CardContainer = styled.div``;
// const CardContainer = styled.div``;
