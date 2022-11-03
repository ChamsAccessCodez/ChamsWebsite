import styled from "styled-components";

export const PaymentWrapper = styled.div`
  //   background: green;
  width: 100%;
  height: inherit;
  display: flex;
`;
export const PaymentContent = styled.div`
    // background: tomato;
  width: 50%;
  height: inherit;
  height: 680px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //   align-items: space-around;
  padding-left: 50px;
`;
export const Solutions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  img {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;
export const Two = styled.div`
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 20px;
`;
export const Three = styled.div`
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
  width: 578px;
  margin-bottom: 20px;
`;
export const Four = styled.div`
  //   background: green;
  cursor: pointer;
  display: flex;

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
      margin-top: 22px;

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
`;
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Financial = styled.div`
  //   background: green;
  width: inherit;
  display: flex;
  justify-content: flex-start;
  padding: 20px;

  img {
    width: 48px;
    height: 48px;
    margin-right: 20px;
  }
`;
export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const DescHead = styled.div`
  font-family: "Komet";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #1d2939;
`;
export const DescBody = styled.div`
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #475467;
`;
export const Self = styled.div`
  //   background: red;
  width: inherit;
  display: flex;
  justify-content: flex-start;
  padding: 20px;

  img {
    width: 48px;
    height: 48px;
    margin-right: 20px;
  }
`;
export const Instant = styled.div`
  //   background: red;
  width: inherit;
  display: flex;
  justify-content: flex-start;
  padding: 20px;

  img {
    width: 48px;
    height: 48px;
    margin-right: 20px;
  }
`;
export const PaymentImage = styled.div`
  // background: blue;
  width: 50%;
  height: inherit;
  height: 680px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
  }
`;

// export const BiometricWrapper = styled.div``;
// export const BiometricWrapper = styled.div``;
