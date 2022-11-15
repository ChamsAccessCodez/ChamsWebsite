import React, { useEffect, useState } from "react";
import mail from "../../../images/mail.png";
import chamsLogo from "../../../images/chamsLogo.svg";
import twitter from "../../../images/Twitter.png";
import linkedIn from "../../../images/LinkedIn.png";
import facebook from "../../../images/Facebook.png";
import Instagram from "../../../images/Instagram.png";
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
    setCurrentYear(year);
  }, []);
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
              <Input placeholder="" />
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
              <img src={twitter} alt="twitter" />
              <img src={linkedIn} alt="linkedin" />
              <img src={facebook} alt="facebook" />
              <img src={Instagram} alt="instagram" />
            </SocialMedia>
          </ChamsAccess>
          <Navs>
            <Head>Company</Head>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <p>About us</p>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <p>Careers</p>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <p>Impacts</p>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <p>FAQs</p>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <p>News and Insights</p>
            </Link>
          </Navs>
          <Navs>
            <Head>Our Solutions</Head>
            <p>Biometrics Solutions</p>
            <p>Cybersecurity Solutions</p>
            <p>Payments Solutions</p>
            <p>Access Management Solutions</p>
            <p>Custom Solutions</p>
          </Navs>
          <Navs>
            <Head>Our Subsidiaries</Head>
            <p>Pension Central</p>
            <p>Argone World</p>
          </Navs>
          <Navs>
            <Head>Support</Head>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <p>Contact us</p>
            </Link>
            <p>Support center</p>
            <p>Request a callback</p>
          </Navs>
        </FooterContainer>
      </FooterMain>
      <Copywrite>© Copyright {currentYear} ChamsAccess Limited.</Copywrite>
    </FooterWrapper>
  );
};

export default Footer;
