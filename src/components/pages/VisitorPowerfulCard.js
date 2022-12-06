import React from "react";
import styled from "styled-components";

const VisitorPowerfulCard = ({
  visitorPowerfulSource,
  PowerfulHeading,
  PowerfulDesc,
}) => {
  return (
    <PowerfulContainer>
      <img src={visitorPowerfulSource} alt="powerfulSourced" />
      <P1>{PowerfulHeading}</P1>
      <P2>{PowerfulDesc}</P2>
    </PowerfulContainer>
  );
};

export default VisitorPowerfulCard;

const PowerfulContainer = styled.div`
  cursor: pointer;
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
  transition: box-shadow 0.4s;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
    // margin-bottom: 20px;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`;
const P1 = styled.div`
  width: 150px;
  height: 64px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #1d2939;
  //   margin-bottom: 18px;
`;
const P2 = styled.div`
  width: 280px;
  height: 70px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
`;
// const PowerfulContainer = styled.div``;
// const PowerfulContainer = styled.div``;
// const PowerfulContainer = styled.div``;
// const PowerfulContainer = styled.div``;
// const PowerfulContainer = styled.div``;
// const PowerfulContainer = styled.div``;
// const PowerfulContainer = styled.div``;
