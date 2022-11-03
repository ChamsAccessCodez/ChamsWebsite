import styled from "styled-components";

export const CyberWrapper = styled.div`
  //   background: green;
  width: 100%;
  height: inherit;
  height: 500px;
  display: flex;
`;
export const CyberImage = styled.div`
  // background: blue;
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
  }
`;
export const CyberContent = styled.div`
  //   background: tomato;
  width: 50%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  //   padding-top: 50px;
`;
export const CyberHeading = styled.div`
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const CyberInfo = styled.div`
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
  margin-bottom: 20px;
  width: 594px;
`;
export const CyberFeatures = styled.div`
  //   background: pink;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CyberNav = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
width: auto;
height: 45px;
background: #F79009;
box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
border-radius: 10px;
cursor: pointer;

  p {
    // background: gold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    color: #08783d;
    margin-top: 10px;

    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }

  span {
    display: flex;
    justify-content: flex-start;

    img {
      height: 20px;
      height: 20px;
      margin-left: 10px;
      transition: margin-left 1s;
      margin-top: 8px;

      align-self: center;
    }
  }
  :hover {
    p {
      span {
        img {
          margin-left: 25px;
        }
      }

`;
// export const Cybersecurity = styled.div``;
// export const Cybersecurity = styled.div``;
// export const Cybersecurity = styled.div``;
