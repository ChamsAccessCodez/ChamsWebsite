import React from "react";
import styled from "styled-components";

const CustomCard = ({ customSourceImage, customTitle, customDescription }) => {
  return (
    <CustomCardContainer>
      <img src={customSourceImage} alt="cardIcon" />
      <J1>{customTitle}</J1>
      <br />
      {customDescription}
    </CustomCardContainer>
  );
};

export default CustomCard;

const CustomCardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 40px;
  width: 360px;
  height: 332px;
  background: #ffffff;
  border: 1px solid #eaecf0;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.5s;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;
const J1 = styled.div`
  width: 200px;
  height: 64px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #1d2939;
  margin-top: 20px;
`;
// const CustomCardContainer = styled.div``;
// const CustomCardContainer = styled.div``;
// const CustomCardContainer = styled.div``;
// const CustomCardContainer = styled.div``;
// const CustomCardContainer = styled.div``;
// const CustomCardContainer = styled.div``;
// const CustomCardContainer = styled.div``;
// const CustomCardContainer = styled.div``;
// const CustomCardContainer = styled.div``;
