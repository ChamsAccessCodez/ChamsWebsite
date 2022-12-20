import React, { useRef } from "react";
import styled from "styled-components";
import kayodeModal from "../../../images/kayodeModal.png";
import cancelIcon from "../../../images/CancelIcon.svg";

const Modal3 = ({ setShowModal3 }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal3(false);
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
          <img src={kayodeModal} alt="sourceFile" />
          <ModalContent>
            <Tops>
              <Lefts>
                <Name>Mr. Kayode Ayeni</Name>
                <Position>Director</Position>
              </Lefts>
              <Rights onClick={() => setShowModal3(false)}>
                <img src={cancelIcon} alt="cancel" />
              </Rights>
            </Tops>
            <Buttoms>
              Mr. Kayode Ayeni is a serial entrepreneur and an investor whose
              business interests span several industries. He is currently the
              Chief Executive officer of Zillenium—an integrated, end-to-end
              property Development Company. <br />
              <br />
              Kayode also has interests in Oil and Gas and is a Director and
              co-founder of Crestar Integrated Natural Resources Limited. <br />
              <br />A Nigerian exploration and production company that has
              acquired Shell Petroleum Development Company’s interests in OML
              25. He is also a Director with James Bay Energy Nigeria Limited.
              He is also the founder of 5K Gas and Power which specializes in
              the provision of clean energy solutions to housing estates and
              renewable energy solutions in general. He sits on the boards of
              Oakwood Park Hotel, ChamsAccess limited, and AfriDev capital
              partners, amongst others. <br />
              <br />
              In his past professional life, he was the pioneer Managing
              Director of First Funds, the then Venture Capital/Private Equity
              arm of the First Bank Group, now FBN Capital Ltd. Earlier in his
              career, he was a World Bank/USAID adviser to the federal
              government privatization program at the Bureau of public
              enterprises. <br />
              <br />
              He devotes his spare time to mentoring would-be entrepreneurs and
              has seeded numerous ventures as an angel investor. He is currently
              building a not-for-profit organization to support small and medium
              enterprises in their fundraising efforts. Mr. Ayeni is an aspiring
              golfer and keen swimmer and is also an enthusiast of motorsport.
              He is married with kids.
            </Buttoms>
          </ModalContent>
        </ModalWrapper>
      </ModalContainer>
    </div>
  );
};

export default Modal3;

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
