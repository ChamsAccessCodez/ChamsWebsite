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
      Dumebi Obodo is the Managing Director of ChamsAccess Limited. His many
      years of experience in various roles have given him a strong first-hand
      perspective of the ChamsAccess business and the market's influence of
      customers’ perception of the ChamsAccess brand.<br/><br/> Under his stewardship,
      ChamsAccess has remarkably diversified its business, expanded into new
      markets and transitioned from a hardware based business to a solutions
      outfit, while delivering on revenue growth and profits. <br/><br/>Dumebi gained his
      Bachelor’s degree from Imo State University, Owerri where he studied
      Microbiology, graduating with a Second Class Upper honours division. He
      obtained an MBA from Lagos Business School (Pan Atlantic University) and
      is a certified ITIL practitioner. <br/><br/>Combining his expertise in business
      strategy and management and his knack for exploring new ideas, Dumebi
      spends his time involved in providing superior leadership to the
      ChamsAccess business as a whole.
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
