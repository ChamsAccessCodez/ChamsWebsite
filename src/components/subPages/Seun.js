import React, { useEffect } from "react";
import styled from "styled-components";
import MgtTeamProps from "./MgtTeamProps";
import seun from "../../images/Seun.png";

const Seun = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  var desc = (
    <div>
      Seun Olayinka is a Sales and Marketing expert with over 12 years of
      experience in Sales, Marketing, and retail management in the consumer
      electronics and mobile industry. Vastly experienced in brand marketing,
      product management, Retail management, Brand merchandising, sales
      supervision, and team management. Over the years he has developed a sound
      knowledge of various smartphone markets and locations, especially in Lagos
      and other South West / South East regions of Nigeria. <br/><br/>Prior to joining
      ChamsAccess Ltd as a business retail manager, He was the head of marketing
      and Team lead of Apple iStore Nigeria, he was also the head of sales
      Mobile in Africa (Xiaomi). He was also the City Manager for LG Mobile
      southwest region and team lead of Huawei technologies. <br/><br/>Seun Olayinka holds
      a Bachelor’s degree in Statistics from the University of Ibadan Oyo state.
      Seun is a certified Apple sales expert (S.E.E.D) He also has certification
      in Advance Microsoft Excel and Social media marketing (Social CRM). He has
      also attended several sales, technology & management training programs.
    </div>
  );
  return (
    <DumebiContainer>
      <MgtTeamProps
        mgtName="Seun Olayinka"
        mgtPosition="Head, Retail Business"
        mgtPhoto={seun}
        mgtDescName="Seun Olayinka"
        mgtDescPosition="Head, Retail Business"
        mgtDesc={desc}
      />
    </DumebiContainer>
  );
};

export default Seun;

const DumebiContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const DumebiContainer = styled.div``;
// const DumebiContainer = styled.div``;
