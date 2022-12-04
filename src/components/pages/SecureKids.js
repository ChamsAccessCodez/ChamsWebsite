import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SecureKidCard from "./SecureKidCard";
import {
  SecureKidsContainer,
  ChildSecurityContainer,
  ChildWrapper,
  Left1,
  Left2,
  K1,
  K2,
  ChildButton,
  KidSchool,
  KidSchoolWrapper,
  W1,
  W2,
  W21,
  KidsOption,
  Options,
  TextDiv,
  Ready,
  RequestButton,
  SecureCard,
  SecureCardWrapper,
} from "./SecureKidsStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import secureKids1 from "../../images/SecureKidsImage1.png";
import kid1 from "../../images/Kid1.png";
import kidsOptionIcon from "../../images/FinancialInsurancIcon.png";
import kidScalable from "../../images/KidScalable.svg";
import kidPractice from "../../images/KidPractice.svg";
import kidSecured from "../../images/KidSecured.svg";

const SecureKids = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <SecureKidsContainer>
      <Header />
      <ChildSecurityContainer>
        <ChildWrapper>
          <Left1>
            <K1>
              Your Child’s Security <span>Our Priority</span>
            </K1>
            <K2>
              We have designed the right solution that ensures efficient
              management and security of child/ward drop-off and pick up at
              schools.
            </K2>
            <ChildButton>Request a callback</ChildButton>
          </Left1>
          <Left2>
            <img src={secureKids1} alt="secure1" />
          </Left2>
        </ChildWrapper>
      </ChildSecurityContainer>
      <KidSchool>
        <KidSchoolWrapper>
          <W1>
            <img src={kid1} alt="kid1" />
          </W1>
          <W2>
            <W21>Secure Kid Solution for Schools</W21>
            <p>
              Securing educational institutions from unwanted incidents brings
              calmness to the minds of students, parents, and teachers.
              ChamsAccess provides scenario-based solutions meeting all the
              critical requirements of the education industry, thereby allowing
              students and teachers to focus on gaining value-adding knowledge.
            </p>
            <KidsOption>
              <Options>
                <img src={kidsOptionIcon} alt="opt" />
                <p>Attendance reports easily generated</p>
              </Options>
              <Options>
                <img src={kidsOptionIcon} alt="opt" />
                <p>Real time notification for parents on child’s location</p>
              </Options>
              <Options>
                <img src={kidsOptionIcon} alt="opt" />
                <p>Prevents unauthorized pickup of students from school.</p>
              </Options>
              <Options>
                <img src={kidsOptionIcon} alt="opt" />
                <p>
                  Efficient monitoring of child transportation from home to
                  school
                </p>
              </Options>
              <Options>
                <img src={kidsOptionIcon} alt="opt" />
                <p>
                  Notification alarm for absent students for parents and the
                  school
                </p>
              </Options>
            </KidsOption>
          </W2>
        </KidSchoolWrapper>
      </KidSchool>
      <SecureCard>
        <p>Powerful Benefits for everyone</p>
        <SecureCardWrapper>
          <SecureKidCard
            sourceImage={kidScalable}
            TitleHead="Highly"
            TitleHead2="Scalable"
          />
          <SecureKidCard
            sourceImage={kidPractice}
            TitleHead="Best Price"
            TitleHead2="in The Market"
          />
          <SecureKidCard
            sourceImage={kidSecured}
            TitleHead="Customizable"
            TitleHead2="Highly Secured"
          />
        </SecureCardWrapper>
      </SecureCard>
      <TextDiv>
        <Ready>Ready to Gain complete control with SecureKid?</Ready>
        <NavLink to="/callback" style={{ textDecoration: "none" }}>
          <RequestButton>Request a callback</RequestButton>
        </NavLink>
      </TextDiv>
      <Footer />
    </SecureKidsContainer>
  );
};

export default SecureKids;
