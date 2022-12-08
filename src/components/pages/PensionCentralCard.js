import React from "react";
import styled from "styled-components";

const PensionCentralCard = ({intValue, intDescription}) => {
  return <CardContainer>
    <Int>{intValue}</Int>
    <IntDesc>{intDescription}</IntDesc>
  </CardContainer>;
};

export default PensionCentralCard;

const CardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0px 20px 30px;
  width: 220px;
  height: 119px;
  background: #fcfcfd;
  border: 1px solid #f2f4f7;
  border-radius: 20px;
`;
export const Int = styled.div`
width: 161px;
height: 39px;
font-family: 'amster';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 44px;
letter-spacing: -0.02em;
color: #08783D;
`;
export const IntDesc = styled.div`
width: 168px;
height: 24px;
font-family: 'Komet';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #344054;
margin-top: 16px;
`;
// export const CardContainer = styled.div``;
// export const CardContainer = styled.div``;
// export const CardContainer = styled.div``;
