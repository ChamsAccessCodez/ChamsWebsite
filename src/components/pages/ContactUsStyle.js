import styled from "styled-components";
import contactInfoBg from "../../images/Contact-Info-bg.png";
import dotedComplete from "../../images/DotedComplete.png";

export const ContactUs = styled.div`
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

  img {
    width: 400px;
    height: 394.38px;
  }
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
    width: 497px;
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
  width: 278px;
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
export const FormContainer = styled.div`
  // background-color: green;
  width: inherit;
  height: auto;
  // height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormWrapper = styled.div`
  box-sizing: border-box;
  width: 800px;
  height: 760px;
  // height: auto;
  background: #fcfcfd;
  border: 1px solid #eaecf0;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 16px;
  margin: 100px 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  p {
    width: 483px;
    height: 24px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #667085;
    margin-bottom: 49px;
  }
`;
export const FormHead = styled.div`
  width: 376px;
  height: 29px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #1d2939;
  margin-top: 66px;
  margin-bottom: 20px;
`;
export const Form = styled.form`
  // background: tomato;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 600px;
  height: 506px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 100px;
  margin-right: 100px;
`;
export const Name = styled.div`
  // background: red;
  display: flex;
  align-items: flex-start;
  padding: 0px;
  // width: 600px;
  width: inherit;
  height: 70px;

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: inherit;
    height: 24px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344054;

    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      // width: 600px;
      width: 99%;
      height: 40px;
      background: #ffffff;
      border: 1px solid #d0d5dd;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      margin-top: 6px;
      padding-top: 10px;
      padding-bottom: 10px;
      outline: none;
    }
  }
`;
export const Contact1 = styled.div`
  // background: red;
  display: flex;
  align-items: flex-start;
  padding: 0px;
  width: 600px;
  height: 70px;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  label {
    // background: yellow;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: inherit;
    height: 24px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344054;

    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      // width: 280px;
      width: 98%;
      height: 40px;
      background: #ffffff;
      border: 1px solid #d0d5dd;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      margin-top: 6px;
      padding-top: 10px;
      padding-bottom: 10px;
      font-family: "Komet";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #667085;
      outline: none;
    }
  }
`;
export const Message = styled.div`
  // background: yellow;
  display: flex;
  align-items: flex-start;
  padding: 0px;
  width: 600px;
  height: auto;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;

  label {
    // background: red;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 6px;

    width: inherit;
    height: inherit;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344054;

    textarea {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 14px;
      width: 95%;
      height: 190px;
      background: #ffffff;
      border: 1px solid #d0d5dd;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      resize: none;
      margin-top: 6px;
      font-family: "Komet";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      color: #667085;
      outline: none;

      ::placeholder {
        padding-left: 10px;
      }
    }
  }
`;
export const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 28px;
  width: 200px;
  height: 50px;
  background: #08783d;
  border-radius: 10px;
  align-self: center;
  cursor: pointer;
  transition: transform 1.5s;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;

  :hover {
    transform: scale(0.85);
  }
`;
// export const FormWrapper = styled.div`
// `;
// export const FormWrapper = styled.div`
// `;
export const ContactInfo = styled.div`
  width: inherit;
  height: 440px;
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) 0%,
    rgba(206, 228, 216, 0.25) 77.6%
  );
  background-image: url(${contactInfoBg});
  background-repeat: no-repeat;
  background-position: center bottom;
  // background-size: inherit 777.84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InnerWrapper = styled.div`
  // background: red;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  width: 1018px;
  height: 270px;
  margin: 84px 211px;
`;
// export const AboutContainer = styled.div`
// `;
// export const AboutContainer = styled.div`
// `;
// export const AboutContainer = styled.div`
// `;
