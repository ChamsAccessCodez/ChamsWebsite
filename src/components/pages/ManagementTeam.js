import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ManagementTeamContainer,
  GetInTouch,
  Content,
  Contact,
  Touch,
  BoardOfDirectors,
  Caption,
  ManagementCardWrapper,
  MgtTeam,
} from "./ManagementTeamStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import ManagementTeamCard from "./ManagementTeamCard";
import ManagementTeam2 from "./ManagementTeam2";
import obodo from "../../images/ManagementObodo.png";
import olayemi from "../../images/ManagementOlayemi.png";
import gbenga from "../../images/ManagementGbenga.png";
import dami from "../../images/ManagementDami.png";
import uche from "../../images/ManagementUche.png";
import seun from "../../images/ManagementSeun.png";
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
      <Header />
      <GetInTouch>
        <Content>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1500}
          >
            <Contact>Leadership</Contact>
          </Link>

          <Touch>
            Meet the amazing people that leads
            <span> ChamsAccess</span>
          </Touch>
          <p>Our Leadership at Board and Management Levels</p>
        </Content>
      </GetInTouch>
      <BoardOfDirectors>
        <Caption>Board of directors</Caption>
        <ManagementCardWrapper>
          <ManagementTeam2 />
        </ManagementCardWrapper>
      </BoardOfDirectors>
      <MgtTeam>
        <Caption>Management team</Caption>
        <ManagementCardWrapper>
          <ManagementTeamCard
            cardImage={obodo}
            heading="Dumebi Obodo"
            post="MD/CEO"
            description="Dumebi Obodo is the Managing Director of ChamsAccess Limited. His many
            years of experience in various roles have given him a strong first-hand
            perspective of the ChamsAccess business and the market's influence of
            customers’ perception of the ChamsAccess brand."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
            mgtPage="/dumebi"
          />
          <ManagementTeamCard
            cardImage={olayemi}
            heading="Olayemi Odufeso"
            post="Group Head, Corporate Services & Planning"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud vvnnnamet. Exercitation veniam consequat sunt nostrud amet."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
            mgtPage="/olayemi"
          />
          <ManagementTeamCard
            cardImage={gbenga}
            heading="Gbenga"
            post="Head, Emerging Markets and New Sectors"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud vvnnnamet. Exercitation veniam consequat sunt nostrud amet."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
            mgtPage="/gbenga"
          />
          <ManagementTeamCard
            cardImage={dami}
            heading="Dami Adegbulu"
            post="Head, Sales"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud vvnnnamet. Exercitation veniam consequat sunt nostrud amet."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
            mgtPage="/dami"
          />
          <ManagementTeamCard
            cardImage={uche}
            heading="Uche Okorie"
            post="Head, Business Operations Support"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud vvnnnamet. Exercitation veniam consequat sunt nostrud amet."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
            mgtPage="/uche"
          />
          <ManagementTeamCard
            cardImage={seun}
            heading="Seun Olayinka"
            post="Head, Retail Business"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud vvnnnamet. Exercitation veniam consequat sunt nostrud amet."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
            mgtPage="/seun"
          />
        </ManagementCardWrapper>
      </MgtTeam>
      <Footer />
    </ManagementTeamContainer>
  );
};

export default ManagementTeam;
