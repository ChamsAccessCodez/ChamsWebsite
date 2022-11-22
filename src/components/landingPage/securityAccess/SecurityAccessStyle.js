import styled from "styled-components";

export const AccessWrapper = styled.div`
  background: #ffffff;
  height: auto;
  width: inherit;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    // background: red;
    width: 100vw;
  }
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

  @media screen and (max-width: 960px) {
    width: inherit;
  }
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
  cursor: pointer;
  transition: background, color 2s;

  :hover {
    background: #a92f34;
    color: #f6eaeb;
  }

  @media screen and (max-width: 960px) {
  }
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

  @media screen and (max-width: 960px) {
    width: inherit;
  }
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

  @media screen and (max-width: 960px) {
    width: inherit;
  }
`;
export const AccessMiddle = styled.div`
  //   background: red;
  width: inherit;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  @media screen and (max-width: 960px) {
    // background: yellow;
    width: inherit;
  }
`;
export const Item = styled.div`
  // background: tomato;
  width: 250px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top: 4px solid ${({ bg }) => (bg ? "#08783D" : "null")};
  color: ${({ cl }) => (cl ? "#08783d" : "#84BC9E")};

  // height: 20px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  // color: #08783d;
  // color: #84BC9E;

  @media screen and (max-width: 960px) {
    // background: yellow;
    width: inherit;
    border-top: 0px solid ${({ bg }) => (bg ? "#08783D" : "null")};
    border-left: 6px solid ${({ bg }) => (bg ? "#08783D" : "null")};
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

  @media screen and (max-width: 960px) {
    // background: yellow;
    width: inherit;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const Contents = styled.div`
  // background: red;
  width: 90%;
  height: 680px;
  align-self: center;

  @media screen and (max-width: 960px) {
    // background: yellow;
    width: 100vw;
    height: auto;
  }
`;
// export const AccessWrapper = styled.div``;
