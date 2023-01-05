import React, { useEffect } from "react";
import styled from "styled-components";
import MgtTeamProps from "./MgtTeamProps";
import uche from "../../images/Uche.png";

const Uche = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  var desc = (
    <div>
      Focused on improving the Business and Operations Unit of the ChamsAccess
      brand, Uche Okorie spent over 13 years honing his skills in Operations
      Management, Solutions Business, Projects, and Service Delivery. He holds a
      B.Eng. in Electrical/Electronic Engineering from the Federal University of
      Technology Owerri and an MBA from Ladoke Akintola University of
      Technology, Oyo State both in Nigeria in 2000 and 2012 respectively. <br /><br />He
      started his postgraduate career with V-Mobile Nigeria (Now Airtel Nigeria)
      in 2003 as a Network Controller. Uche later joined Multi-links Telkom and
      was the Manager in charge of Business Solutions and Pre-Sales until his
      appointment at ChamsAccess as Head, Business Operations and Support. He is
      a Certified COREN Engineer and a member of the Nigeria Society of
      Engineers (NSE) and the Institute of Electrical and Electronics Engineers
      (IEEE).
    </div>
  );
  return (
    <DumebiContainer>
      <MgtTeamProps
        mgtName="Uche Okorie"
        mgtPosition="Head, Business Operations Support"
        mgtPhoto={uche}
        mgtDescName="Uche Okorie"
        mgtDescPosition="Head, Business Operations Support"
        mgtDesc={desc}
      />
    </DumebiContainer>
  );
};

export default Uche;

const DumebiContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const DumebiContainer = styled.div``;
// const DumebiContainer = styled.div``;
