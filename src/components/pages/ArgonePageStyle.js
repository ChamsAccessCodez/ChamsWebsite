import styled from "styled-components";
import argonHeroBg from "../../images/ArgoneHeroBh.svg";
import trusteeImage from "../../images/TrusteesBg.svg";

export const ArgoneContainer = styled.div`
  //   background: red;
  width: 1440px;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const ArgoneHero = styled.div`
  width: 100vw;
  height: 700px;
  left: 0px;
  top: 0px;
  background: linear-gradient(
    0deg,
    rgba(163, 47, 52, 0.25) 11.98%,
    rgba(238, 213, 214, 0.25) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
export const ArgoneDivider = styled.div`
  // background: red;
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ArgonLeft = styled.div`
  // background: blue;
  width: 50%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 157px;
    height: 47px;
  }
`;
export const ArgoneHead = styled.div`
  width: 500px;
  height: 120px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #1d2939;
  margin-bottom: 20px;

  span {
    color: #a92f34;
  }
`;
export const ArgoneDesc = styled.div`
  width: 530px;
  height: 84px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #475467;
  margin-bottom: 20px;
`;
export const ArgoneButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 8px;
  width: 170px;
  height: 44px;
  background: #a92f34;
  border-radius: 8px;
  transition: width 0.5s;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    width: 180px;
  }
`;
export const ArgonRight = styled.div`
  // background: tomato;
  width: 50%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${argonHeroBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  img {
    width: 600px;
    height: 600px;
  }
`;

export const DeviceSale = styled.div`
  width: 100vw;
  height: 800px;
  background: #fcfcfd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SaleDivider = styled.div`
  // background: red;
  width: 85%;
  height: inherit;
  display: flex;
  align: flex-start;
  justify-content: space-between;
`;
export const SalesLeft = styled.div`
  // background: tomato;
  width: 55%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SalesRight = styled.div`
  // background: blue;
  width: 40%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const D1 = styled.div`
  width: 422px;
  height: 34px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
`;
export const D2 = styled.div`
  width: 422px;
  height: auto;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #667085;
  margin-bottom: 23px;
`;
export const SalesControl = styled.div`
  // background: red;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const SalesList = styled.div`
  width: 100%;
  // background: tomato;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    margin: 0px;
  }
`;
// export const ArgoneContainer = styled.div``;
export const DeviceRepair = styled.div`
  width: 100vw;
  height: 800px;
  background: #F6EAEB;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DeviceDivider = styled.div`
  // background: red;
  width: 85%;
  height: inherit;
  display: flex;
  align: flex-start;
  justify-content: space-between;
`;
export const DeviceLeft = styled.div`
  // background: blue;
  width: 40%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const DeviceRight = styled.div`
  // background: tomato;
  width: 55%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const L1 = styled.div`
  width: 422px;
  height: 34px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
`;
export const L2 = styled.div`
  width: 422px;
  height: auto;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #667085;
  margin-bottom: 23px;
`;
export const DeviceControl = styled.div`
  // background: red;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const DeviceList = styled.div`
  width: 100%;
  // background: tomato;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    margin: 0px;
  }
`;
// export const ArgoneContainer = styled.div``;
export const DeviceTraining = styled.div`
  width: 100vw;
  height: 800px;
  background: #fcfcfd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TrainingDivider = styled.div`
  // background: red;
  width: 85%;
  height: inherit;
  display: flex;
  align: flex-start;
  justify-content: space-between;
`;
export const TrainingLeft = styled.div`
  // background: tomato;
  width: 55%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TrainingRight = styled.div`
  // background: blue;
  width: 40%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const T1 = styled.div`
  width: 422px;
  height: 34px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
`;
export const T2 = styled.div`
  width: 422px;
  height: auto;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #667085;
  margin-bottom: 23px;
`;
export const TrainingControl = styled.div`
  // background: red;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const TrainingList = styled.div`
  width: 100%;
  // background: tomato;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    margin: 0px;
  }
`;
// export const ArgoneContainer = styled.div``;
export const DeviceFinance = styled.div`
  width: 100vw;
  height: 800px;
  background: #F6EAEB;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FinanceDivider = styled.div`
  // background: red;
  width: 85%;
  height: inherit;
  display: flex;
  align: flex-start;
  justify-content: space-between;
`;
export const FinanceLeft = styled.div`
  // background: blue;
  width: 40%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const FinanceRight = styled.div`
  // background: tomato;
  width: 55%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const F1 = styled.div`
  width: 422px;
  height: 34px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
`;
export const F2 = styled.div`
  width: 422px;
  height: auto;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #667085;
  margin-bottom: 23px;
`;
export const FinanceControl = styled.div`
  // background: red;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const FinanceList = styled.div`
  width: 100%;
  // background: tomato;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    margin: 0px;
  }
`;
// export const ArgoneContainer = styled.div``;
export const DeviceSwap = styled.div`
  width: 100vw;
  height: 800px;
  background: #fcfcfd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SwapDivider = styled.div`
  // background: red;
  width: 85%;
  height: inherit;
  display: flex;
  align: flex-start;
  justify-content: space-between;
`;
export const SwapLeft = styled.div`
  // background: tomato;
  width: 55%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SwapRight = styled.div`
  // background: blue;
  width: 40%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const S1 = styled.div`
  width: 422px;
  height: 34px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
`;
export const S2 = styled.div`
  width: 422px;
  height: auto;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #667085;
  margin-bottom: 23px;
`;
export const SwapControl = styled.div`
  // background: red;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const SwapList = styled.div`
  width: 100%;
  // background: tomato;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    margin: 0px;
  }
`;
// export const ArgoneContainer = styled.div``;
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
