import styled from "styled-components";
import dotedComplete from "../../images/DotedComplete.png";
import trusteeImage from "../../images/TrusteesBg.svg";

export const CareerPageContainer = styled.div`
  // background: red;
  // height: 100vh;
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
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
  width: 533px;
  height: 60px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #101828;

  span {
    color: #08783d;
  }
`;

export const Perks = styled.div`
  width: 100vw;
  height: 1050px;
  height: auto;
  //   background: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Information = styled.div`
  //   background: red;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 907px;
    height: 56px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #475467;
    margin-top: 20px;
    margin-bottom: 60px;
    margin-right: 0px;
    margin-left: 0px;
  }
`;

export const PerkButton = styled.div`
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
  margin-top: 90px;

  :hover {
    background: #a92f34;
    color: #f6eaeb;
  }
`;
export const PerkHeader = styled.div`
  width: 456px;
  height: 44px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #1d2939;
  margin-top: 20px;
`;

export const CardWrapper = styled.div`
  width: 90%;
  display: flex;
  //   background: green;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

// export const CardContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;

//   img {
//     width: 60px;
//     height: 60px;
//   }

//   p {
//     margin-left: 30px;
//     // margin-button: 30px;
//   }
// `;

export const ImageZone = styled.div`
  //   background: red;
  width: 100vw;
  height: 500px;
  display: flex;
`;
export const Image1 = styled.div`
  //   background: blue;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const Image2 = styled.div`
  //   background: yellow;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 49%;
  }
`;
export const Image3 = styled.div`
  //   background: pink;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const Roles = styled.div`
  //   background: red;
  background: #ffffff;
  width: 100vw;
  height: 1000px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RoleWrapper = styled.div`
  //   background: blue;
  width: 70%;
  margin-top: 110px;
  margin-bottom: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DescWrapper = styled.div`
  //   background: pink;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 0px;
    text-align: center;
    width: 900px;
    height: 73px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #475467;
  }
`;

export const DescText = styled.div`
  width: 172px;
  height: 32px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: #101828;
  margin-bottom: 30px;
`;
export const CardWrapper2 = styled.div`
  // background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  // gap: 30px;
  width: 90%;
  height: auto;
`;

export const CarouselWrapper = styled.div`
  width: 100vw;
  height: 609px;
  background: #f9fafb;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
    width: 650px;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 33.5px;
  margin-top: 32px;
  margin-bottom: 50px;
  background: #08783d;
  border-radius: 10px;
  width: 210px;
  height: 24px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`;
// export const CareerPageContainer = styled.div``;
// export const CareerPageContainer = styled.div``;
