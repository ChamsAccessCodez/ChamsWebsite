import React, { useEffect } from "react";
import styled from "styled-components";
import MgtTeamProps from "./MgtTeamProps";
import dami from "../../images/Dami.png";

const Dami = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  var desc = (
    <div>
      Damilola Adegbuyi is an accomplished business manager with a strong
      entrepreneurial background and 15 years of experience in Telcos and the
      sales & marketing of technology solutions. His wealth of experience and
      exposure has made him a force to be reckoned with, it extends to strategic
      marketing and being at the leading edge of increasing sales margin.
      <br />
      <br />
      Damilola has surpassed every ChamsAccess sales goal by 95%, which has put
      ChamsAccess as the leading provider of digital solutions in Nigeria. He
      has an undergraduate degree in Bio-Chemistry but his love for business and
      networking pushed him to get a Master’s degree in Business Administration
      from the University of Lagos, Nigeria. He has accumulated several
      technology, sales, and marketing expertise from internationally recognized
      programs and has become a certified Emotional Intelligence and Agile
      practitioner. <br />
      <br />
      Prior to joining ChamsAccess, he was the Retail Sales Manager at Estream
      Networks, Channel Distribution, and Enterprise Solution Manager at
      Specranet, and a pioneered sales team member with Smile Networks. <br />
      <br />
      When he is not brainstorming on some sales strategies, Damilola can be
      found in the gym working on his fitness or hanging out with friends.
    </div>
  );
  return (
    <DumebiContainer>
      <MgtTeamProps
        mgtName="Damilola Adegbuyi"
        mgtPosition="Head, Sales"
        mgtPhoto={dami}
        mgtDescName="Damilola Adegbuyi"
        mgtDescPosition="Head, Sales"
        mgtDesc={desc}
      />
    </DumebiContainer>
  );
};

export default Dami;

const DumebiContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const DumebiContainer = styled.div``;
// const DumebiContainer = styled.div``;
