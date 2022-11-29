import styled from "styled-components";

export const BiometricContainer = styled.div`
  //   background: red;
  width: 1440px;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const BiometricWrapper = styled.div`
  //   background: blue;
  width: 100%;
  height: 700px;
  // height: auto; //this will be auto on mobile devices.
  display: flex;
  flex-direction: column;
`;
export const BiometricBg = styled.div`
  justify-self: flex-end;
  align-self: flex-end;
`;
export const BiometricTransparentCard = styled.div`
  position: absolute;
  width: 700px;
  height: 400px;
  left: 120px;
  top: 150px;
  background: rgba(243, 243, 243, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 8px;

  p {
    margin-top: 20px;
    width: 603px;
    height: 56px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #475467;
    margin-left: 56px;
    margin-right: 41px;
    margin-bottom: 20px;
  }

  span {
    color: #08783d;
  }
`;
export const Deliver = styled.div`
  //   background: red;
  width: 603px;
  height: 180px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #1d2939;
  margin-top: 40px;
  margin-left: 56px;
  margin-right: 41px;
`;
export const BiometricButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 8px;
  width: 183px;
  height: 44px;
  background: #08783d;
  border-radius: 8px;
  margin-left: 56px;
  margin-right: 41px;
  cursor: pointer;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  transition: transform 1s;

  :hover {
    transform: scale(0.96);
    font-weight: bold;
  }
`;
export const Story1 = styled.div`
  width: 100%;
  height: 900px;
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) 0%,
    rgba(206, 228, 216, 0.25) 77.6%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StoryDescription = styled.div`
  width: 977px;
  height: 114px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #101828;
  margin-top: 113px;
  margin-bottom: 50px;
`;
export const ImageAndText = styled.div`
  //   background: pink;
  width: 90%;
  height: 510px;
  height: 90%;
  display: flex;
`;
export const Left = styled.div`
  background: red;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 664px;
    height: 510px;
    // object-fit: cover;
    self-align: center;
  }
`;
export const Right = styled.div`
  //   background: green;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    width: 539px;
    height: 247px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #475467;
    margin-top: 0px;
    margin-left: 80px;
  }
`;
export const Left2 = styled.div`
  //   background: red;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 664px;
    height: 510px;
  }
`;
export const Right2 = styled.div`
  //   background: green;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    width: 500px;
    height: 247px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #475467;
    margin-top: 0px;
  }
`;
export const Story2 = styled.div`
  //   background: green;
  width: 100vw;
  height: 800px;
  // background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Right2Head = styled.div`
  width: 450px;
  height: 70px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
`;
export const Right2Navs = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 23px;
`;
export const Right2Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  //   width: 99px;
  height: 28px;
  background: #ebf5f0;
  border-radius: 97px;
  cursor: pointer;
  font-weight: normal;
  margin-right: 10px;
  transition: transform 1s;

  width: auto;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #08783d;

  :hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`;
export const Story3 = styled.div`
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
export const Left3 = styled.div`
  //   background: red;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 664px;
    height: 510px;
  }
`;
export const Right3 = styled.div`
  // background: green;
  width: 50%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    width: 500px;
    height: 247px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #475467;
    margin-top: 0px;
    margin-left: 80px;
  }
`;
export const Right3Navs = styled.div`
  //   background: blue;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 23px;
  margin-left: 80px;
`;
export const Right3Head = styled.div`
  width: 450px;
  height: 70px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
  margin-left: 10px;
  margin-left: 80px;
`;
export const Right3Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  //   width: 99px;
  height: 28px;
  background: #f6eaeb;
  border-radius: 97px;
  cursor: pointer;
  font-weight: normal;
  margin-right: 10px;
  transition: transform 1s;

  width: auto;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #a92f34;

  :hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`;
export const Story4 = styled.div`
  width: 100vw;
  height: 800px;
  // background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Right4Head = styled.div`
  //   background: green;
  width: 450px;
  height: 70px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 23px;
`;
export const Right4Navs = styled.div`
  //   background: blue;
  display: flex;
  width: 100%;
  margin-bottom: 23px;
`;
export const Right4Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  //   width: 99px;
  height: 28px;
  background: #ebf5f0;
  border-radius: 97px;
  cursor: pointer;
  font-weight: normal;
  margin-right: 10px;
  transition: transform 1s;

  width: auto;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #08783d;

  :hover {
    transform: scale(1.1);
    font-weight: bold;
  }
`;
export const Left4 = styled.div`
  //   background: red;
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 664px;
    height: 510px;
  }
`;
export const Right4 = styled.div`
  //   background: green;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    width: 539px;
    height: 247px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #475467;
    margin-top: 0px;
  }
`;
export const IndustrialApplication = styled.div`
  width: 100vw;
  height: auto;
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) 0%,
    rgba(206, 228, 216, 0.25) 77.6%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;

  p {
    margin-top: 107px;
    margin-bottom: 50px;
    width: 554px;
    height: 37px;
    font-family: "Roslindale Text";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: #101828;
  }
`;
export const IndustrialCardWrapper = styled.div`
  //   background: red;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;
// export const BiometricContainer = styled.div``;
// export const BiometricContainer = styled.div``;
// export const BiometricContainer = styled.div``;
