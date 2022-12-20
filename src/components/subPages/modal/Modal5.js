import React, { useRef } from "react";
import styled from "styled-components";
import adetomiModal from "../../../images/adetomiModal.png";
import cancelIcon from "../../../images/CancelIcon.svg";

const Modal = ({ setShowModal5 }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal5(false);
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.7)",
        zIndex: "999",
        // animation: "animate 0.9s",
      }}
    >
      <ModalContainer>
        <ModalWrapper>
          <img src={adetomiModal} alt="sourceFile" />
          <ModalContent>
            <Tops>
              <Lefts>
                <Name>Adetomi Imoteda</Name>
                <Position>Director</Position>
              </Lefts>
              <Rights onClick={() => setShowModal5(false)}>
                <img src={cancelIcon} alt="cancel" />
              </Rights>
            </Tops>
            <Buttoms>
              Adetomi Imoteda Aladekomo is a Cordon Bleu-trained chef. She is
              the host of two TV shows – Heels in the Kitchen and Urban Kitchen,
              as well as the Head Chef at Heels in the Kitchen. She
              conceptualized and created Heels in the Kitchen while exercising
              her vast creative abilities in the make-up and entertainment
              industries. She has valuable experience behind the scenes of
              television and movie production. She graduated from Waterloo
              University with a Bachelor’s degree in social development.
            </Buttoms>
          </ModalContent>
        </ModalWrapper>
      </ModalContainer>
    </div>
  );
};

export default Modal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 50px;
  position: absolute;
  width: 987px;
  height: 609px;
  background: #ffffff;
  // background: red;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 987px;
  height: 609px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // background: rgba(0, 0, 0, 0.7);

  z-index: 999;
  // animation: animate 0.9s;

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
  height: 98%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 50px;
  overflow-x: auto;
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
  // background-color: red;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Name = styled.div`
  width: 100%;
  height: 32px;
  font-family: "Amster";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #101828;
`;
const Position = styled.div`
  // background: blue;
  width: inherit;
  height: 24px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1d2939;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1d2939;
`;
