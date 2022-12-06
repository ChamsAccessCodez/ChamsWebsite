import styled from "styled-components";
import bg from "../../images/CyberIndustryWeServeBg.png";

export const AccessManagementContainer = styled.div`
  //   background: red;
  width: 1440px;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const Management = styled.div`
  position: relative;
  background: #ffffff;
  width: 100vw;
  height: 700px;
  margin-top: 80px;
  display: flex;
`;
export const Div1 = styled.div`
  width: 900px;
  height: 700px;
  left: 0px;
  top: 0px;
  background: linear-gradient(45deg, #043c1f 0%, #08783d 100%);
  border-radius: 0px 0px 100px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const Div2 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -190px;

  img {
    width: 570px;
    height: 480px;
  }
`;
export const M1 = styled.div`
  width: 455px;
  height: 126px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #fcfcfd;
  margin-bottom: 20px;
  margin-left: 120px;
`;
export const M2 = styled.div`
  width: 455px;
  height: 56px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #fcfcfd;
  margin-bottom: 20px;
  margin-left: 120px;
`;
export const AccessManagementButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 8px;
  width: 180px;
  height: 44px;
  background: #ebf5f0;
  border-radius: 8px;
  margin-left: 120px;
  cursor: pointer;
  transition: width 0.5s;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #08783d;

  :hover {
    width: 200px;
  }
`;
export const ManagementHistory = styled.div`
  background: #ffffff;
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ManagementWrapper = styled.div`
  // background: red;
  width: 85%;
  height: inherit;
  display: flex;
  justify-content: space-between;
`;
export const ManagementLeft = styled.div`
  // background: yellow;
  width: 55%;
  height: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const ManagementRight = styled.div`
  //   background: yellow;
  width: 40%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    width: 450px;
    height: 73px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #475467;
  }
`;
export const TextHeader = styled.div`
  width: 454px;
  height: 154px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #101828;
`;
export const SecureKidComponent = styled.div`
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
export const KidDivider = styled.div`
  width: 85%;
  // background: red;
  height: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const KidLeft = styled.div`
  //   background: green;
  width: 50%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const KidRight = styled.div`
  //   background: tomato;
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 545px;
    // height: 610px;
  }
`;
export const K1 = styled.div`
  //   background: blue;
  width: 450px;
  height: 29px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
`;
export const K2 = styled.div`
  width: 508px;
  height: 47px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #475467;
  margin-bottom: 26px;
`;
export const KidOption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const OptList = styled.div`
//   background: yellow;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
    margin-right: 12px;
  }

  p {
    width: 100%;
    height: 24px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
`;
export const KidNav = styled.div`
  //   background: red;
  width: auto;
  hight: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 23px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    text-align: center;
    margin-top: 2px;
    transition: margin 0.5s;
  }

  :hover img {
    margin-left: 15px;
  }
`;
export const Name = styled.div`
  width: 82px;
  height: 24px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #a92f34;
  margin-right: 5px;
`;
export const AccessControlComponent = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ControlDivider = styled.div`
  // background: red;
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ControlLeft = styled.div`
  // background: tomato;
  width: 55%;
  height: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 684px;
    height: 546px;
  }
`;
export const ControlRight = styled.div`
  //   background: blue;
  width: 40%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const C1 = styled.div`
  width: 450px;
  height: 72px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
`;
export const C2 = styled.div`
  width: 508px;
  height: 156px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #667085;
`;
export const AccessNav = styled.div`
  //   background: red;
  width: auto;
  hight: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 23px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    text-align: center;
    margin-top: 2px;
    transition: margin 0.5s;
  }

  :hover img {
    margin-left: 15px;
  }
`;
export const AccessName = styled.div`
  width: 82px;
  height: 24px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #08783d;
  margin-right: 5px;
`;
export const VisitorsManagementComponent = styled.div`
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
export const VisitorDivider = styled.div`
  width: 90%;
  //   background-color: green;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const VisitorLeft = styled.div`
  //   background: blue;
  width: 35%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const VisitorRight = styled.div`
  //   background: tomato;
  width: 60%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 704px;
    height: 606px;
    object-fit: contain;
  }
`;
export const V1 = styled.div`
  width: 508px;
  height: 34px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
`;
export const V2 = styled.div`
  width: 508px;
  height: 90px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #667085;
`;
export const SurveillanceComponent = styled.div`
  background: white;
  width: 100vw;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SurveillanceDivider = styled.div`
//   background: red;
  width: 85%;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SurveillanceLeft = styled.div`
//   background: blue;
  width: 55%;
  height: inherit;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 620px;
    height: 545.24px;
  }
`;
export const SurveillanceRight = styled.div`
//   background: tomato;
  width: 40%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const SurveillanceNav = styled.div`
  //   background: red;
  width: auto;
  hight: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 23px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    text-align: center;
    margin-top: 2px;
    transition: margin 0.5s;
  }

  :hover img {
    margin-left: 15px;
  }
`;
export const SurveillanceName = styled.div`
  width: 82px;
  height: 24px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #08783d;
  margin-right: 5px;
`;
export const S1 = styled.div`
  width: 508px;
  height: 38px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
`;
export const S2 = styled.div`
  width: 508px;
  height: 92px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #667085;
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