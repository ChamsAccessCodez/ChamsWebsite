import styled from "styled-components";
import heroBackground from "../../../images/hero-background.svg";

export const HeroWrapper = styled.div`
  position: relative;
  background: #ffffff;
  width: 100vw;
  height: 800px;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media screen and (max-width: 960px) {
    // background: yellow;
    height: auto;
    width: 100vw;
    // overflow-x: hidden;
}
  }
`;
export const Hero1 = styled.div`
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) -74.19%,
    rgba(206, 228, 216, 0.25) 60.99%
  );
  width: inherit;
  height: 85%;
  // height: 742px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 960px) {
    // background: red;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
  }
`;
export const HeroContent = styled.div`
  // background: red;
  width: 50%;
  //   width: inherit%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // margin-left: 80px;
  margin-left: 120px;
  // padding-left: 100px;

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
export const ContentHeader = styled.div`
  width: 543px;
  height: 174px;
  font-family: Roslindale Text;
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 90px;
  letter-spacing: -0.02em;
  color: #101828;
  margin-top: 80px;

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
  width: 483px;
  height: 82px;
  font-family: Komet;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #667085;
  margin-top: 20px;

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
  // background: purple;
  background-image: url(${heroBackground});
  // height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  // background-size: contain;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-right: 120px;

  img {
    width: 553.99px;
    height: 532px;
    // width: 653.99px;
    // height: 632px;
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
// export const HeroWrapper = styled.div``;
export const Hero2 = styled.div`
  width: 75%;
  //   width: 1200px;
  position: absolute;
  height: 180px;
  top: 550px;
  background: #ffffff;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 20px;
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 99px;
  padding-right: 99px;

  @media screen and (max-width: 960px) {
    // background: red;
    // display: none;
    position: relative;
    top: 0px;
    height: auto;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 0px;
    padding-right: 0px;
    border-radius: 0px;
    box-shadow: none;
  }
`;
export const Impact = styled.div`
  // background: grey;
  width: 250px;
  // width: 25%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 20px;
  text-transform: capitalize;
  cursor: pointer;
  transition: box-shadow, padding-left 1s;

  :hover {
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    border-radius: 8px;
    padding-left: 50px;
  }

  @media screen and (max-width: 960px) {
    width: 80%;
    margin-right: 0px;
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    border-radius: 8px;
    padding-left: 0px;
    margin-bottom: 30px;
    transition: transform 1s;

    :hover {
      padding-left: 0px;
      transform: scale(1.09);
    }
  }
`;
export const Imp1 = styled.div`
  font-family: Roslindale Text;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #08783d;
  margin-top: 6px;

  @media screen and (max-width: 960px) {
    margin-left: 20px;
  }
`;
export const Imp2 = styled.div`
  font-family: Roslindale Text;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin-top: 8px;

  @media screen and (max-width: 960px) {
    margin-left: 20px;
  }
`;
export const Imp3 = styled.div`
  // background-color: red;
  display: flex;
  cursor: pointer;

  p {
    display: flex;
    justify-content: center;
    color: #08783d;
  }

  span {
    display: flex;
  }
  img {
    margin-left: 10px;
    margin-top: 1.5px;
    transition: margin-left 1s;
  }
  :hover {
    img {
      margin-left: 25px;
    }
  }

  @media screen and (max-width: 960px) {
    margin-left: 20px;
  }
`;
export const Financial = styled.div`
  // background: grey;
  width: 250px;
  //   width: auto;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 20px;
  cursor: pointer;
  transition: box-shadow, padding-left 1s;

  :hover {
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    border-radius: 8px;
    padding-left: 50px;
  }

  @media screen and (max-width: 960px) {
    width: 80%;
    margin-right: 0px;
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    border-radius: 8px;
    padding-left: 0px;
    margin-bottom: 30px;
    transition: transform 1s;

    :hover {
      padding-left: 0px;
      transform: scale(1.09);
    }
  }
`;
export const Sub1 = styled.div`
  font-family: Roslindale Text;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #08783d;

  @media screen and (max-width: 960px) {
    margin-left: 20px;
  }
`;
export const Sub2 = styled.div`
  font-family: Komet;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #101828;
  text-transform: capitalize;

  @media screen and (max-width: 960px) {
    margin-left: 20px;
  }
`;
export const Sub3 = styled.div`
  font-family: Komet;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #667085;

  @media screen and (max-width: 960px) {
    margin-left: 20px;
  }
`;
export const Issues = styled.div`
  // background: grey;
  width: 250px;
  //   width: auto;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 20px;
  cursor: pointer;
  transition: box-shadow, padding-left 1s;

  :hover {
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    border-radius: 8px;
    padding-left: 50px;
  }

  @media screen and (max-width: 960px) {
    width: 80%;
    margin-right: 0px;
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    border-radius: 8px;
    padding-left: 0px;
    margin-bottom: 30px;

    transition: transform 1s;

    :hover {
      padding-left: 0px;
      transform: scale(1.09);
    }
  }
`;
export const Transactions = styled.div`
  // background: grey;
  width: 250px;
  //   width: auto;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 20px;
  cursor: pointer;
  transition: box-shadow, padding-left 1s;

  :hover {
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    border-radius: 8px;
    padding-left: 50px;
  }

  @media screen and (max-width: 960px) {
    width: 80%;
    margin-right: 0px;
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
      0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    border-radius: 8px;
    padding-left: 0px;

    transition: transform 1s;

    :hover {
      padding-left: 0px;
      transform: scale(1.09);
    }
  }
`;
// export const HeroWrapper = styled.div``;
// export const HeroWrapper = styled.div``;
// export const HeroWrapper = styled.div``;
// export const HeroWrapper = styled.div``;
