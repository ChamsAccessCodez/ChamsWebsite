import React from "react";
import { CardWrapper, CardInfo, CardHeading } from "./AboutCardStyle";

const AboutCard = (props) => {
  return (
    <CardWrapper>
      <img src={props.cardImage} alt="business Integrity" />
      <CardInfo id="info">
        <CardHeading>{props.heading}</CardHeading>
        <p id="para">{props.description}</p>
      </CardInfo>
    </CardWrapper>
  );
};

export default AboutCard;
