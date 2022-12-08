import styled from "styled-components";
import dotedComplete from "../../images/DotedComplete.png";
import missionImage from "../../images/MissionImage.png";
import visionImage from "../../images/VisionImage.png";
import ourStoryBg1 from "../../images/OurStoryBg1.png";

export const GetInTouch = styled.div`
  flex-wrap: wrap;
  width: inherit;
  margin-top: 80px;
  height: 600px;
  background: url(${dotedComplete}),
    linear-gradient(
      0deg,
      rgba(57, 147, 100, 0.25) 0%,
      rgba(206, 228, 216, 0.25) 77.6%
    );
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  // justify-content: space-between;
  justify-content: center;
  align-items: center;
`;

export const AboutUsContainer = styled.div`
  // background: red;
  // height: 100vh;
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const Content = styled.div`
  //   background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //   width: 909px;
  width: auto;
  //   height: 184px;
  height: auto;

  p {
    width: 703px;
    height: 56px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #667085;
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  width: 94px;
  height: 28px;
  background: #f6eaeb;
  border-radius: 97px;
  cursor: pointer;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 20px;
  transition: background 1s;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #a92f34;

  :hover {
    background: #a92f34;
    color: #f6eaeb;
  }
`;
export const Touch = styled.div`
  width: 1009px;
  height: 94px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #101828;

  span {
    color: #08783d;
  }
`;
export const AboutProcess = styled.div`
  //   background: tomato;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Mission = styled.div`
  width: 1200px;
  //   height: 300px;
  height: auto;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  margin-top: 100px;
  margin-left: 120px;
  margin-right: 120px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  background: #f6eaeb;
`;
export const Image = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 300px;
  background: url(${missionImage});
  border-right: 10px solid #a92f34;
`;

export const Content1 = styled.div`
  // background: pink;
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Cover = styled.div`
  //   background: tomato;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  position: absolute;
  width: 582px;
  height: 134px;
  margin: 83px 113px;

  p {
    width: 582px;
    height: 60px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #344054;
  }
`;
export const Title = styled.div`
  width: 213px;
  height: 44px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #a92f34;
`;
export const Vision = styled.div`
  width: 1200px;
  height: 300px;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  margin-left: 120px;
  margin-right: 120px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row-reverse;
  background: #f6eaeb;
`;

export const Image2 = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 300px;
  background: url(${visionImage});
  border-left: 0px solid #a92f34;
`;
export const History = styled.div`
  width: inherit;
  height: 1200px;
  //   height: auto;
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) 0%,
    rgba(206, 228, 216, 0.25) 77.6%
  );
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const Left = styled.div`
  color: green;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const LeftWrapper = styled.div`
  //   background: pink;
  height: auto;
  width: 100%;
`;
export const LeftTitle = styled.div`
  margin-left: 110px;
  margin-top: 108px;
  margin-bottom: 20px;
  width: 163px;
  height: 44px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.02em;
  color: #101828;
`;
export const LeftDesc = styled.div`
  margin-left: 110px;
  width: 462px;
  height: 20px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #667085;
`;
export const LeftHistory = styled.div`
  // background: grey;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 500px;
  height: 880px;
  margin-left: 110px;
  margin-top: 20px;
`;

// export const AboutContainer = styled.div``;
export const Right = styled.div`
  // background: green;
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ourStoryBg1});
  background-repeat: no-repeat;
  background-position: center center;
`;

export const CoreValue = styled.div`
  width: inherit;
  // height: 1250px;
  height: auto;
  background: #fcfcfd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Headers = styled.div`
  width: inherit;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 460px;
    height: 28px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    color: #344054;
    margin-top: 0px;
  }
`;
export const HeadTitle = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  width: 598px;
  height: 35px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #101828;
`;
export const Cards = styled.div`
  // background: red;
  // width: 1190px;
  width: 90%;
  // height: 918px;
  height: auto;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CorePartner = styled.div`
  width: inherit;
  // height: 250px;
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) 0%,
    rgba(206, 228, 216, 0.25) 77.6%
  );
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    align-self: center;
    width: 226px;
    height: 44px;
    font-family: "amster";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #1d2939;
  }
`;
export const PartnerLogo = styled.div`
  // background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 38px;
  width: 1320px;
  height: 100px;

  img {
    width: 200px;
    height: 100px;
  }
`;
// export const AboutContainer = styled.div``;
// export const AboutContainer = styled.div``;
// export const AboutContainer = styled.div``;
