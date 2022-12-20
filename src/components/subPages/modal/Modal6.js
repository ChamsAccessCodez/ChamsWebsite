import React, { useRef } from "react";
import styled from "styled-components";
import gavinModal from "../../../images/gavinModal.png";
import cancelIcon from "../../../images/CancelIcon.svg";

const Modal = ({ setShowModal6 }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal6(false);
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
          <img src={gavinModal} alt="sourceFile" />
          <ModalContent>
            <Tops>
              <Lefts>
                <Name>Mr. Gavin Young</Name>
                <Position>Director</Position>
              </Lefts>
              <Rights onClick={() => setShowModal6(false)}>
                <img src={cancelIcon} alt="cancel" />
              </Rights>
            </Tops>
            <Buttoms>
              Gavin is a seasoned Fintech professional with a proven track
              record in managing companies, subsidiaries of listed companies,
              and geographical areas (Africa) with a specific focus on all areas
              of Electronic Banking and Fintech; Issuing, acquiring, switching,
              etc. Primary areas of specialization include; payment switching
              and processing, developing and managing payment card schemes,
              terminal and other electronic infrastructure management,
              transaction processing, transaction acquiring systems, and mobile
              payments. <br />
              <br />
              His career has entailed; 20 years at First National Bank of South
              Africa where he implemented most electronic banking and card
              systems and infrastructure; 7 years at Visa as Country Manager,
              sub-Saharan Africa (South Africa, UK, and Nigeria) where, after
              developing the Visa CEMEA strategy for Nigeria, volunteered to
              reside in Nigeria in order to work with all payment entities to
              implement Visa cards and payments across all banks in Nigeria.{" "}
              <br />
              <br />
              He also grew the number of Visa issuing banks in sub-Saharan
              Africa, from 22 to over 120 in 4 years. In 2007 he joined UBA as
              Senior General Manager of Cards and issued over 5 million Visa
              payment cards in under 12 months. Since 2009, he has worked (on a
              full-time and part-time basis) with the Chams PLC Group of
              companies as MD of ChamsSwitch and Deputy MD of Chams Mobile,
              amongst other roles. <br />
              <br />
              He is entrepreneurial and skilled at building organizations,
              partnerships, and alliances, formulating business strategies, and
              negotiating business agreements. <br />
              <br />
              Gavin was the Group Managing Director of Chams Plc. Chams PLC has
              a strong brand and extensive history, having delivered integrated
              identity management and intelligent business solutions for over 30
              years. Today, Chams continues to deliver innovative solutions
              which enrich and improve lives.
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
