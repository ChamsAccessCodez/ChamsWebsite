import React, { useEffect, useState } from "react";
import mail from "../../../images/mail.svg";
import chamsLogo from "../../../images/chamsLogo.svg";
import twitter from "../../../images/Twitter.svg";
import linkedIn from "../../../images/LinkedIn.svg";
import facebook from "../../../images/Facebook.svg";
import Instagram from "../../../images/Instagram.svg";
import {
  FooterWrapper,
  FooterTop,
  FooterMain,
  Desc,
  Form,
  Wrapper,
  Desc1,
  Desc2,
  Input,
  Button,
  InputWrapper,
  FooterContainer,
  ChamsAccess,
  ChamsAccess2,
  Navs,
  SocialMedia,
  Head,
  Copywrite,
} from "./FooterStyle";
import { Link } from "react-router-dom";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");
  let year = new Date().getFullYear();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
    setCurrentYear(year);
  }, [year]);

  return (
    <FooterWrapper>
      <FooterTop>
        <Wrapper>
          <Desc>
            <Desc1>Stay in the loop</Desc1>
            <Desc2>
              Subscribe to be the first to know about news, updates, and
              industry insights.
            </Desc2>
          </Desc>
          <Form>
            <InputWrapper>
              <img src={mail} alt="placeholder" />
              <Input placeholder="Enter email address to subscribe" />
            </InputWrapper>
            <Button type="submit">Subscribe</Button>
          </Form>
        </Wrapper>
      </FooterTop>
      <FooterMain>
        <FooterContainer>
          <ChamsAccess>
            <Link to="/">
              <img src={chamsLogo} alt="chamsLogo" />
            </Link>

            <p>8, Louis Solomon Close, Victoria Island, Lagos.</p>
            <p>081 347 99582 | 000 000 00000</p>
            <p>info@chamsaccess.com</p>
            <SocialMedia>
              <a
                href="https://www.instagram.com/chamsaccessltd"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Instagram} alt="instagram" />
              </a>
              <a
                href="https://www.twitter.com/chamsaccess"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/chamsaccessltd"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="linkedin" />
              </a>
              <a
                href="https://www.facebook.com/chamsaccess"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
            </SocialMedia>
          </ChamsAccess>
          <Navs>
            <Head>Company</Head>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <p>About us</p>
            </Link>
            <Link to="/career-page" style={{ textDecoration: "none" }}>
              <p>Careers</p>
            </Link>
            <Link to="/contact-us" style={{ textDecoration: "none" }}>
              <p>Impacts</p>
            </Link>
            {/* <Link to="/contact" style={{ textDecoration: "none" }}>
              <p>FAQs</p>
            </Link> */}
            <Link to="/contact-us" style={{ textDecoration: "none" }}>
              <p>News and Insights</p>
            </Link>
          </Navs>
          <Navs>
            <Head>Our Solutions</Head>
            <Link to="/biometric-solutions" style={{ textDecoration: "none" }}>
              <p>Biometrics Solutions</p>
            </Link>
            <Link
              to="/cybersecurity-solutions"
              style={{ textDecoration: "none" }}
            >
              <p>Cybersecurity Solutions</p>
            </Link>
            <Link to="/payment-solutions" style={{ textDecoration: "none" }}>
              <p>Payments Solutions</p>
            </Link>
            <Link to="/access-management" style={{ textDecoration: "none" }}>
              <p>Access Management Solutions</p>
            </Link>
            <Link to="/customized-solutions" style={{ textDecoration: "none" }}>
              <p>Custom Solutions</p>
            </Link>
          </Navs>
          <Navs>
            <Head>Our Subsidiaries</Head>
            <Link to="/pension-central" style={{ textDecoration: "none" }}>
              <p>Pension Central</p>
            </Link>
            <Link to="/argone-world" style={{ textDecoration: "none" }}>
              <p>Argone World</p>
            </Link>
          </Navs>
          <Navs>
            <Head>Support</Head>
            <Link to="/contact-us" style={{ textDecoration: "none" }}>
              <p>Contact us</p>
            </Link>
            {/* <Link to="/contact" style={{ textDecoration: "none" }}>
              <p>Support center</p>
            </Link> */}
            <Link to="/request-a-callback" style={{ textDecoration: "none" }}>
              <p>Request a callback</p>
            </Link>
          </Navs>
          <ChamsAccess2>
            <Link to="/">
              <img src={chamsLogo} alt="chamsLogo" />
            </Link>

            <p>8, Louis Solomon Close, Victoria Island, Lagos.</p>
            <p>081 347 99582 | 000 000 00000</p>
            <p>info@chamsaccess.com</p>
            <SocialMedia>
              <a
                href="https://www.instagram.com/chamsaccessltd"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Instagram} alt="instagram" />
              </a>
              <a
                href="https://www.twitter.com/chamsaccess"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/chamsaccessltd"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="linkedin" />
              </a>
              <a
                href="https://www.facebook.com/chamsaccess"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
            </SocialMedia>
          </ChamsAccess2>
        </FooterContainer>
      </FooterMain>
      <Copywrite>© Copyright {currentYear} ChamsAccess Limited.</Copywrite>
    </FooterWrapper>
  );
};

export default Footer;
