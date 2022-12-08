import styled from "styled-components";

export const FooterWrapper = styled.div`
  // background: tomato;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: hidden;

  @media screen and (max-width: 960px) {
  }
`;
export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  width: 1440px;
  width: inherit;
  // height: 182px;
  background: #f9fafb;

  @media screen and (max-width: 960px) {
    width: inherit;
    // background: red;
    display: flex;
  }
`;
export const Wrapper = styled.div`
  //   background: red;
  width: 90%;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 960px) {
    width: inherit;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Desc = styled.div`
  //   background: green;
  margin-left: 40px;
  width: 60%;

  @media screen and (max-width: 960px) {
    width: 100%;
    // background: green;
    margin-left: 0px;
  }
`;
export const Desc1 = styled.div`
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 16px;

  @media screen and (max-width: 960px) {
    margin-left: 20px;
  }
`;
export const Desc2 = styled.div`
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #667085;

  @media screen and (max-width: 960px) {
    margin-left: 20px;
  }
`;
export const Form = styled.form`
  // background: purple;
  margin-right: 40px;
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 960px) {
    // background: purple;
    margin-top: 20px;
    margin-right: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
  }
`;
export const InputWrapper = styled.div`
  // background: blue;
  width: 80%;
  display: flex;
  justify-content: flex-start;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  margin-right: 7px;

  img {
    width: 20px;
    height: 20px;
    margin-left: 14px;
  }

  @media screen and (max-width: 960px) {
    margin-right: 0px;
    width: 90%;
  }
`;
export const Input = styled.input`
  background: red;
  width: 80%;
  height: 40px;
  background: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  :focus {
    margin-left: 8px;
    outline: none;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;
export const Button = styled.button`
  background: green;
  // width: 140px;
  width: 20%;
  height: 40px;
  background: #08783d;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-left: 7px;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  @media screen and (max-width: 960px) {
    margin-top: 20px;
    width: 90%;
    margin-left: 0px;
  }
`;
export const FooterMain = styled.div`
  background: #ffffff;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    // background: red;
    width: 100vw;
  }
`;
export const FooterContainer = styled.div`
  //   background: green;
  width: 90%;
  margin: 64px 80px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    // background: green;
    width: 100%;
    margin: 0px 0px 0px;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const ChamsAccess = styled.div`
  //   background: tomato;
  //   width: 40%;
  width: 304px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    width: 120px;
    height: 80px;
    margin-bottom: 35px;
  }

  p {
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    margin-top: 3px;
    margin-bottom: 3px;
  }

  @media screen and (max-width: 960px) {
    display: none;
`;
export const ChamsAccess2 = styled.div`
  display: none;
  // background: tomato;

  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;

    img {
      width: 120px;
      height: 80px;
      margin-bottom: 35px;
      margin-left: 0px;
      // margin-top: 20px;
    }

    p {
      width: 100%;
      font-family: "Komet";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #667085;
      margin-top: 3px;
      margin-bottom: 3px;
      margin-left: 0px;
      text-align: center;
    }
  }
`;
export const SocialMedia = styled.div`
  //   background: red;
  width: 168px;
  height: 24px;
  margin-top: 35px;
  display: flex;
  justify-content: space-between;

  img {
    height: 24px;
    width: 24px;
    cursor: pointer;
    // transition: height, width 1s;

    :hover {
      //   height: 28px;
      //   width: 28px;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-left: 0px;

    img {
      margin-left: 0px;
    }
  }
`;
export const Navs = styled.div`
  // width: 20%;
  //   background: green;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: start;

  p {
    font-family: "Komet";
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
    margin-top: 0px;
    cursor: pointer;

    :hover {
      color: #000000;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;

    p {
      // margin-left: 20px;
    }
  }
`;
export const Head = styled.div`
  // width: 20%;
  font-family: "Komet";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #101828;
  margin-top: 0px;
  margin-bottom: 16px;

  @media screen and (max-width: 960px) {
    margin-top: 40px;
    margin-left: 20px;
  }
`;
export const Copywrite = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 32px;
  width: inherit;
  height: 90px;
  background: #08783d;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ebf5f0;

  @media screen and (max-width: 960px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
    padding: 0px 0px;
  }
`;
// export const FooterWrapper = styled.div``;
