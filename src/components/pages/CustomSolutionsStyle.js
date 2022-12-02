import styled from "styled-components";
import customBg from "../../images/CustomBg.png";
import trusteeImage from "../../images/TrusteesBg.svg";

export const CustomSolutionsContainer = styled.div`
  background: #ffffff;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Customizable = styled.div`
  //   background: red;
  width: 100vw;
  height: 780px;
  display: flex;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
`;
export const CustomBanner = styled.div`
  background: green;
  width: 1200px;
  height: 600px;
  background: url(${customBg}), linear-gradient(45deg, #043c1f 0%, #08783d 100%);
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 986px;
  height: 260px; ;
`;
export const P1 = styled.p`
  margin-top: 0px;
  width: 900px;
  height: 120px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ebf5f0;
`;
export const P2 = styled.p`
  margin-top: 0px;
  width: 900px;
  height: 56px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #ebf5f0;
`;
export const CustomButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 187px;
  height: 44px;
  background: #ebf5f0;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  transition: background 1s;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #08783d;

  :hover {
    background: linear-gradient(
      0deg,
      rgba(57, 147, 100, 0.25) 0%,
      rgba(206, 228, 216, 0.25) 77.6%
    );
    color: #ffffff;
  }
`;
export const OurTeam = styled.div`
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
export const TeamWrapper = styled.div`
  //   background: red;
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: space-between;
`;
export const Left1 = styled.div`
  //   background: pink;
  width: 45%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 529px;
    height: 554px;
  }
`;
export const Right1 = styled.div`
  //   background: pink;
  width: 45%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    width: 500px;
    height: 189px;
    font-family: "Roslindale Text";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
    margin: 0px;
  }
`;
export const BuildingSolution = styled.div`
  width: 100vw;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    width: 1232px;
    height: 40px;
    font-family: "Roslindale Text";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: #101828;
    // margin-top: 80px;
  }
`;
export const BuildingCardWrapper = styled.div`
  width: 85%;
  height: 749px;
//   background: tomato;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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

//   p {
//     width: 800px;
//     height: 55px;
//     font-family: "Komet";
//     font-style: normal;
//     font-weight: 500;
//     font-size: 18px;
//     line-height: 28px;
//     text-align: center;
//     color: #475467;
//     margin-top: 0px;
//   }

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
// export const CustomSolutionsContainer = styled.div``;
// export const CustomSolutionsContainer = styled.div``;
// export const CustomSolutionsContainer = styled.div``;
// export const CustomSolutionsContainer = styled.div``;
