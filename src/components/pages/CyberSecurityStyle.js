import styled from "styled-components";
import bg from "../../images/CyberIndustryWeServeBg.png";
import trusteeImage from "../../images/TrusteesBg.svg";

export const CyberContainer = styled.div`
  background: #ffffff;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 80px;
`;

export const Hero1 = styled.div`
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) -74.19%,
    rgba(206, 228, 216, 0.25) 60.99%
  );
  width: inherit;
  height: 85%;
  height: 700px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;
export const HeroContent = styled.div`
  //   background: red;
  width: 50%;
  //   width: inherit%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 120px;
  // padding-left: 100px;

  img {
    width: 109px;
    height: 47px;
    margin-bottom: 20px;
  }
`;
export const ContentHeader = styled.div`
  width: 460px;
  height: 192px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #101828;

  span {
    color: #08783d;
    text-transform: capitalize;
  }
`;
export const ContentDescription = styled.div`
  width: 500px;
  height: 84px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const ContentButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 10px;
  width: 227px;
  height: 44px;
  background: #08783d;
  border-radius: 10px;
  font-family: Komet;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  transition: width 1s;

  :hover {
    width: 210px;
  }
`;
export const HeroImage = styled.div`
  //   background: purple;
  // height: 500px;
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 120px;

  img {
    // width: 600px;
    // height: 600px;
    width: 650px;
    height: 575.95px;
  }
`;
export const AdvanceThreats = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 1240px;
    height: 400px;
  }
`;
export const A1 = styled.p`
  width: 800px;
  height: 73px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #101828;
  margin-top: 90px;
  margin-bottom: 23px;
`;
export const A2 = styled.p`
  width: 800px;
  height: 53px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #667085;
  margin-top: 0px;
  margin-bottom: 60px;
`;
export const CyberSolution = styled.div`
  width: 100vw;
  height: 1300px;
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) 0%,
    rgba(206, 228, 216, 0.25) 77.6%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const S1 = styled.p`
  width: 891px;
  height: 40px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #101828;
  margin-top: 100px;
  margin-bottom: 20px;
`;
export const S2 = styled.p`
  width: 831px;
  height: 53px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #667085;
  margin-top: 0px;
  margin-bottom: 61px;
`;
export const CyberWrapper = styled.div`
  //   background: red;
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  width: 90%;
  // width: 1203px;
  height: 925px;
  gap: 80px;

  @media screen and (max-width: 960px) {
    // background: yellow;
    height: auto;
    margin-bottom: 20px;
  }
`;
export const IndustriesWeServe = styled.div`
  position: relative;
  width: 100vw;
  height: 340px;
  background-image: url(${bg});
  background-image: url(${bg}),
    linear-gradient(26.57deg, #022412 8.33%, #08783d 91.67%);
  opacity: 0.8;
`;
export const Gradient = styled.div`
  position: absolute;
  width: inherit;
  height: 340px;
  left: 0px;
  top: 0px;
  background: linear-gradient(26.57deg, #022412 8.33%, #08783d 91.67%);
  opacity: 0.8;
`;
export const ServeContent = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ServeLeft = styled.div`
  //   background: red;
  color: #ffffff;
  z-index: 999;
  width: 406px;
  height: auto;
  margin-left: 120px;
  //   margin-top: 94px;
`;

export const L1 = styled.p`
  width: 383px;
  height: 44px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #ebf5f0;
  margin-top: 0px;
`;
export const L2 = styled.p`
  width: 406px;
  height: 88px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ebf5f0;
  margin-top: 0px;
`;
export const ServeRight = styled.div`
  //   background: yellow;
  color: #ffffff;
  z-index: 999;
  width: 406px;
  height: auto;
  margin-right: 120px;
  //   margin-top: 94px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const R1 = styled.p`
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: right;
  color: #ebf5f0;
  margin-top: 0px;
`;
export const R2 = styled.p`
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: right;
  color: #ebf5f0;
  margin-top: 0px;
`;
export const R3 = styled.p`
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: right;
  color: #ebf5f0;
  margin-top: 0px;
`;
export const R4 = styled.p`
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: right;
  color: #ebf5f0;
  margin-top: 0px;
`;
export const R5 = styled.p`
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: right;
  color: #ebf5f0;
  margin-top: 0px;
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
  height: 60px;
  font-family: "Roslindale Text";
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
  margin-top: 20px;
`;
// export const CyberContainer = styled.div``;
// export const CyberContainer = styled.div``;
