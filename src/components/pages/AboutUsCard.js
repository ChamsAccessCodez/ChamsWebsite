// create a card for the history component.
import React from "react";
import {
  LineHistoryWrapper,
  Line,
  Circle,
  LineDetails,
  Year,
  YearDesc,
} from "./AboutUsCardStyle";

const AboutUsCard = ({year, yearDesc}) => {
  return (
    <LineHistoryWrapper>
      <Line id="line">
        <Circle id="circle"></Circle>
      </Line>
      <LineDetails>
        <Year>{year}</Year>
        <YearDesc>
          {yearDesc}
        </YearDesc>
      </LineDetails>
    </LineHistoryWrapper>
  );
};

export default AboutUsCard;
