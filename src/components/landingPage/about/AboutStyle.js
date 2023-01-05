import styled from "styled-components";
import aboutBackground from "../../../images/AboutBackground.png";

export const AboutWrapper = styled.div`
  width: 100vw;
  height: 1350px;
  // height: auto;
  // background: green;
  // background-image: url(${aboutBackground});
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) -74.19%,
    rgba(206, 228, 216, 0.25) 60.99%
  ), url(${aboutBackground});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: inherit 777.84px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 960px) {
    // background: red;
    height: auto;
    justify-content: center;
    align-items: center;
  }
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
  transition: background, color 1s;

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

  @media screen and (max-width: 960px) {
    margin-left: 0px;
  }
`;
export const Why = styled.div`
  width: 846px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #101828;
  margin-bottom: 20px;
  margin-left: 80px;

  @media screen and (max-width: 960px) {
    margin-left: 0px;
    text-align: center;
    width: 100%;
  }
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

  @media screen and (max-width: 960px) {
    margin-left: 0px;
    // background: yellow;
    width: 100%;
    text-align: center;
  }
`;
export const AboutImages = styled.div`
  // background: red;
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  width: 90%;
  // width: 1203px;
  // height: 925px;
  height: auto;
  gap: 60px;

  @media screen and (max-width: 960px) {
    // background: yellow;
    height: auto;
    margin-bottom: 20px;
  }
`;
// export const AboutWrapper = styled.div``;
// export const AboutWrapper = styled.div``;
// export const AboutWrapper = styled.div``;
// export const AboutWrapper = styled.div``;
