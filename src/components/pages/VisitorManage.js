import React, { useEffect } from "react";
import VisitorCard from "./VisitorCard";
import VisitorPowerfulCard from "./VisitorPowerfulCard";
import {
  VisitorContainer,
  UnlimitedVisitorWrapper,
  Unlimited,
  LimitLeft,
  LimitRight,
  U1,
  U2,
  UnlimitedButton,
  SolutionFeatures,
  VisitorCardHolder,
  Powerful,
  PowerfulFeaturesWrapper,
} from "./VisitorManageStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import visitorImage from "../../images/VisitorImage1.png";
import visitorHosting from "../../images/VisitorHosting.svg";
import visitorImage2 from "../../images/VisitorImage2.svg";
import visitorImage3 from "../../images/VisitorImage3.svg";
import visitorPowerfulHand from "../../images/visitorPowerfulHand.gif";
import visitorAlert from "../../images/visitorAlert.gif";
import visitorAnalytic from "../../images/visitorAnalytic.gif";
import visitorPhoto from "../../images/visitorPhoto.gif";
import badge from "../../images/badge.gif";
import visitorRegistration from "../../images/visitorRegistration.gif";

const VisitorManage = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  return (
    <VisitorContainer>
      <Header />
      <UnlimitedVisitorWrapper>
        <Unlimited>
          <LimitLeft>
            <U1>
              Unlimited Visitors, <span>One Solution</span>
            </U1>
            <U2>
              Show guests that you care about their experience from the moment
              that they’re invited to visit.
            </U2>
            <UnlimitedButton>Request a callback</UnlimitedButton>
          </LimitLeft>
          <LimitRight>
            <img src={visitorImage} alt="limited" />
          </LimitRight>
        </Unlimited>
      </UnlimitedVisitorWrapper>
      <SolutionFeatures>
        <p>
          Our Solution has features that work for your workplace from sign-in to
          security, compliance, and even beyond.
        </p>
        <VisitorCardHolder>
          <VisitorCard
            // color="#EBF5F0"
            visitorSource={visitorHosting}
            visitorHeading="Make hosting visitors a seamless experience"
            visitorDesc="No more scrambling to find employees when their guests arrive,
        handwriting name badges, and tracking down signed agreements."
          />
          <VisitorCard
            // bgColor="#F5FAFF"
            visitorSource={visitorImage2}
            visitorHeading="Keep your workplace
            safe"
            visitorDesc="See precisely who’s visiting,when,and why with a visitor management method that allows you set your own entry conditions . encourage a healthy workplace with a touchless sign-in and document verification .
            "
          />
          <VisitorCard
            // bgColor="#F5FAFF"
            visitorSource={visitorImage3}
            visitorHeading="Make a beautiful first impression"
            visitorDesc="Make guests know that you are concerned about their experience from the moment that they’re invited to visit. Forward directions and parking instructions, wow them with a touch less sign-in, and survey them afterward about their experience.
            "
          />
        </VisitorCardHolder>
      </SolutionFeatures>
      <Powerful>
        <p>Powerful features you need to welcome visitors</p>
        <PowerfulFeaturesWrapper>
          <VisitorPowerfulCard
            visitorPowerfulSource={visitorPowerfulHand}
            PowerfulHeading="Customizable Sign in"
            PowerfulDesc="Create multiple sign-in flows that ask different questions based on the
        purpose of the guest’s visit."
          />
          <VisitorPowerfulCard
            visitorPowerfulSource={visitorAlert}
            PowerfulHeading="Instant
            Notifications"
            PowerfulDesc="Automatically notify employees upon guests arrival."
          />
          <VisitorPowerfulCard
            visitorPowerfulSource={visitorAnalytic}
            PowerfulHeading="Analytics and Reporting"
            PowerfulDesc="Get insight into visitor volume,who hosts visitors,and more. Export information in a few clicks."
          />
          <VisitorPowerfulCard
            visitorPowerfulSource={badge}
            PowerfulHeading="Badge
            Printing"
            PowerfulDesc="Automatically print badges when visitors sign in. Create custom badges."
          />
          <VisitorPowerfulCard
            visitorPowerfulSource={visitorPhoto}
            PowerfulHeading="Photo
            Capture"
            PowerfulDesc="Ask guests to take a photo so their host can greet them with confidence."
          />
          <VisitorPowerfulCard
            visitorPowerfulSource={visitorRegistration}
            PowerfulHeading="Fast
            Registration"
            PowerfulDesc="Add approaching visitors to let your team know who to anticipate and email guests details about their visit."
          />
        </PowerfulFeaturesWrapper>
      </Powerful>
      <Footer />
    </VisitorContainer>
  );
};

export default VisitorManage;
