import styled from "styled-components";

export const CyberWrapper = styled.div`
  //   background: green;
  width: 100%;
  height: inherit;
  display: flex;

  @media screen and (max-width: 960px) {
    // width: 100vw;
    height: auto;
    // background: yellow;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
export const CyberImage = styled.div`
  // background: blue;
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 960px) {
    // background: yellow;
    width: 100%;
    height: auto;

    img {
      width: 350px;
      height: 350px;
    }
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

  @media screen and (max-width: 960px) {
    // background: red;
    width: 100%;
    padding-left: 0px;
    align-items: flex-start;

    img {
      margin-left: 20px;
      margin-top: 20px;
    }
  }
`;
export const CyberHeading = styled.div`
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 960px) {
    // background: yellow;
    width: 90%;
    margin-left: 20px;
  }
`;
export const CyberInfo = styled.div`
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
  margin-bottom: 20px;

  @media screen and (max-width: 960px) {
    // background: yellow;
    width: 90%;
    margin-left: 20px;
  }
`;
export const CyberFeatures = styled.div`
  // background: pink;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 960px) {
    // background: yellow;
    width: 90%;
    margin-left: 20px;
  }
`;
export const Items = styled.div`
  // background: purple;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 17px;

  @media screen and (max-width: 960px) {
    // background: yellow;
    width: 90%;
    display: flex;
    flex-direction: row;

    img {
      // background: red;
      position: relative;
      margin-bottom: 20px;
    }
  }
`;
export const ItemDesc = styled.div`
  margin-left: 10px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #667085;

  @media screen and (max-width: 960px) {
    // background: red;
  }
`;
// export const Cybersecurity = styled.div``;
export const CyberNav = styled.div`
  // background: green;
  cursor: pointer;
  display: flex;

  // p {
  //   // background: gold;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   height: 40px;
  //   color: #08783d;
  //   margin-top: 0px;
  // }

  // span {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }
  // img {
  //   margin-left: 10px;
  //   transition: margin-left 1s;
  // }
  // :hover {
  //   img {
  //     margin-left: 25px;
  //   }
  // }

  p {
    // background: gold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    color: #08783d;
    margin-top: 0px;
  }

  span {
    display: flex;
    // align-items: center;
    justify-content: flex-start;

    img {
      height: 20px;
      height: 20px;
      margin-left: 10px;
      transition: margin-left 1s;
      margin-top: 4px;

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
    }
  }

  @media screen and (max-width: 960px) {
    // background: yellow;
    width: 90%;
    margin-left: 20px;
  }
`;
// export const Cybersecurity = styled.div``;
// export const Cybersecurity = styled.div``;
// export const Cybersecurity = styled.div``;
