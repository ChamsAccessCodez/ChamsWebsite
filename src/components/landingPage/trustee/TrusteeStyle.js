import styled from "styled-components";
import trusteeImage from "../../../images/TrusteesBg.svg";

export const TestContainer = styled.div`
  //   background: tomato;
  width: 100vw;
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`;
export const TrusteeLogos = styled.div`
  width: inherit;
  height: 320px;
  // height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100vw;
  }
`;
export const Text = styled.div`
  margin-top: 66px;
  margin-bottom: 38px;
  width: 573px;
  height: 32px;
  left: 433px;
  top: 66px;
  font-family: "amster";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #667085;

  @media screen and (max-width: 960px) {
    width: 90vw;
  }
`;
export const ImageWrapper = styled.div`
  // background: tomato;
  width: 100vw;
  height: 150px;
  display: flex;
  // justify-content: space-around;
  // align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const Items = styled.div`
  // background: green;
  height: inherit;
  width: 100%;
  display: flex;
  // justify-content: flex-start;
  align-items: center;
  margin: 0px 60px;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: 300px;
  //   height: auto;
  background: url(${trusteeImage}),
    linear-gradient(
      0deg,
      rgba(57, 147, 100, 0.25) 0%,
      rgba(206, 228, 216, 0.25) 77.6%
    );

  p {
    width: 460px;
    height: 43px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #667085;
  }

  @media screen and (max-width: 960px) {
    width: 100vw;

    p {
      width: 90vw;
      height: auto;
      margin-bottom: 30px;
    }
  }
`;
export const Ready = styled.div`
  width: 1000px;
  height: 59px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #08783d;
  // margin-top: 60px;
  // margin-bottom: 10px;
  margin: 60px 0px 10px;

  @media screen and (max-width: 960px) {
    width: 95vw;
    font-size: 40px;
    line-height: 50px;
    margin: 30px 0px 40px;
  }
`;
export const RequestButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 29px;
  width: 200px;
  height: 48px;
  background: #08783d;
  border-radius: 10px;
  transition: width 0.5s;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    width: 220px;
  }
`;
// export const TestContainer = styled.div`
// export const TestContainer = styled.div`
// export const TestContainer = styled.div`
// export const TestContainer = styled.div`
// `;
