import styled from "styled-components";
import aboutBackground from "../../../images/AboutBackground.png";

export const AboutWrapper = styled.div`
  width: 100vw;
  height: 1350px;
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) -74.19%,
    rgba(206, 228, 216, 0.25) 60.99%
  );
//   background: green;
  background-image: url(${aboutBackground});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: inherit 777.84px;
  //   background-size: 1440px 777.84px;
//   padding: 80px 80px;
display: flex;
flex-direction: column;
align-items: flex-start;
`;
export const AboutButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  width: 97px;
  height: 28px;
  background: #f6eaeb;
  border-radius: 97px;
  margin-bottom: 20px;
  margin-left: 80px;
  margin-top: 80px;
  cursor: pointer;
  transition: background, color 2s;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #a92f34;

  :hover {
    background: #a92f34;
    color: #f6eaeb;
  }
`;
export const Why = styled.div`
  width: 846px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #101828;
  margin-bottom: 20px;
  margin-left: 80px;
`;
export const AboutDesc = styled.div`
  width: 713px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #667085;
  margin-bottom: 50px;
  margin-left: 80px;
`;
export const AboutImages = styled.div`
background: red;
display: flex;
align-self: center;
justify-content: space-between;
align-items: flex-start;
padding: 0px;
width: 90%;
// width: 1203px;
height: 925px;
gap: 80px;
`;
// export const AboutWrapper = styled.div``;
// export const AboutWrapper = styled.div``;
// export const AboutWrapper = styled.div``;
// export const AboutWrapper = styled.div``;
