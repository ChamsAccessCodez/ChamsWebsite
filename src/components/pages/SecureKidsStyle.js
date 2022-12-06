import styled from "styled-components";
import trusteeImage from "../../images/TrusteesBg.svg";

export const SecureKidsContainer = styled.div`
  background: #ffffff;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ChildSecurityContainer = styled.div`
  //   background: tomato;
  width: 100vw;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
export const ChildWrapper = styled.div`
  //   background: green;
  width: 85%;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Left1 = styled.div`
  //   background: red;
  width: 40%;
`;
export const Left2 = styled.div`
  //   background: blue;
  width: 60%;
`;
export const K1 = styled.div`
  width: 490px;
  height: 120px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.02em;
  color: #101828;
  margin: 0px;

  span {
    color: #08783d;
  }
`;
export const K2 = styled.div`
  width: 490px;
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
export const ChildButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 187px;
  height: 44px;
  background: #08783d;
  border-radius: 8px;
  cursor: pointer;
  transition: width 0.5s;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  :hover {
    width: 202px;
  }
`;
export const KidSchool = styled.div`
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
export const KidSchoolWrapper = styled.div`
  //   background: red;
  width: 85%;
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
    width: 530px;
    height: 530px;
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
    width: 539px;
    height: 164px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #475467;
    margin-top: 0px;
    margin-bottom: 26px;
  }
`;
export const W21 = styled.div`
  width: 537px;
  height: 37px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 26px;
`;
export const KidsOption = styled.div`
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
  align-items: center;
  height: 32px;
  margin-bottom: 21px;

  img {
    margin-right: 16px;
    width: 32px;
    height: 32px;
  }

  p {
    width: 100%;
    height: 28px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #475467;
    margin: 0px;
  }
`;
export const SecureCard = styled.div`
  width: 100vw;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    width: 554px;
    height: 37px;
    font-family: "Roslindale Text";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: #101828;
    margin-top: 0px;
    margin-bottom: 50px;
  }
`;
export const SecureCardWrapper = styled.div`
  // background: red;
  width: 85%;
  height: auto;
  display: flex;
  justify-content: space-between;
  //   justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`;
// export const SecureKidsContainer = styled.div``;
// export const SecureKidsContainer = styled.div``;
// export const SecureKidsContainer = styled.div``;

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
  width: 900px;
  height: 113px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #08783d;
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
// export const SecureKidsContainer = styled.div``;
// export const SecureKidsContainer = styled.div``;
// export const SecureKidsContainer = styled.div``;
// export const SecureKidsContainer = styled.div``;
// export const SecureKidsContainer = styled.div``;
