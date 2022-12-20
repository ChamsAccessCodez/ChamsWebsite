import React, { useRef } from "react";
import styled from "styled-components";
import chikweModal from "../../../images/chikweModal.png";
import cancelIcon from "../../../images/CancelIcon.svg";

const Modal = ({ setShowModal4 }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal4(false);
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
          <img src={chikweModal} alt="sourceFile" />
          <ModalContent>
            <Tops>
              <Lefts>
                <Name>Lady Chikwue Ochiaga</Name>
                <Position>Director</Position>
              </Lefts>
              <Rights onClick={() => setShowModal4(false)}>
                <img src={cancelIcon} alt="cancel" />
              </Rights>
            </Tops>
            <Buttoms>
              Lady Chikwue Ochiaga holds a B.L from Ahmadu Bello University, an
              LLB (Hons.), and is a lawyer by profession. She started her career
              as a Counsel in Onyeabo Obi and Co, until she established her own
              law Firm. <br/><br/>She is the Principal Counsel, at T. Chikwue Ochiagha &
              Co, a position she still currently holds. Her career spans civil
              litigation, Commercial Law Practice, and Public Law. She is a
              member and a secretary of the Nigerian Bar Association,
              International Federation of Women Lawyers (FIDA), the captain, 8th
              Mainland Company of Brigade Nigeria, Secretary of Church of
              Nigeria (Anglican Communion) Trust Fund, Registrar, Diocese of
              Lagos Mainland, Member of the Lagos Anglican Schools Management
              Board and a Director, JUNOT Construction Limited.
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
