import React, { useRef } from "react";
import styled from "styled-components";
import dumebiModal from "../../../images/dumebiModal.png";
import cancelIcon from "../../../images/CancelIcon.svg";

const Modal = ({ setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return (
    <ModalContainer ref={modalRef} onClick={closeModal}>
      <ModalWrapper>
        <img src={dumebiModal} alt="sourceFile" />
        <ModalContent>
          <Tops>
            <Lefts>
              <Name>Dumebi Obodo</Name>
              <Position>MD/CEO</Position>
            </Lefts>
            <Rights onClick={() => setShowModal(false)}>
              <img src={cancelIcon} alt="cancel" />
            </Rights>
          </Tops>
          <Buttoms>
            Dumebi Obodo is the Managing Director of ChamsAccess Limited. His
            many years of experience in various roles have given him a strong
            first-hand perspective of the ChamsAccess business and the market's
            influence of customers’ perception of the ChamsAccess brand. <br />
            <br />
            Under his stewardship, ChamsAccess has remarkably diversified its
            business, expanded into new markets and transitioned from a hardware
            based business to a solutions outfit, while delivering on revenue
            growth and profits. <br />
            <br />
            Dumebi gained his Bachelor’s degree from Imo State University,
            Owerri where he studied Microbiology, graduating with a Second Class
            Upper honours division. He obtained an MBA from Lagos Business
            School (Pan Atlantic University) and is a certified ITIL
            practitioner. <br />
            <br />
            Combining his expertise in business strategy and management and his
            knack for exploring new ideas, Dumebi spends his time involved in
            providing superior leadership to the ChamsAccess business as a
            whole.
          </Buttoms>
        </ModalContent>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 50px;
  position: relative;
  width: 987px;
  height: 609px;
  background: #ffffff;
  //   background: red;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  // position: fixed;
  top: 0%;
  left: -100%;
  bottom: 0%;
  right: 100%;
  width: 987px;
  height: 609px;
  //   height: 100vh;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   background: rgba(0, 0, 0, 0.7);

  z-index: 999;
  animation: animate 0.9s;

  @keyframes animate {
    from {
      transform: scale(0.5);
    }
    to {
      transform: scale(1);
    }
  }
`;
const ModalWrapper = styled.div`
  //   background: yellow;
  width: 98%;
  height: 98%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 50px;
`;
const Tops = styled.div`
  //   background: red;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Buttoms = styled.div`
  width: 100%;
  height: 429px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1d2939;
  margin-top: 22px;
`;
const Rights = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Lefts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Name = styled.div`
  width: 168px;
  height: 32px;
  font-family: "Amster";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #101828;
`;
const Position = styled.div`
  width: 66px;
  height: 24px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1d2939;
  width: 66px;
  height: 24px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1d2939;
`;
// const ModalContainer = styled.div``;
// const ModalContainer = styled.div``;
// const ModalContainer = styled.div``;
