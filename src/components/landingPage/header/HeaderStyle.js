import styled from "styled-components";

export const HeaderContainer = styled.div`
  //   background: tomato;
  // background: #f1f1f1;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftNav = styled.div`
  //   background: #f1f1f1;
  margin-left: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
`;
export const RightNav = styled.div`
  //   background: green;
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  margin-right: 120px;
`;
export const Request = styled.div`
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
    background: #08783d;
    color: #ffffff;
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
  color: #667085;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  transition: width 1s;

  :hover {
    width: 180px;
    background: #08783d;
    color: #ffffff;
  }
`;
export const ImageWrapper = styled.div`
  // background: brown;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ImageLink = styled.img`
  width: 75px;
  height: 50px;
`;
export const Navs = styled.div`
  //   background: red;
  display: flex;
  //   justify-content: center;
  //   align-items: center;
  height: inherit;
  margin-left: 40px;
`;
export const ItemWrapper = styled.div`
//   background: green;
  height: inherit;

  span{
    margin-left: 10px;
  }
`;
export const Item = styled.div`
  //   background: green;
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
`;
// export const LeftNav = styled.div`
// `;
// export const LeftNav = styled.div`
// `;
