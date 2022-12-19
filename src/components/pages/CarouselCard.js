import React from "react";
import styled from "styled-components";

const CarouselCard = ({
  carouselImage,
  carouselBody,
  carouselName,
  CarouselRole,
  sourceImage,
}) => {
  return (
    <CarouselContainer>
      <CareerDescriptions>
        <Div1>
          <img src={carouselImage} alt="apostrophe" />
        </Div1>
        <Div2>{carouselBody}</Div2>
      </CareerDescriptions>
      <CareerImage>
        <img src={sourceImage} alt="carousel" />
      </CareerImage>
    </CarouselContainer>
  );
};

export default CarouselCard;

const CarouselContainer = styled.div`
  background: red;
  width: 1200px;
  // width: 80%;
  height: 380px;
  box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;
const CareerDescriptions = styled.div`
  // background: yellow;
  width: 820px;
  //   width: 65%;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CareerImage = styled.div`
  // background: green;
  width: 380px;
  //   width: 35%;
  height: 380px;
  display: flex;
  justify-content: center;
  //   align-items: center;
  border-radius: 30px;

  img {
    width: 380px;
    height: 380px;
    // width: 100%;
    // height: 100%;
    object-fit: cover;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;
const Div1 = styled.div`
  position: relative;
  // background: blue;
  position: relative;
  width: 100px;
  height: 76px;
  // top: 40px;
  margin-left: 40px;
  // margin-bottom: 14px;

  img {
    width: 100px;
    height: 76px;
  }
`;
const Div2 = styled.div`
  // background: green;
  position: relative;
  margin-right: 132px;
  width: 614px;
  height: auto;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  margin-left: 142px;
  // top: -60px;
  top: -40px;
`;
// const CarouselContainer = styled.div``;
// const CarouselContainer = styled.div``;
// const CarouselContainer = styled.div``;
// const CarouselContainer = styled.div``;
// const CarouselContainer = styled.div``;
