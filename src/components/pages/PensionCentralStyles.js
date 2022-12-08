import styled from "styled-components";
import heroBackground from "../../images/hero-background.svg";
import trusteeImage from "../../images/TrusteesBg.svg";

export const PenContainer = styled.div`
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
  width: 500px;
  height: 192px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #08783d;

  span {
    color: #000000;
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
  color: #475467;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const ContentButton = styled.div`
  margin-top: 20px;
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
  // background: purple;
  background-image: url(${heroBackground});
  // height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 120px;

  img {
    width: 600px;
    height: 600px;
  }
`;
export const OurNumber = styled.div`
  //   background: red;
  width: inherit;
  height: 650px;
  display: flex;
`;
export const YoImage = styled.div`
  //   background: red;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const YoText = styled.div`
  //   background: blue;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const NumberButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  width: 123px;
  height: 28px;
  background: #f6eaeb;
  border-radius: 97px;
  margin-top: 110px;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: 80px;
  text-align: center;
  color: #a92f34;
`;
export const Desc = styled.div`
  width: 462px;
  height: 74px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 30px;
  margin-left: 80px;
`;
export const NumberCard = styled.div`
  margin-left: 80px;
  width: 490px;
  height: 278px;
  //   background-color: green;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;
export const Features = styled.div`
  //   background: red;
  width: inherit;
  width: 90%;
  height: 900px;
  //   background: #f2f4f7;
  display: flex;
  flex-direction: row;
`;
export const FeaturesInfo = styled.div`
  // background: red;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p {
    width: 462px;
    height: 113px;
    font-family: "amster";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
    margin-left: 100px;
    margin-top: 23px;
    margin-bottom: 23px;
  }
`;
export const FeaturesImage = styled.div`
  // background: green;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
`;
export const FeatureButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  width: 123px;
  height: 28px;
  background: #f6eaeb;
  border-radius: 97px;
  margin-left: 100px;
  text-align: center;
  color: #a92f34;
`;
export const FeatureOptions = styled.div`
  // background: red;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 539px;
  height: 300px;
  margin-left: 100px;
`;
export const OptionContainer = styled.div`
  //   background: red;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 36px;

  img {
    width: 32px;
    height: 32px;
  }
`;
export const OptionDesc = styled.div`
  //   background: green;
  //   width: 326px;
  height: 28px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #667085;
  margin-left: 16px;
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

  width: 141px;
  height: 24px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`;
// export const YoText = styled.div``;
// export const YoText = styled.div``;
