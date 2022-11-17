import React, { useEffect } from "react";
import dotedLeft from "../../images/DotedLeft.png";
import dotedRight from "../../images/DotedRight.png";
import { Link } from "react-scroll";
import {
  ContactUs,
  GetInTouch,
  Content,
  Contact,
  Touch,
  FormContainer,
  FormWrapper,
  ContactInfo,
  InnerWrapper,
  FormHead,
  Form,
  Name,
  Contact1,
  Message,
  Button,
} from "./ContactUsStyle";
import ContactCard from "./ContactCard";
import salesIcon from "../../images/SalesIcon.png";
import supportIcon from "../../images/SupportIcon.png";
import whereIcon from "../../images/WhereIcon.png";
import ScrollToTop from "react-scroll-to-top";

const AboutUs = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <ContactUs>
      <GetInTouch>
        {/* <img src={dotedLeft} alt="doted" /> */}
        <Content>
          {/* <Contact>Contact Us</Contact> */}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1500}
          >
            <Contact>Contact Us</Contact>
          </Link>

          <Touch>
            Get in <span>touch</span>
          </Touch>
          <p>
            We would love to respond to your queries. Feel free to get in touch
            with us.
          </p>
        </Content>
        {/* <img src={dotedRight} alt="" /> */}
      </GetInTouch>
      <FormContainer id="contact">
        {/* <FormContainer> */}
        <FormWrapper>
          <FormHead>Send us a message</FormHead>
          <p>
            Let us know how we can reach you and our team will get in touch.
          </p>
          <Form>
            <Name>
              <label>
                First name
                <input type="text" />
              </label>
            </Name>
            <Contact1>
              <label style={{ marginRight: "10px" }}>
                Contact number
                <input type="text" />
              </label>
              <label style={{ marginLeft: "10px" }}>
                Email address
                <input type="text" />
              </label>
            </Contact1>
            <Message>
              <label>
                Message
                <textarea type="text" placeholder="Enter a description..." />
              </label>
            </Message>
            <Button>Submit</Button>
          </Form>
        </FormWrapper>
      </FormContainer>
      <ContactInfo>
        <InnerWrapper>
          <ContactCard
            Icon={salesIcon}
            cardHeading="Talk to sales"
            cardDescription="An actual human will respond to you"
            email="info@chamsaccess.com"
            phone="+234 00 000 0000 | +234 00 000 0000"
          />
          <ContactCard
            Icon={supportIcon}
            cardHeading="Talk to support"
            cardDescription="For quick help and troubleshooting"
            email="bos@chamsaccess.com"
            phone="01-2914 988 | +234 813 4799 582"
          />
          <ContactCard
            Icon={whereIcon}
            cardHeading="Where we are"
            cardDescription="Where we are located"
            email="8, Louis Solomon Close, Victoria Island"
            phone="Lagos State"
          />
        </InnerWrapper>
      </ContactInfo>
      <ScrollToTop smooth />
    </ContactUs>
  );
};

export default AboutUs;
