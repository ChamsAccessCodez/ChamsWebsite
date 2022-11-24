import styled from "styled-components";

export const CareerContainer = styled.div`
  width: 100vw;
  height: 1024px;
  height: auto;
  background: #ffffff;
  display: flex;
  overflow-x: hidden;
`;
export const Left = styled.div`
  background: green;
  width: 35%;
  height: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    width: 378px;
    height: 226px;
    font-family: "Roslindale Text";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-top: 110px;
    margin-top: 48px;
  }

  img {
    width: 100%;
    // width: 500px;
    height: 640px;
  }
`;
export const Right = styled.div`
  // background: green;
  //   width: 65%;
  height: inherit;
  display: flex;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const FormContainer = styled.div`
  width: 80%;
  //   background: purple;
  height: 810px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
export const FormContent = styled.div`
  //   width: inherit;
  //   background: red;
  display: flex;
  flex-direction: column;

  p {
    width: 565px;
    height: 52px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
  }
`;
export const Heading = styled.div`
  width: 565px;
  height: 36px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #1d2939;
  margin-bottom: 10px;
`;
export const FormWrapper = styled.div`
  //   background: tomato;
  display: flex;
  justify-content: flex-start;
  padding: 0px;
  width: 100%;
  height: 598px;
`;

export const Form = styled.form`
  //   background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 506px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const Name = styled.div`
  // background: red;
  display: flex;
  align-items: flex-start;
  padding: 0px;
  // width: 600px;
  width: 100%;
  height: 70px;
  justify-content: space-between;

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    height: 24px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344054;
    margin-bottom: 30px;

    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      // width: 600px;
      width: 100%;
      height: 40px;
      background: #ffffff;
      border: 1px solid #d0d5dd;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      margin-top: 6px;
      padding-top: 10px;
      padding-bottom: 10px;
      outline: none;
      color: #344054;
    }
  }
`;
export const Contact1 = styled.div`
  // background: red;
  display: flex;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: auto;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  label {
    // background: yellow;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 24px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344054;
    margin-bottom: 30px;

    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      // width: 280px;
      width: 100%;
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
      color: #344054;
      outline: none;
    }
  }
`;
export const Contact2 = styled.div`
  //   background: red;
  display: flex;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: auto;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputRow = styled.label`
  //   background: red;
  width: 100%;
  // testing some styling
  text-align: center;
  height: 30px;
  padding: 5px;
  border: 1px solid #000000;
  // border: 1px solid #d1d1d1;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;

  :active {
    border: 1px solid grey;
  }
  :hover {
    border: 1px solid grey;
  }
`;
export const RealInput = styled.input``;
export const DownloadIcon = styled.img`
  hight: 20px;
  width: 20px;
  margin-left: 90%;
  cursor: pointer;
`;
export const Message = styled.div`
  // background: yellow;
  display: flex;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: auto;
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;

  label {
    // background: red;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 6px;

    width: 100%;
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
      width: 98%;
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
  align-self: flex-start;
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
// export const RealInput = styled.div``;
// export const RequestContainer = styled.div``;
// export const RequestContainer = styled.div``;
