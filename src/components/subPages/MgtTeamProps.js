import React from "react";
import styled from "styled-components";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import dotedComplete from "../../images/DotedComplete.png";
import ImageProps from "./ImageProps";
import dumebiSmall from "../../images/DumebiSmall.png";
import olayemiSmall from "../../images/OlayemiSmall.png";
import gbengaSmall from "../../images/GbengaSmall.png";
import damiSmall from "../../images/DamiSmall.png";
import ucheSmall from "../../images/UcheSmall.png";
import seunSmall from "../../images/SeunSmall.png";

const MgtTeamProps = ({
  mgtName,
  mgtPosition,
  mgtPhoto,
  mgtDescName,
  mgtDescPosition,
  mgtDesc,
}) => {
  return (
    <MgtContainer>
      <Header />
      <GetInTouch>
        <Content>
          <Touch>{mgtName}</Touch>
          <p>{mgtPosition}</p>
        </Content>
      </GetInTouch>
      <MgtBio>
        <BioDivider>
          <MgtLeft>
            <img src={mgtPhoto} alt="dumebi" />
          </MgtLeft>
          <MgtRight>
            <D1>{mgtDescName}</D1>
            <D2>{mgtDescPosition}</D2>
            <D3>{mgtDesc}</D3>
          </MgtRight>
        </BioDivider>
      </MgtBio>
      <MgtNavs>
        <PropsCover>
          <ImageProps
            mgtImageSmall={dumebiSmall}
            mgtNameSmall="Dumebi Obodo"
            mgtPositionSmall="MD/CEO"
            personalNav="/dumebi"
          />
          <ImageProps
            mgtImageSmall={olayemiSmall}
            mgtNameSmall="Olayemi Odufeso"
            mgtPositionSmall="Group Head, Corporate Services & Planning"
            personalNav="/olayemi"
          />
          <ImageProps
            mgtImageSmall={gbengaSmall}
            mgtNameSmall="Gbenga Oshinoiki"
            mgtPositionSmall="Head, Emerging Markets and New Sectors"
            personalNav="/gbenga"
          />
          <ImageProps
            mgtImageSmall={damiSmall}
            mgtNameSmall="Dami Adegbulu"
            mgtPositionSmall="Head, Sales"
            personalNav="/dami"
          />
          <ImageProps
            mgtImageSmall={ucheSmall}
            mgtNameSmall="Uche Okorie"
            mgtPositionSmall="Head, Business Operations Support"
            personalNav="/uche"
          />
          <ImageProps
            mgtImageSmall={seunSmall}
            mgtNameSmall="Uche Okorie"
            mgtPositionSmall="Head, Business Operations Support"
            personalNav="/seun"
          />
        </PropsCover>
      </MgtNavs>
      <Footer />
    </MgtContainer>
  );
};

export default MgtTeamProps;

const MgtContainer = styled.div`
  background: #ffffff;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 80px;
`;
// const MgtContainer = styled.div``;
export const GetInTouch = styled.div`
  flex-wrap: wrap;
  width: 100vw;
  margin-top: 80px;
  height: 400px;
  background: url(${dotedComplete}),
    linear-gradient(
      0deg,
      rgba(57, 147, 100, 0.25) 0%,
      rgba(206, 228, 216, 0.25) 77.6%
    );
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  //   background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //   width: 909px;
  width: auto;
  //   height: 184px;
  height: auto;

  p {
    width: 668px;
    height: 30px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #667085;
    margin-top: 10px;
  }
`;
export const Touch = styled.div`
  width: 790px;
  height: 60px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #08783d;
`;
// const MgtContainer = styled.div``;
const MgtBio = styled.div`
  background: #ffffff;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //   padding: 80px 120px;
  border-radius: 20px;
`;
const BioDivider = styled.div`
  //   background: red;
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  // align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
  padding-bottom: 80px;
`;
const MgtLeft = styled.div`
  // background: blue;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 0px;

  img {
    width: 500px;
    height: 600px;
  }
`;
const MgtRight = styled.div`
  // background: green;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  // padding-top: 80px;
`;
const D1 = styled.div`
  width: 100%;
  height: 38px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
  margin-bottom: 2px;
`;
const D2 = styled.div`
  //   background: red;
  width: 500px;
  height: 28px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #1d2939;
  margin-bottom: 22px;
`;
const D3 = styled.div`
  width: 630px;
  height: auto;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #1d2939;
`;
const MgtNavs = styled.div`
  width: 100vw;
  height: 300px;
  background: linear-gradient(
    0deg,
    rgba(57, 147, 100, 0.25) 0%,
    rgba(206, 228, 216, 0.25) 77.6%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PropsCover = styled.div`
  //   background: red;
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
// const MgtContainer = styled.div``;
// const MgtContainer = styled.div``;
// const MgtContainer = styled.div``;
// const MgtContainer = styled.div``;
// const MgtContainer = styled.div``;
// const MgtContainer = styled.div``;
