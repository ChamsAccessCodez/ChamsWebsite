import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  AccessContainer,
  Access,
  AccessLeft,
  AccessRight,
  A1,
  A2,
  AccessButton,
  AccessControlMaster,
  AccessControlDivider,
  DividerLeft,
  DividerRight,
  C1,
  C2,
  ControlOption,
  OptList,
  TimeSolution,
  TimeSolutionDivider,
  TimeLeft,
  TimeRight,
  T1,
  T2,
  TimeOption,
  TimeList,
  TextDiv,
  Ready,
  RequestButton,
} from "./AccessControlStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import accessControlImage1 from "../../images/AccessControlImage1.png";
import accessControlImage from "../../images/AccessControlImage.png";
import kidsOptionIcon from "../../images/FinancialInsurranceIcon.svg";
import timeSolution from "../../images/TimeSolutionImage1.png";

const AccessControl = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <AccessContainer>
      <Header />
      <Access>
        <AccessLeft>
          <A1>
            Guaranteed <span>Access</span> and <span>Transparency</span>
          </A1>
          <A2>We guarantee secure access control to a variety of premises.</A2>
          <Link to="/callback" style={{ textDecoration: "none" }}>
            <AccessButton>Request a callback</AccessButton>
          </Link>
        </AccessLeft>
        <AccessRight>
          <img src={accessControlImage1} alt="Access" />
        </AccessRight>
      </Access>
      <AccessControlMaster>
        <AccessControlDivider>
          <DividerLeft>
            <img src={accessControlImage} alt="Access" />
          </DividerLeft>
          <DividerRight>
            <C1>Access Control</C1>
            <C2>
              We provide organizations of all sizes the ability to monitor in
              real-time and manage the movement of people inside or outside of
              their place of business, with the added possibility of automatic
              control and restricted access to areas of importance such as labs,
              data centers, vaults, warehouses, etc.
            </C2>
            <ControlOption>
              <OptList>
                <img src={kidsOptionIcon} alt="opt" />
                <p>Access control per user, time period and area</p>
              </OptList>
              <OptList>
                <img src={kidsOptionIcon} alt="opt" />
                <p>Notification of the system operation in real time</p>
              </OptList>
              <OptList>
                <img src={kidsOptionIcon} alt="opt" />
                <p>Additional security is ensured by taking Biometric data</p>
              </OptList>
              <OptList>
                <img src={kidsOptionIcon} alt="opt" />
                <p>
                  IP based architecture for increased reliability and
                  scalability
                </p>
              </OptList>
              <OptList>
                <img src={kidsOptionIcon} alt="opt" />
                <p>
                  Centralized monitoring and control of multiple devices and
                  locations
                </p>
              </OptList>
            </ControlOption>
          </DividerRight>
        </AccessControlDivider>
      </AccessControlMaster>
      <TimeSolution>
        <TimeSolutionDivider>
          <TimeLeft>
            <T1>Time and Attendance Solution</T1>
            <T2>
              People are the most valuable asset and their time is just that
              much a valuable resource that fuels further growth of the
              organization. Managing people′s attendance and timings is a basic,
              yet critical challenge for any organization.
            </T2>
            <TimeOption>
              <TimeList>
                <img src={kidsOptionIcon} alt="timeList" />
                <p>Recording of shift and overtime work</p>
              </TimeList>
              <TimeList>
                <img src={kidsOptionIcon} alt="timeList" />
                <p>Recording of shift and overtime work</p>
              </TimeList>
              <TimeList>
                <img src={kidsOptionIcon} alt="timeList" />
                <p>Recording of shift and overtime work</p>
              </TimeList>
              <TimeList>
                <img src={kidsOptionIcon} alt="timeList" />
                <p>Recording of shift and overtime work</p>
              </TimeList>
              <TimeList>
                <img src={kidsOptionIcon} alt="timeList" />
                <p>Recording of shift and overtime work</p>
              </TimeList>
              <TimeList>
                <img src={kidsOptionIcon} alt="timeList" />
                <p>Recording of shift and overtime work</p>
              </TimeList>
            </TimeOption>
          </TimeLeft>
          <TimeRight>
            <img src={timeSolution} alt="time" />
          </TimeRight>
        </TimeSolutionDivider>
      </TimeSolution>
      <TextDiv>
        <Ready>Ready to get started?</Ready>
        <p>
          You need a partner that does more than talk about security, you need
          ChamsAccess, where the security of your premises is our highest
          priority.
        </p>
        <NavLink to="/callback" style={{ textDecoration: "none" }}>
          <RequestButton>Request a callback</RequestButton>
        </NavLink>
      </TextDiv>
      <Footer />
    </AccessContainer>
  );
};

export default AccessControl;
