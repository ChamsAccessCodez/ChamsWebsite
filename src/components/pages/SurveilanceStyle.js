import styled from "styled-components";
import surveilanceBg from "../../images/SurveilanceBg.png";
import trusteeImage from "../../images/TrusteesBg.svg";

export const SurveilanceContainer = styled.div`
  //   background: red;
  width: 1440px;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const SurveilanceMaster = styled.div`
  background: red;
  width: 100cw;
  height: 700px;
  background: url(${surveilanceBg});
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 80px;
`;
export const S1 = styled.div`
  width: 600px;
  height: 126px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ebf5f0;
  margin-top: 112px;
  margin-bottom: 20px;
`;
export const S2 = styled.div`
  width: 800px;
  height: 56px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #ebf5f0;
  margin-bottom: 20px;
`;
export const SurveillanceButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 8px;
  width: 187px;
  height: 44px;
  background: #08783d;
  border-radius: 8px;
  cursor: pointer;
  transition: width 0.5s;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ebf5f0;

  :hover {
    width: 220px;
  }
`;
export const WriteUp = styled.div`
  color: #ffffff;
  width: 100vw;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WriteUpWrapper = styled.div`
  //   background: red;
  //   width: 1138px;
  width: 85%;
  height: auto;
  height: 264px;

  display: flex;
  flex-direction: row;
  padding: 0px;
`;
export const WriteLeft = styled.div`
  // background: blue;
  width: 50%;
  display: flex;
  justify-content: flex-start;

  p {
    width: 418px;
    height: 128px;
    font-family: "Roslindale Text";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    margin-top: 0px;
  }
`;
export const WriteRight = styled.div`
  //   background: yellow;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  p {
    width: 600px;
    height: 140px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #475467;
    margin-top: 0px;
  }
`;
export const VideoSurveillance = styled.div`
width: 100vw;
height: 800px;
background: linear-gradient(0deg, rgba(57, 147, 100, 0.25) 0%, rgba(206, 228, 216, 0.25) 77.6%);
display: flex;
flex-direction: column
justify-content: center;
align-items: center;
`;
export const DivisionWrapper = styled.div`
  // background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const VideoLeft = styled.div`
  // background: yellow;
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const VideoRight = styled.div`
  //   background: blue;
  width: 45%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const P1 = styled.div`
  width: 500px;
  height: 76px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 26px;
`;
export const P2 = styled.div`
  width: 557px;
  height: 112px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #475467;
  margin-bottom: 26px;
`;
export const VideoOptions = styled.div`
  //   background: yellow;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;
export const Opt = styled.div`
  //   background: red;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;
export const Intrusion = styled.div`
  //   background: pink;
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IntrusionDivider = styled.div`
  width: 85%;
  height: inherit;
  //   background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IntrusionLeft = styled.div`
  // background: yellow;
  width: 45%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const I1 = styled.div`
  width: 500px;
  height: 38px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
`;
export const I2 = styled.div`
  width: 500px;
  height: 213px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #475467;
`;
export const IntrusionRight = styled.div`
  // background: blue;
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    width: 800px;
    height: 55px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #475467;
    margin-top: 0px;
    margin-bottom: 20px;
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
  //   background: red;
  width: 900px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #08783d;
  margin-bottom: 20px;
  margin-top: 0px;

  @media screen and (max-width: 960px) {
    width: 95vw;
    font-size: 40px;
    line-height: 50px;
    margin: 30px 0px 40px;
  }
`;
export const RequestButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 30px;
  background: #08783d;
  border-radius: 10px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`;

// export const SurveilanceContainer = styled.div``;
// export const SurveilanceContainer = styled.div``;
