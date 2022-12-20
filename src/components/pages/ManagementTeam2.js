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
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud vvnnnamet. Exercitation veniam consequat sunt nostrud amet."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
          />
          <ManagementTeamCard2
            cardImage={obodo}
            heading="Dumebi Obodo"
            post="MD/CEO"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud vvnnnamet. Exercitation veniam consequat sunt nostrud amet."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
          />
          <ManagementTeamCard2
            cardImage={kayode}
            heading="Mr Kayode Ayeni"
            post="Director"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud vvnnnamet. Exercitation veniam consequat sunt nostrud amet."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
          />
          <ManagementTeamCard2
            cardImage={chikwue}
            heading="Lady Chikwue Ochiaga"
            post="Director"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud vvnnnamet. Exercitation veniam consequat sunt nostrud amet."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
            // mgtPage="/pc"
          />
          <ManagementTeamCard2
            cardImage={adetomi}
            heading="Adetomi Imoteda"
            post="Director"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud vvnnnamet. Exercitation veniam consequat sunt nostrud amet."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
          />
          <ManagementTeamCard2
            cardImage={gavin}
            heading="Gavin Young"
            post="Director"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud vvnnnamet. Exercitation veniam consequat sunt nostrud amet."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
          />
        </ManagementCardWrapper>
      </BoardOfDirectors>
    </ManagementTeamContainer>
  );
};

export default ManagementTeam;
