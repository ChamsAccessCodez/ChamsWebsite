import React, { useEffect } from "react";
import styled from "styled-components";
import MgtTeamProps from "./MgtTeamProps";
import gbenga from "../../images/Gbenga.png";

const Gbenga = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  var desc = (
    <div>
      Gbenga is the Divisional Head of Emerging Market & New Sectors of
      ChamsAccess Limited where he focuses on new products & solutions and
      delivers them into Emerging and New Sectors in order to grow the Company.
      Prior to his current employment, he was Head of ISP, Govt & Education for
      MainOne Cable Company. Where he later became the Project Manager for
      INFRACO Lagos for MainOne. Gbenga has closed many large ticket deals and
      traveled around the country and West Africa for Business. <br/><br/>Gbenga is an
      accomplished sales Management Strategist and Solution-Oriented Manager
      with over Twenty years of ICT experience, Gbenga thrives in a challenging,
      fast-paced environment where his performance directly impacts the BOTTOM
      LINE. <br/><br/>Gbenga has attended several Sales, Technology, and Management
      programs organized by Miller Heiman, Dale Carnegie, Human Capital
      Partners, and many others both in Nigeria and abroad. <br/><br/>Gbenga is an alumnus
      of the Lagos Business School (Advance Management Program). Certified Agile
      and Emotional Intelligence practitioner. <br/><br/>Gbenga gained his BSc from the
      prestigious University of Lagos, Nigeria, where he studied Computer
      Science. He is a member of the computer professionals of Nigeria (CPN) and
      Nigerian computer society (NCS).
    </div>
  );
  return (
    <DumebiContainer>
      <MgtTeamProps
        mgtName="Gbenga Oshinoiki"
        mgtPosition="Head, Emerging Markets and New Sectors"
        mgtPhoto={gbenga}
        mgtDescName="Gbenga Oshinoiki"
        mgtDescPosition="Head, Emerging Markets and New Sectors"
        mgtDesc={desc}
      />
    </DumebiContainer>
  );
};

export default Gbenga;

const DumebiContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const DumebiContainer = styled.div``;
// const DumebiContainer = styled.div``;
