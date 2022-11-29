import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  //   background: yellow;
  width: 361px;
  height: 420px;
  border: 1px solid #eaecf0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  :hover #info {
    height: 240px;
    opacity: 0.95;
  }
  :hover #para {
    visibility: visible;
    // overflow-y: hidden;
  }

  @media screen and (max-width: 960px) {
    width: 95%;
    margin-bottom: 20px;
  }
`;
export const CardInfo = styled.div`
  position: absolute;
  width: 361px;
  //   width: 100%;
  height: 110px;
  background: linear-gradient(330.33deg, #101828 14.68%, #475467 98.42%);
  opacity: 0.6;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  transition: height 1s;

  // :hover {
  //   height: 240px;
  //   opacity: 0.95;
  //   p {
  //     visibility: visible;
  //   }
  // }

  p {
    // width: 90%;
    width: 300px;
    font-family: "Komet";
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    margin-top: 20px;
    margin-left: 24px;
    margin-right: 24px;
    visibility: hidden;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    p {
      // margin-left: 0px;
      // margin-right: 0px;
    }
  }
`;
export const CardHeading = styled.div`
  //   width: 80%;
  width: 280px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  margin-top: 24px;
  margin-bottom: 22px;
  margin-left: 24px;
  margin-right: 24px;
  opacity: 1;
  z-index: 999;

  @media screen and (max-width: 960px) {
  }
`;
// export const CardDesc = styled.div`
//   width: 80%;
//   // width: 320px;
//   height: 64px;
//   font-family: "Komet";
//   font-style: normal;
//   font-size: 18px;
//   line-height: 20px;
//   color: #ffffff;
//   margin: 22px 24px;
//   visibility: hidden;
// `;
// export const CardWrapper = styled.div``;
// export const CardWrapper = styled.div``;
