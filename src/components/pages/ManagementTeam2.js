import React, { useEffect } from "react";
import {
  ManagementTeamContainer,
  BoardOfDirectors,
  ManagementCardWrapper,
} from "./ManagementTeam2Style.js";
import ManagementTeamCard2 from "./ManagementTeamCard2";
import ayobola from "../../images/ManagementAyobola.png";
import obodo from "../../images/ManagementObodo.png";
import kayode from "../../images/ManagementKayode.png";
import chikwue from "../../images/ManagementChikwue.png";
import adetomi from "../../images/ManagementAdetomi.png";
import gavin from "../../images/ManagementGavin.png";
import mgtArrow from "../../images/ManagementArrow.svg";

const ManagementTeam = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  return (
    <ManagementTeamContainer>
      <BoardOfDirectors>
        <ManagementCardWrapper>
          <ManagementTeamCard2
            cardImage={ayobola}
            heading="Sir Ayobola Abiola"
            post="Chairman of Board"
            description="Sir Ayobola is an economics, finance, and banking expert with
            three decades of banking experience spanning investment,
            commercial, and development banking in leading financial
            institutions. He is currently the Founder & CEO of Fullhouse
            Advisory Partners, an investment and financial advisory services
            firm."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
          />
          <ManagementTeamCard2
            cardImage={obodo}
            heading="Dumebi Obodo"
            post="MD/CEO"
            description="Dumebi Obodo is the Managing Director of ChamsAccess Limited. His
            many years of experience in various roles have given him a strong
            first-hand perspective of the ChamsAccess business and the
            market's influence of customers’ perception of the ChamsAccess
            brand."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
          />
          <ManagementTeamCard2
            cardImage={kayode}
            heading="Mr Kayode Ayeni"
            post="Director"
            description="Mr. Kayode Ayeni is a serial entrepreneur and an investor whose
            business interests span several industries. He is currently the
            Chief Executive officer of Zillenium—an integrated, end-to-end
            property Development Company. "
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
          />
          <ManagementTeamCard2
            cardImage={chikwue}
            heading="Lady Chikwue Ochiaga"
            post="Director"
            description="Lady Chikwue Ochiaga holds a B.L from Ahmadu Bello University, an
            LLB (Hons.), and is a lawyer by profession. She started her career
            as a Counsel in Onyeabo Obi and Co, until she established her own
            law Firm. She is the Principal Counsel, at T. Chikwue Ochiagha &
            Co, a position she still currently holds. "
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
            // mgtPage="/pc"
          />
          <ManagementTeamCard2
            cardImage={adetomi}
            heading="Adetomi Imoteda"
            post="Director"
            description="Adetomi Imoteda Aladekomo is a Cordon Bleu-trained chef. She is
            the host of two TV shows – Heels in the Kitchen and Urban Kitchen,
            as well as the Head Chef at Heels in the Kitchen. She
            conceptualized and created Heels in the Kitchen while exercising
            her vast creative abilities in the make-up and entertainment
            industries."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
          />
          <ManagementTeamCard2
            cardImage={gavin}
            heading="Gavin Young"
            post="Director"
            description="Gavin is a seasoned Fintech professional with a proven track
            record in managing companies, subsidiaries of listed companies,
            and geographical areas (Africa) with a specific focus on all areas
            of Electronic Banking and Fintech; Issuing, acquiring, switching,
            etc."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
          />
        </ManagementCardWrapper>
      </BoardOfDirectors>
    </ManagementTeamContainer>
  );
};

export default ManagementTeam;
