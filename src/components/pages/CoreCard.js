import React from "react";
import { Top, CardContent, CardContainer } from "./CoreCardStyle";


const CoreCard = ({coreImage, header, description}) => {
  return (
    <CardContainer>
      <img src={coreImage} alt="core card" />
      <CardContent>
        <Top>{header}</Top>
        <p>{description}</p>
      </CardContent>
    </CardContainer>
  );
};

export default CoreCard;
