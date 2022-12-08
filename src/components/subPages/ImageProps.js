import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImageProps = ({
  mgtImageSmall,
  mgtNameSmall,
  mgtPositionSmall,
  personalNav,
}) => {
  return (
    <ImgContainer>
      <Link
        to={personalNav}
        style={{
          textDecoration: "none",
        }}
      >
        <img src={mgtImageSmall} alt="cont" />
        <Cont>
          <Na>{mgtNameSmall}</Na>
          <Nb>{mgtPositionSmall}</Nb>
        </Cont>
      </Link>
    </ImgContainer>
  );
};

export default ImageProps;

const ImgContainer = styled.div`
  position: relative;
  //   background: red;
  width: 174.5px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.5s;

  img {
    width: 174.5px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

  :hover {
    transform: scale(0.9);
  }
`;
const Cont = styled.div`
  position: absolute;
  width: 175px;
  height: 45px;
  left: 0px;
  top: 155px;
  background: #a92f34;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
`;
const Na = styled.div`
  width: 100%;
  height: 16px;
  font-family: "Amster";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #f6eaeb;
  margin-top: 5px;
  margin-left: 10px;
  margin-bottom: 1px;
`;
const Nb = styled.div`
  width: 100%;
  height: 10px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 7px;
  line-height: 10px;
  color: #f6eaeb;
  margin-left: 10px;
`;
// const ImgContainer =styled.div``;
// const ImgContainer =styled.div``;
// const ImgContainer =styled.div``;
// const ImgContainer =styled.div``;
// const ImgContainer =styled.div``;
