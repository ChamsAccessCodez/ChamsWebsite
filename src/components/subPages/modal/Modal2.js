import React, { useRef } from "react";
import styled from "styled-components";
import ayobolaModal from "../../../images/ayobolaModal.png";
import cancelIcon from "../../../images/CancelIcon.svg";

const Modal2 = ({ setShowModal2 }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal2(false);
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
          <img src={ayobolaModal} alt="sourceFile" />
          <ModalContent>
            <Tops>
              <Lefts>
                <Name>Sir Abiola Ayobola</Name>
                <Position>Chairman of Board</Position>
              </Lefts>
              <Rights onClick={() => setShowModal2(false)}>
                <img src={cancelIcon} alt="cancel" />
              </Rights>
            </Tops>
            <Buttoms>
              Sir Ayobola is an economics, finance, and banking expert with
              three decades of banking experience spanning investment,
              commercial, and development banking in leading financial
              institutions. He is currently the Founder & CEO of Fullhouse
              Advisory Partners, an investment and financial advisory services
              firm. <br />
              <br />
              In addition to his current role, he is presently on a national
              assignment as a member of the Technical Working Group set up by
              the Federal Government of Nigeria to prepare the new National
              Development Plan (Agenda 2050), the successor plan to Vision 2020.{" "}
              <br />
              <br />
              Before this, he had been an analyst for International Merchant
              Bank (a subsidiary of First National Bank of Chicago), the Senior
              Vice President of First City Monument Bank, the Managing Director/
              Country CEO of United Bank for Africa Tanzania, and an Executive
              Director for Federal Mortgage Bank of Nigeria at different times.{" "}
              <br />
              <br />
              In the banking industry, Sir Ayobola Abiola is regarded as a man
              of strong ethical values. Under his watch as the founding CEO of
              UBA Tanzania, the bank earned consecutive outstanding audit
              ratings without a single regulatory infraction throughout his
              tenure. Ayobola sits on the Boards of ChamsSwitch Limited,
              Capstone Development (West Africa), and The Country Beach &
              Residency. <br />
              <br />
              He holds BSc (Second Class Upper) and MSc degrees in Economics
              from Ekiti State University and Obafemi Awolowo University
              respectively as well as an MBA (Distinction) from Bangor
              University Business School, Wales. <br />
              <br />
              He is a member of the Chartered Banker Institute United Kingdom
              (MCBI), an Associate Member of the Chartered Institute of Bankers
              of Nigeria ( ACIB) as well as a Certified Risk Manager ( CRM) and
              Fellow of the Chartered Institute of Taxation of Nigeria (FCTI).
              He has attended advanced leadership trainings at leading
              institutions including Harvard Business School and Said Business
              School, Oxford University. <br />
              <br />
              He is a Knight of Saint James, African Church Nigeria, and a
              traditional title holder of Otunba Tayese of Omu Aran land.
            </Buttoms>
          </ModalContent>
        </ModalWrapper>
      </ModalContainer>
    </div>
  );
};

export default Modal2;

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
