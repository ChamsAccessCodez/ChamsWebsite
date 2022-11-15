import React from "react";
import { CardContainer, Heading, Info, P1, Email, Phone } from "./ContactCardStyles";
// import salesIcon from "../../images/SalesIcon.png";

const ContactCard = ({Icon, cardHeading, cardDescription, email, phone}) => {
  return (
    <CardContainer>
      <img src={Icon} alt="cardIcon" />
      <Heading>
        {/* <P1>Talk to sales</P1> */}
        <P1>{cardHeading}</P1>
        {/* <p>An actual human will respond to you</p> */}
        <p>{cardDescription}</p>
      </Heading>
      <Info>
        {/* <Email>info@chamsaccess.com</Email> */}
        <Email>{email}</Email>
        {/* <Phone>+234 00 000 0000 | +234 00 000 0000</Phone> */}
        <Phone>{phone}</Phone>
      </Info>
    </CardContainer>
  );
};

export default ContactCard;
