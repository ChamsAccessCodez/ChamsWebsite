import React from "react";
import { CardWrapper, CardInfo, CardHeading } from "./AboutCardStyle";

const AboutCard = (props) => {
  return (
    <CardWrapper>
      {/* <img src={businessImage} alt='business Integrity' /> */}
      <img src={props.cardImage} alt="business Integrity" />
      <CardInfo>
        <CardHeading>{props.heading}</CardHeading>
        <p>{props.description}</p>
      </CardInfo>
    </CardWrapper>
  );
};

export default AboutCard;
