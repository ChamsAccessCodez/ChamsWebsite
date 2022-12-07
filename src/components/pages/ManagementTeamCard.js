import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ManagementTeamCard = (props) => {
  return (
    <CardWrapper>
      <img src={props.cardImage} alt="business Integrity" />
      <CardInfo id="info">
        <CardHeading>{props.heading}</CardHeading>
        <Position>{props.post}</Position>
        <p id="para">{props.description}</p>
        <Link
          to={props.mgtPage}
          style={{
            textDecoration: "none",
          }}
        >
          <ManagementNav>
            <P1>{props.fullProfile}</P1>
            <img src={props.arrowIcon} alt="sourceMgt" />
          </ManagementNav>
        </Link>
      </CardInfo>
    </CardWrapper>
  );
};

export default ManagementTeamCard;

const CardWrapper = styled.div`
  position: relative;
  //   background: yellow;
  width: 350px;
  height: 400px;
  border: 1px solid #eaecf0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  :hover #info {
    height: 330px;
    opacity: 0.85;
  }
  :hover #para {
    visibility: visible;
    // overflow-y: hidden;
  }

  @media screen and (max-width: 960px) {
    width: 95%;
    margin-bottom: 20px;
  }
`;
const CardInfo = styled.div`
  position: absolute;
  width: 350px;
  //   width: 100%;
  height: 110px;
  background: #a92f34;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  transition: height 1s;

  // :hover {
  //   height: 240px;
  //   opacity: 0.95;
  //   p {
  //     visibility: visible;
  //   }
  // }

  p {
    // width: 90%;
    width: 300px;
    font-family: "Komet";
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    margin-top: 20px;
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 10px;
    visibility: hidden;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    p {
      // margin-left: 0px;
      // margin-right: 0px;
    }
  }
`;
const CardHeading = styled.div`
  //   width: 80%;
  width: 280px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  opacity: 1;
  z-index: 999;

  @media screen and (max-width: 960px) {
  }
`;
const Position = styled.div`
  width: auto;
  height: 20px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #f6eaeb;
  margin-bottom: 22px;
  margin-left: 24px;
`;

const ManagementNav = styled.div`
  // background: blue;
  width: 161px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  margin-left: 24px;
  margin-top: 20px;

  img {
    width: 20px;
    height: 20px;
    display: flex;
    align-self: center;
    // display: none;
  }
`;
const P1 = styled.div`
  margin-top: 0px;
  margin-right: 8px;
  width: auto;
  height: 20px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  // line-height: 20px;
  color: #f6eaeb;
  display: flex;
`;
// const ManagementNav = styled.div``;
// const ManagementNav = styled.div``;
// const ManagementNav = styled.div``;
// const ManagementNav = styled.div``;
// const ManagementNav = styled.div``;
