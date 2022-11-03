import styled from "styled-components";

export const AccessWrapper = styled.div`
  background: #ffffff;
  height: auto;
  width: inherit;
  display: flex;
  flex-direction: column;
`;
export const AccessTop = styled.div`
  // background: tomato;
  width: inherit;
  height: auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const OurProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  width: 128px;
  height: 28px;
  background: #f6eaeb;
  border-radius: 97px;
  margin-top: 60px;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  text-transform: capitalize;
  color: #a92f34;
`;
export const Think = styled.div`
  width: 846px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #101828;
  margin-top: 20px;
`;
export const We = styled.div`
  width: 520px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #667085;
  margin-top: 20px;
`;
export const AccessMiddle = styled.div`
//   background: red;
  width: inherit;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;
export const Item = styled.div`
  // background: tomato;
  width: 250px;
  height: 50px;
  display: flex;
  flex-direction: column;
    justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top: 4px solid ${({bg})=>bg ? "#08783D" : "null"};

//   :before {
//     content: "";
//     background: #08783d;
//     width: 40%;
//     height: 5px;
//     opacity: 0;
//     transition: all 650ms;
//     top: 1200px;
//   }
//   :hover {
//     :before {
//       width: 100%;
//       opacity: 1;
//       cursor: pointer;
//       //   margin-top: 50px;
//     }
//   }

  span {
    // margin-top: 10px;
  }
`;
export const Navs = styled.div`
background: #ebf5f0;
width: 90%;
// width: 1250px;
height: 50px;
display: flex;
align-self: center;
margin-top: 4px;
margin-bottom: 4px;
`;
export const Contents = styled.div`
// background: red;
width: 90%;
height: 580px;
align-self: center;
`;
// export const AccessWrapper = styled.div``;
