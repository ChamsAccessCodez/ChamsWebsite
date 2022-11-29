import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-scroll";
import { Link as NavLink } from "react-router-dom";
import {
  CareerPageContainer,
  GetInTouch,
  Content,
  Contact,
  Touch,
  Perks,
  Information,
  CardWrapper,
  PerkButton,
  PerkHeader,
  ImageZone,
  Image1,
  Image2,
  Image3,
  Roles,
  RoleWrapper,
  DescWrapper,
  CardWrapper2,
  DescText,
  CarouselWrapper,
  TextDiv,
  Ready,
  RequestButton,
} from "./CareersPageStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import CareersPageCard from "./CareersPageCard";
import PerkWork from "../../images/perkSolution.svg";
import PerkGrowth from "../../images/PerkGrowth.svg";
import PerkPaid from "../../images/PerkPaid.svg";
import PerkFlexible from "../../images/PerkFlexible.svg";
import PerkHealth from "../../images/PerkHealth.svg";
import PerkSoffisticated from "../../images/PerkSoffisticated.svg";
import CasEngineers from "../../images/CasEngineers.png";
import BosEngineer from "../../images/BosEngineer.png";
import Hr from "../../images/HrTeam.png";
import FinancialTeam from "../../images/FinancialTeam.png";
import RoleCard from "./RoleCard";
import RoleClock from "../../images/RoleClock.png";
import CarouselCard from "./CarouselCard";
import apostrophe from "../../images/Staffs/apostrophe.png";

const CareersPage = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
    AOS.init();
  }, []);

  return (
    <CareerPageContainer>
      <Header />
      <GetInTouch>
        <Content>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1500}
          >
            <Contact>Career</Contact>
          </Link>

          <Touch>
            Ready for <span>Possibilities?</span>
          </Touch>
          <p>
            Come join us on this exciting journey in simplifying technologies
            and create custom solutions to complex problems.
          </p>
        </Content>
      </GetInTouch>
      <Perks>
        <Information>
          <PerkButton>Perks</PerkButton>
          <PerkHeader>Why you should join us</PerkHeader>
          <p>
            We provide our people with the support, tools and environment needed
            to thrive. We are an equal opportunity employer and value diversity.
          </p>
        </Information>
        <CardWrapper>
          <CareersPageCard
            sampleImage={PerkWork}
            cardHeading="Do work that matters"
            Description="We are a company on a mission,  your expertise has the potential to make a huge difference and impact the world."
          />
          <CareersPageCard
            sampleImage={PerkGrowth}
            cardHeading="Career growth"
            Description="We provide limitless access to learning and development opportunities toward visible professional growth."
          />
          <CareersPageCard
            sampleImage={PerkPaid}
            cardHeading="Paid Annual Leave"
            Description="All team members have 20 days of paid annual leave and are warmly encouraged to use them."
          />
          <CareersPageCard
            sampleImage={PerkFlexible}
            cardHeading="Flexible Work Policy"
            Description="We encourage both on site and remote work for employees, breeding higher work-life satisfaction."
          />
          <CareersPageCard
            sampleImage={PerkHealth}
            cardHeading="Health Insurance"
            Description="We provide a comprehensive health insurance to cover the medical needs of you and your dependents."
          />
          <CareersPageCard
            sampleImage={PerkSoffisticated}
            cardHeading="Sophisticated work tool"
            Description="We provide our people with best-in-class work tools and data allowance to ensure work remains unhindered."
          />
        </CardWrapper>
      </Perks>
      <ImageZone>
        <Image1>
          <img src={CasEngineers} alt="engineers" />
        </Image1>
        <Image2>
          <img src={Hr} alt="engineers" />
          <img src={FinancialTeam} alt="engineers" />
        </Image2>
        <Image3>
          <img src={CasEngineers} alt="engineers" />
        </Image3>
      </ImageZone>
      <Roles>
        <RoleWrapper>
          <DescWrapper>
            <DescText>Availabe Roles</DescText>
            <p>
              We're constantly on the lookout for fresh talent. We still want to
              hear from you even if you don't currently see a role that applies
              to you! Please email careers@chamsaccess.com with your name, bio,
              and a brief description of the type of position you are interested
              in.
            </p>
          </DescWrapper>
          <CardWrapper2>
            <RoleCard
              roleTitle="Role Tittle"
              roleDescription="Lörem ipsum nåst san antin. Best opredade, och pektig morotsmobb i
          lude. Huktig oliga setuck lalohet telingar."
              cardImage={RoleClock}
              workSite="Fill-time"
            />
            <RoleCard
              roleTitle="Role Tittle"
              roleDescription="Lörem ipsum nåst san antin. Best opredade, och pektig morotsmobb i
          lude. Huktig oliga setuck lalohet telingar."
              cardImage={RoleClock}
              workSite="Fill-time"
            />
            <RoleCard
              roleTitle="Role Tittle"
              roleDescription="Lörem ipsum nåst san antin. Best opredade, och pektig morotsmobb i
          lude. Huktig oliga setuck lalohet telingar."
              cardImage={RoleClock}
              workSite="Fill-time"
            />
            <RoleCard
              roleTitle="Role Tittle"
              roleDescription="Lörem ipsum nåst san antin. Best opredade, och pektig morotsmobb i
          lude. Huktig oliga setuck lalohet telingar."
              cardImage={RoleClock}
              workSite="Fill-time"
            />
            <RoleCard
              roleTitle="Role Tittle"
              roleDescription="Lörem ipsum nåst san antin. Best opredade, och pektig morotsmobb i
          lude. Huktig oliga setuck lalohet telingar."
              cardImage={RoleClock}
              workSite="Fill-time"
            />
          </CardWrapper2>
        </RoleWrapper>
      </Roles>
      <CarouselWrapper>
        <CarouselCard
          carouselImage={apostrophe}
          carouselBody="Joined ChamsAccess 2 years ago as a fresh graduate, confused and knowing the company is technology-based, my work experience has been fantastic and awesome
          Chamsaccess indeed is a company that enhances growth and development and they are always there to support
          "
          carouselName="Thelma"
          CarouselRole="HR/Procurements"
        />
      </CarouselWrapper>
      <TextDiv>
        <Ready>Have a dream job?</Ready>
        <p>
          We periodically review CVs on file for upcoming positions. Please
          submit your details and we will be in touch if you meet the criteria
          for any positions that become available.
        </p>
        <NavLink to="/career-form" style={{ textDecoration: "none" }}>
          <RequestButton>Tell us about your dream job</RequestButton>
        </NavLink>
      </TextDiv>
      <Footer />
    </CareerPageContainer>
  );
};

export default CareersPage;
