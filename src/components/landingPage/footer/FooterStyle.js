import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: tomato;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  width: 1440px;
  // height: 182px;
  background: #f9fafb;
`;
export const Wrapper = styled.div`
  //   background: red;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  //   flex-wrap: wrap;
`;
export const Desc = styled.div`
  //   background: green;
  margin-left: 40px;
  width: 60%;
`;
export const Desc1 = styled.div`
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 16px;
`;
export const Desc2 = styled.div`
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #667085;
`;
export const Form = styled.form`
  //   background: purple;
  margin-right: 40px;
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const InputWrapper = styled.div`
  background: blue;
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
`;
export const Input = styled.input`
  background: red;
  width: 80%;
  height: 40px;
  background: #ffffff;
  border: none;
  cursor: pointer;

  :focus {
    margin-left: 8px;
    outline: none;
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
`;
export const FooterMain = styled.div`
  background: #ffffff;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterContainer = styled.div`
  //   background: green;
  width: 90%;
  margin: 64px 80px;
  display: flex;
  justify-content: space-between;
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

    :hover{
        color: #000000;
    }
  }
`;
export const Head = styled.p`
  // width: 20%;
  font-family: "Komet";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #101828;
  margin-top: 0px;
  margin-bottom: 16px;
`;
export const Copywrite = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px 32px;
width: 1440px;
height: 90px;
background: #08783D;

font-family: 'Komet';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #EBF5F0;
`;
// export const FooterWrapper = styled.div``;
