import React from "react";
import styled from "styled-components";

const VisitorCard = ({ visitorSource, visitorHeading, visitorDesc, color }) => {
  return (
    <VisitorCardContainer>
      <img src={visitorSource} alt="visitor" />
      <V1>{visitorHeading}</V1>
      <V2>{visitorDesc}</V2>
    </VisitorCardContainer>
  );
};

export default VisitorCard;

const VisitorCardContainer = styled.div`
  width: 480px;
  height: 498px;
  //   background: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  img {
    width: 80px;
    height: 120px;
    margin-bottom: 29px;
    margin-left: 50px;
  }
`;
const V1 = styled.div`
  width: 381px;
  height: 78px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #08783d;
  margin-bottom: 29px;
  margin-left: 50px;
`;
const V2 = styled.div`
  width: 381px;
  height: 119px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #08783d;
  margin-left: 50px;
`;
// const VisitorCardContainer = styled.div``;
// const VisitorCardContainer = styled.div``;
// const VisitorCardContainer = styled.div``;
