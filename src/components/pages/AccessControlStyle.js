import styled from "styled-components";
import trusteeImage from "../../images/TrusteesBg.svg";

export const AccessContainer = styled.div`
  //   background: red;
  width: 1440px;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const Access = styled.div`
  background: #ffffff;
  width: 100vw;
  height: 700px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AccessLeft = styled.div`
  //   background: red;
  width: 40%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const AccessRight = styled.div`
  position: relative;
  //   background: blue;
  width: 60%;
  height: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  top: 60px;

  img {
    width: 940px;
    height: 817.08px;
    object-fit: contain;
  }
`;
export const A1 = styled.div`
  width: 457px;
  height: 120px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #101828;
  margin-bottom: 20px;
  margin-left: 120px;

  span {
    color: #08783d;
  }
`;
export const A2 = styled.div`
  width: 438px;
  height: 56px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  margin-bottom: 20px;
  margin-left: 120px;
`;
export const AccessButton = styled.div`
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
  margin-left: 120px;
  cursor: pointer;
  transition: width 0.5s;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  :hover {
    width: 200px;
  }
`;
export const AccessControlMaster = styled.div`
  width: 100vw;
  height: 800px;
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) 0%,
    rgba(206, 228, 216, 0.25) 77.6%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AccessControlDivider = styled.div`
  //   background: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100%;
`;
export const DividerLeft = styled.div`
  //   background: yellow;
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const DividerRight = styled.div`
  //   background: blue;
  width: 45%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const C1 = styled.div`
  width: 500px;
  height: 37px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 26px;
`;
export const C2 = styled.div`
  width: 500px;
  height: 164px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #475467;
  margin-bottom: 26px;
`;
export const ControlOption = styled.div`
  //   background: tomato;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const OptList = styled.div`
  //   background: yellow;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }

  p {
    width: 368px;
    height: 28px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #475467;
    margin-top: 0px;
  }
`;
export const TimeSolution = styled.div`
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TimeSolutionDivider = styled.div`
  //   background: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100%;
`;
export const TimeLeft = styled.div`
  //   background: green;
  width: 43%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const TimeRight = styled.div`
  //   background: tomato;
  width: 55%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 638px;
    height: 510.06px;
    object-fit: contain;
  }
`;
export const T1 = styled.div`
  width: 576px;
  height: 38px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 26px;
`;
export const T2 = styled.div`
  width: 500px;
  height: 112px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #475467;
  margin-bottom: 26px;
`;
export const TimeOption = styled.div`
  //   background: brown;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const TimeList = styled.div`
  width: 100%;
  //   background: yellow;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  img {
    margin-right: 16px;
    width: 32px;
    height: 32px;
  }
  p {
  }
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
  font-family: "amster";
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
// export const AccessContainer = styled.div``;
// export const AccessContainer = styled.div``;
// export const AccessContainer = styled.div``;
// export const AccessContainer = styled.div``;
