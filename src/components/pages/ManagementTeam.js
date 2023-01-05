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
            description="Olayemi Odufeso is the Group Head, Corporate Services & Planning for
            ChamsAccess Limited. She has over 18 years’ experience in Transaction
            Management, Leadership, People Management, Strategy, Finance Management,
            Performance Management, Administration & Corporate Planning."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
            mgtPage="/olayemi"
          />
          <ManagementTeamCard
            cardImage={gbenga}
            heading="Gbenga"
            post="Head, Emerging Markets and New Sectors"
            description="Gbenga is the Divisional Head of Emerging Market & New Sectors of
            ChamsAccess Limited where he focuses on new products & solutions and
            delivers them into Emerging and New Sectors in order to grow the Company.
            Prior to his current employment, he was Head of ISP, Govt & Education for
            MainOne Cable Company."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
            mgtPage="/gbenga"
          />
          <ManagementTeamCard
            cardImage={dami}
            heading="Dami Adegbulu"
            post="Head, Sales"
            description="Damilola Adegbuyi is an accomplished business manager with a strong
            entrepreneurial background and 15 years of experience in Telcos and the
            sales & marketing of technology solutions. His wealth of experience and
            exposure has made him a force to be reckoned with, it extends to strategic
            marketing and being at the leading edge of increasing sales margin."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
            mgtPage="/dami"
          />
          <ManagementTeamCard
            cardImage={uche}
            heading="Uche Okorie"
            post="Head, Business Operations Support"
            description="Focused on improving the Business and Operations Unit of the ChamsAccess
            brand, Uche Okorie spent over 13 years honing his skills in Operations
            Management, Solutions Business, Projects, and Service Delivery. He holds a
            B.Eng. in Electrical/Electronic Engineering from the Federal University of
            Technology Owerri and an MBA from Ladoke Akintola University of
            Technology, Oyo State both in Nigeria in 2000 and 2012 respectively."
            fullProfile="View full profile"
            arrowIcon={mgtArrow}
            mgtPage="/uche"
          />
          <ManagementTeamCard
            cardImage={seun}
            heading="Seun Olayinka"
            post="Head, Retail Business"
            description="Seun Olayinka is a Sales and Marketing expert with over 12 years of
            experience in Sales, Marketing, and retail management in the consumer
            electronics and mobile industry. Vastly experienced in brand marketing,
            product management, Retail management, Brand merchandising, sales
            supervision, and team management. Over the years he has developed a sound
            knowledge of various smartphone markets and locations, especially in Lagos
            and other South West / South East regions of Nigeria."
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
