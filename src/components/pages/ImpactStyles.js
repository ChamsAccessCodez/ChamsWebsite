import styled from "styled-components";
import heroBackground from "../../images/hero-background.svg";

export const ImpactContainer = styled.div`
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
    rgba(57, 147, 100, 0.25) 0%,
    rgba(206, 228, 216, 0.25) 77.6%
  );
  width: inherit;
  height: 780px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    // background: red;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const HeroContent = styled.div`
  //   background: red;
  width: 50%;
  height: 100%;
  //   height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 120px;

  @media screen and (max-width: 960px) {
    // background: blue;
    width: 100%;
    // height: 1200px;
    height: 500px;
    margin-left: 0px;
    display: flex;
    align-items: center;

    // [data-aos-delay] {
    //   transition-delay: 0s !important;
    // }
  }
`;

export const OurImpact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  width: 120px;
  height: 28px;
  background: #f6eaeb;
  border-radius: 97px;
  background: #f6eaeb;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background, color 1s;

  width: 72px;
  height: 20px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: center;

  /* Secondary/500 */

  color: #a92f34;

  :hover {
    background: #a92f34;
    color: #f6eaeb;
  }

  @media screen and (max-width: 960px) {
    margin-left: 0px;
  }
`;

export const ContentHeader = styled.div`
  //   background: red;
  width: 540px;
  height: 126px;
  font-family: "Amster";
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

  @media screen and (max-width: 960px) {
    // background: red;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 62px;
    word-wrap: break-word;
    text-align: center;
  }
`;

export const ContentDescription = styled.div`
  width: 446px;
  height: 84px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #667085;

  @media screen and (max-width: 960px) {
    // background: red;
    width: 90%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const ContentButton = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 10px;
  width: 200px;
  height: 48px;
  background: #08783d;
  border-radius: 10px;
  font-family: Komet;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  transition: width 1s;

  :hover {
    width: 210px;
  }

  @media screen and (max-width: 960px) {
    margin-top: 80px;
    margin-bottom: 40px;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  // background: purple;
  background-image: url(${heroBackground});
  // height: 500px;
  background-position: bottom;
  // background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  //   background-size: 650px 700px;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 120px;

  img {
    width: 525.37px;
    height: 617px;
    margin-bottom: 24px;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-right: 0px;
    height: 500px;
    align-items: center;
    justify-content: center;

    img {
      width: 353.99px;
      height: 332px;
    }
  }
`;

// export const ImpactContainer = styled.div``;
export const Verification = styled.div`
  width: 100vw;
  height: 700px;
  //   background: linear-gradient(
  //     0deg,
  //     rgba(57, 147, 100, 0.25) 0%,
  //     rgba(206, 228, 216, 0.25) 77.6%
  //   );
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const VerificationWrapper = styled.div`
  //   background: red;
  width: 90%;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const W1 = styled.div`
  //   background: green;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 554px;
    height: 450px;
  }
`;
export const W2 = styled.div`
  //   background: green;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    width: 551px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    margin-top: 0px;
  }
`;
export const W21 = styled.div`
  width: 551px;
  height: 114px;
  font-family: "Amster";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 20px;
`;
export const VerifyOption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: flex-start;
`;
export const Options = styled.div`
  //   background-color: tomato;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  //   align-items: center;
  height: 32px;
  margin-bottom: 21px;

  img {
    margin-right: 16px;
    width: 28px;
    height: 28px;
  }

  p {
    // background: red;
    width: 100%;
    height: 32px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #667085;
  }
`;
// export const ImpactContainer = styled.div``;
export const Atm = styled.div`
  width: 100vw;
  height: 700px;
  //   background: linear-gradient(
  //     0deg,
  //     rgba(57, 147, 100, 0.25) 0%,
  //     rgba(206, 228, 216, 0.25) 77.6%
  //   );
  background: #ebf5f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AtmWrapper = styled.div`
  //   background: red;
  width: 90%;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const A1 = styled.div`
  //   background: green;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 554px;
    height: 426px;
  }
`;
export const A2 = styled.div`
  //   background: green;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    width: 550px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    margin-top: 0px;
  }
`;
export const A21 = styled.div`
  width: 551px;
  font-family: "Amster";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 20px;
`;
export const AtmOption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: flex-start;
`;
export const OptionsAtm = styled.div`
  //   background-color: tomato;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  //   align-items: center;
  height: 32px;
  margin-bottom: 21px;

  img {
    margin-right: 16px;
    width: 28px;
    height: 28px;
  }

  p {
    // background: red;
    width: 360px;
    height: 32px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
  }
`;
// export const ImpactContainer = styled.div``;
export const Credit = styled.div`
  width: 100vw;
  height: 700px;
  //   background: linear-gradient(
  //     0deg,
  //     rgba(57, 147, 100, 0.25) 0%,
  //     rgba(206, 228, 216, 0.25) 77.6%
  //   );
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CreditWrapper = styled.div`
  //   background: red;
  width: 90%;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const C1 = styled.div`
  //   background: green;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 565px;
    height: 450px;
  }
`;
export const C2 = styled.div`
  //   background: green;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    width: 450px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    margin-top: 0px;
  }
`;
export const C21 = styled.div`
  width: 450px;
  height: 76px;
  font-family: "Amster";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 20px;
`;
export const CreditOption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: flex-start;
`;
export const OptionsCredit = styled.div`
  //   background-color: tomato;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  //   align-items: center;
  height: 32px;
  margin-bottom: 21px;

  img {
    margin-right: 16px;
    width: 28px;
    height: 28px;
  }

  p {
    // background: red;
    width: 360px;
    height: 32px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
  }
`;
// export const ImpactContainer = styled.div``;
