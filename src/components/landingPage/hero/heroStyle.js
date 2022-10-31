import styled from "styled-components";
import heroBackground from "../../../images/hero-background.svg";

export const HeroWrapper = styled.div`
  //   background: green;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Hero1 = styled.div`
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) -74.19%,
    rgba(206, 228, 216, 0.25) 60.99%
  );
  width: inherit;
  height: 742px;
  display: flex;
  justify-content: center;
`;
export const HeroContent = styled.div`
//   background: red;
  width: 40%;
  //   width: inherit%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  margin-left: 120px;
`;
export const ContentHeader = styled.div`
  width: 543px;
  height: 174px;
  ont-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 90px;
  letter-spacing: -0.02em;
  color: #101828;

  span {
    color: #08783d;
    text-transform: capitalize;
  }
`;
export const ContentDescription = styled.div`
  width: 483px;
  height: 82px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #667085;
  margin-top: 20px;
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
  font-family: "Komet";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  transition: width 1s;

  :hover {
    width: 210px;
  }
`;
export const HeroImage = styled.div`
  //   background: purple;
  background-image: url(${heroBackground});
  width: 45%;
  height: inherit;
  display: flex;
  align-items: center;

  img{
    
  }
`;
// export const HeroWrapper = styled.div``;
export const Hero2 = styled.div``;
// export const HeroWrapper = styled.div``;
// export const HeroWrapper = styled.div``;
