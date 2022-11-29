import styled from "styled-components";

export const HeaderContainer = styled.div`
  // background: tomato;
  background: #f1f1f1;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;

  @media screen and (max-width: 960px) {
    // background: tomato;
    width: 100vw;
  }
`;
export const LeftNav = styled.div`
  // background: #f1f1f1;
  // background: red;
  // margin-left: 80px;
  margin-left: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;

  @media screen and (max-width: 960px) {
    justify-content: flex-start;
    margin-left: 40px;
  }
`;
export const RightNav = styled.div`
  // background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  // margin-left: 80px;
  margin-right: 120px;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-right: 0px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
export const Request = styled.div`
  // background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  //   background: blue;
  margin-right: 10px;
  cursor: pointer;
  padding: 8px;
  width: 160px;
  height: 40px;
  color: #667085;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  transition: width 1s;

  :hover {
    width: 180px;
    color: #000000;
  }

  @media screen and (max-width: 960px) {
    margin-right: 0px;
    margin-bottom: 20px;
    width: 80vw;

    :hover {
      outline: none;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
  }
`;
export const Support = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  //   background: blue;
  margin-left: 10px;
  cursor: pointer;
  padding: 8px;
  width: 160px;
  height: 40px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  background: #08783d;
  color: #ffffff;
  transition: width 1s;

  :hover {
    width: 180px;
  }

  @media screen and (max-width: 960px) {
    margin-right: 0px;
    margin-bottom: 0px;
    width: 80vw;
  }
`;
export const ImageWrapper = styled.div`
  // background: brown;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    // background: red;
  }
`;
export const ImageLink = styled.img`
  width: 75px;
  height: 50px;
`;
export const Navs = styled.div`
  // background: red;
  display: flex;
  //   justify-content: center;
  //   align-items: center;
  height: inherit;
  width: auto;
  margin-left: 0px;

  @media screen and (max-width: 960px) {
    // background: red;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ toggle }) => (toggle ? 0 : "-100%")};
    transition: all 0.5s ease;
    background: #ffffff;
    z-index: 999;
  }
`;
export const BurgerMenu = styled.div`
  display: none;
  // display: flex;

  @media screen and (max-width: 960px) {
    // background: green;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const ItemWrapper = styled.div`
  // background: green;
  display: flex;
  flex-direction: column;
  width: inherit;
  height: auto;

  // span {
  //   margin-left: 10px;
  // }

  @media screen and (max-width: 960px) {
    // background: green;
    justify-content: center;
    align-items: flex-end;
  }
`;
export const ItemWrapper2 = styled.div`
  // background: green;
  display: flex;
  flex-direction: column;
  width: inherit;
  height: auto;

  // span {
  //   margin-left: 10px;
  // }

  @media screen and (max-width: 960px) {
    // background: green;
    justify-content: center;
    align-items: flex-end;
  }
`;
export const Text = styled.div`
  // background: tomato;
  display: flex;
  height: inherit;
  width: inherit;

  span {
    margin-left: 10px;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;

    span {
      margin-top: 10px;
    }
  }
`;
export const Drop = styled.div`
  height: auto;
  width: auto;
  // visibility: ${({ hd }) => (hd ? "visible" : "hidden")};
`;
export const Item = styled.div`
  // background: green;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  //   justify-content: center;
  align-items: center;
  //   height: inherit;
  height: 60%;
  margin-left: 20px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #667085;
  cursor: pointer;
  margin-top: 25px;

  :after {
    content: "";
    background: linear-gradient(289.11deg, #04487f 7.4%, #a0c559 117.27%);
    width: 40%;
    height: 3px;
    opacity: 0;
    transition: all 650ms;
    align-self: bottom;
  }
  :hover {
    :after {
      width: 100%;
      opacity: 1;
      cursor: pointer;
      //   margin-top: 50px;
    }
  }
  @media screen and (max-width: 960px) {
    // background: blue;
    height: 20%;
    width: 90%;
    justify-content: center;
    align-self: center;
    margin-left: 0px;

    :after {
      content: "";
      background: none;
      width: 0%;
      height: 0px;
      opacity: 0;
      transition: none;
      align-self: none;
    }

    :hover {
      outline: none;
      border-radius: 5px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
  }
`;
// export const LeftNav = styled.div`
// `;
// export const LeftNav = styled.div`
// `;
