import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../subPages/modal/Modal";
import Modal2 from "../subPages/modal/Modal2";
import Modal3 from "../subPages/modal/Modal3";
import Modal4 from "../subPages/modal/Modal4";
import Modal5 from "../subPages/modal/Modal5";
import Modal6 from "../subPages/modal/Modal6";

const ManagementTeamCard2 = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const openModal = () => {
    setShowModal(true);
    setShowModal2(false);
    setShowModal3(false);
    setShowModal4(false);
    setShowModal5(false);
    setShowModal6(false);
  };
  const openModal2 = () => {
    setShowModal(false);
    setShowModal2(true);
    setShowModal3(false);
    setShowModal4(false);
    setShowModal5(false);
    setShowModal6(false);
  };
  const openModal3 = () => {
    setShowModal(false);
    setShowModal2(false);
    setShowModal3(true);
    setShowModal4(false);
    setShowModal5(false);
    setShowModal6(false);
  };
  const openModal4 = () => {
    setShowModal(false);
    setShowModal2(false);
    setShowModal3(false);
    setShowModal4(true);
    setShowModal5(false);
    setShowModal6(false);
  };
  const openModal5 = () => {
    setShowModal(false);
    setShowModal2(false);
    setShowModal3(false);
    setShowModal4(false);
    setShowModal5(true);
    setShowModal6(false);
  };
  const openModal6 = () => {
    setShowModal(false);
    setShowModal2(false);
    setShowModal3(false);
    setShowModal4(false);
    setShowModal5(false);
    setShowModal6(true);
  };
  return (
    <CardWrapper>
      <div>
        {showModal ? (
          <Modal setShowModal={setShowModal} />
        ) : showModal2 ? (
          <Modal2 setShowModal2={setShowModal2} />
        ) : showModal3 ? (
          <Modal3 setShowModal3={setShowModal3} />
        ) : showModal4 ? (
          <Modal4 setShowModal4={setShowModal4} />
        ) : showModal5 ? (
          <Modal5 setShowModal5={setShowModal5} />
        ) : showModal6 ? (
          <Modal6 setShowModal6={setShowModal6} />
        ) : null}
      </div>
      <img src={props.cardImage} alt="business Integrity" />
      <CardInfo id="info">
        <CardHeading>{props.heading}</CardHeading>
        <Position>{props.post}</Position>
        <p id="para">{props.description}</p>
        <ManagementNav
          onClick={() => {
            if (props.heading === "Sir Ayobola Abiola") {
              openModal2();
            } else if (props.heading === "Dumebi Obodo") {
              openModal();
            } else if (props.heading === "Mr Kayode Ayeni") {
              openModal3();
            } else if (props.heading === "Lady Chikwue Ochiaga") {
              openModal4();
            } else if (props.heading === "Adetomi Imoteda") {
              openModal5();
            } else if (props.heading === "Gavin Young") {
              openModal6();
            } else {
              console.log("Nothing to show");
            }
          }}
        >
          {/* <ManagementNav onClick={showModal ? ({openModal}) : showModal2 ? ({openModal2}) : (null)}> */}
          <P1>{props.fullProfile}</P1>
          <img src={props.arrowIcon} alt="sourceMgt" />
        </ManagementNav>
      </CardInfo>
    </CardWrapper>
  );
};

export default ManagementTeamCard2;

const CardWrapper = styled.div`
  position: relative;
  // background: yellow;
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
    // background-color: green;
    // width: 90%;
    width: 300px;
    height: 55%;
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

    // white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
  font-family: "amster";
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
