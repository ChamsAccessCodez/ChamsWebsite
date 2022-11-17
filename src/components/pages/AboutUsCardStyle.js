import styled from "styled-components";

export const LineHistoryWrapper = styled.div`
  //   background: white;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 110px;
  cursor: pointer;
  transition: transform 1.5s;

  &:hover {
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
      0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    transform: scale(1.1);
  }

  &:hover #line {
    background: #08783d;
  }
  &:hover #circle {
    background: #08783d;
    margin-top: 45px;
  }
`;
export const Line = styled.div`
  width: 2px;
  height: 110px;
  background: #eaecf0;
  margin-left: 10px;
  margin-right: 30px;
  transition: background 1s;
`;
export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #eaecf0;
  margin-left: -5px;
  margin-top: 10px;
  transition: background, margin-top 1s;
`;
export const LineDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Year = styled.div`
  width: 257px;
  height: 17px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #344054;
  margin-top: 10px;
  margin-bottom: 12px;
`;
export const YearDesc = styled.div`
  width: 450px;
  height: 48px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #344054;
`;
