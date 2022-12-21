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
import RandomPics from "../../images/RandomPics.png";
import RoleCard from "./RoleCard";
import RoleClock from "../../images/RoleClock.png";
import CarouselCard from "./CarouselCard";
import apostrophe from "../../images/Staffs/apostrophe.png";
import CarouselThelma from "../../images/CarouselThelma.png";
import CarouselDavid from "../../images/CarouselDavid.png";
import CarouselMaria from "../../images/CarouselMaria.png";
import CarouselSeyi from "../../images/CarouselSeyi.png";
import CarouselQozim from "../../images/CarouselQozim.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CareersPage = () => {
  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  const thelmaBodyText = (
    <html>
      Joined ChamsAccess 2 years ago as a fresh graduate, confused and knowing
      the company is technology-based, my work experience has been fantastic and
      awesome. <br />
      <br />
      Chamsaccess indeed is a company that enhances growth and development and
      they are always there to support.
      <br />
      <br />{" "}
      <span
        style={{
          marginTop: "20px",
          width: "614px",
          height: "42px",
          fontFamily: "Amster",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "30px",
          lineHeight: "38px",
          color: "#FFFFFF",
        }}
      >
        Thelma
      </span>
    </html>
  );
  const davidBodyText = (
    <html>
      My journey in ChamsAccess started over two years ago and it has been such
      an amazing experience as the organization did not just avail me the
      opportunity to grow in my career but also equipped and supported me in the
      process. <br />I am particularly thrilled by the company’s core values and
      open-door policy and I have no regret working with this organization.
      <br />
      <br />{" "}
      <span
        style={{
          marginTop: "20px",
          width: "614px",
          height: "42px",
          fontFamily: "Amster",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "30px",
          lineHeight: "38px",
          color: "#FFFFFF",
        }}
      >
        David
      </span>
    </html>
  );
  const mariaBodyText = (
    <html>
      At first, I wasn't sure if I would fit in well or even do great on the
      job, I was the perfect definition of a rooky. It's been 13 months and the
      journey has been incredible. Thank you for giving me the opportunity to
      learn, grow and be more.
      <br />
      <br />{" "}
      <span
        style={{
          marginTop: "20px",
          width: "614px",
          height: "42px",
          fontFamily: "Amster",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "30px",
          lineHeight: "38px",
          color: "#FFFFFF",
        }}
      >
        Maria
      </span>
    </html>
  );
  const seyiBodyText = (
    <html>
      My work experience has been fantastic and friendly, and in terms of
      growth, it has been awesome. I came in as a customer service officer,
      however, I am now the lead technical support, and it is evolving by the
      day.
      <br />
      <br />{" "}
      <span
        style={{
          marginTop: "20px",
          width: "614px",
          height: "42px",
          fontFamily: "Amster",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "30px",
          lineHeight: "38px",
          color: "#FFFFFF",
        }}
      >
        Seyi
      </span>
    </html>
  );
  const qozimBodyText = (
    <html>
      I joined ChamsAccess in 2016, during the time I worked as a Technician
      with fewer skills but with great guidance and support, I was able to
      gather the major skills required for being an engineer. Being a
      goal-getter and agile staff, I got the nickname "CHIEF ENGINEER.
      <br />
      <br />{" "}
      <span
        style={{
          marginTop: "20px",
          width: "614px",
          height: "42px",
          fontFamily: "Amster",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "30px",
          lineHeight: "38px",
          color: "#FFFFFF",
        }}
      >
        Qozim
      </span>
    </html>
  );

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
          <img src={RandomPics} alt="engineers" />
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
          </CardWrapper2>
        </RoleWrapper>
      </Roles>
      <CarouselWrapper>
        <Slider {...settings}>
          <div>
            <CarouselCard
              carouselImage={apostrophe}
              carouselBody={qozimBodyText}
              sourceImage={CarouselQozim}
            />
          </div>
          <div>
            <CarouselCard
              carouselImage={apostrophe}
              carouselBody={seyiBodyText}
              sourceImage={CarouselSeyi}
            />
          </div>
          <div>
            {" "}
            <CarouselCard
              carouselImage={apostrophe}
              carouselBody={mariaBodyText}
              sourceImage={CarouselMaria}
            />
          </div>
          <div>
            <CarouselCard
              carouselImage={apostrophe}
              carouselBody={davidBodyText}
              sourceImage={CarouselDavid}
            />
          </div>
          <div>
            <CarouselCard
              carouselImage={apostrophe}
              carouselBody={thelmaBodyText}
              sourceImage={CarouselThelma}
            />
          </div>
        </Slider>
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
