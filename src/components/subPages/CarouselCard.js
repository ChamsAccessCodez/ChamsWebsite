import React from "react";
import styled from "styled-components";
import CarouselChika from "../../images/Staffs/CarouselChika.png";

const CarouselCard = ({
  carouselImage,
  carouselBody,
  carouselName,
  CarouselRole,
}) => {
  return (
    <CarouselContainer>
      <CareerDescriptions>
        <Div1>
          <img src={carouselImage} alt="apostrophe" />
        </Div1>
        <Div2>{carouselBody}</Div2>
        <Div3>{carouselName}</Div3>
        <Div4>{CarouselRole}</Div4>
      </CareerDescriptions>
      <CareerImage>
        <img src={CarouselChika} alt="carousel" />
      </CareerImage>
    </CarouselContainer>
  );
};

export default CarouselCard;

const CarouselContainer = styled.div`
  background: red;
  width: 1200px;
  width: 80%;
  height: 380px;
  left: 120px;
  top: 101px;
  box-shadow: 0px 32px 64px -12px rgba(16, 24, 40, 0.14);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const CareerDescriptions = styled.div`
  //   background: yellow;
  width: 820px;
  //   width: 65%;
  height: 380px;
`;
const CareerImage = styled.div`
  //   background: green;
  width: 380px;
  //   width: 35%;
  height: 380px;
  display: flex;
  justify-content: center;
  //   align-items: center;

  img {
    width: 380px;
    height: 380px;
    // width: 100%;
    // height: 100%;
    object-fit: cover;
  }
`;
const Div1 = styled.div`
  width: 100px;
  height: 76px;
  background: #cb8285;
  margin-top: 40px;
  margin-left: 30px;
  margin-bottom: 14px;

  img {
  }
`;
const Div2 = styled.div`
  margin-bottom: 18px;
  margin-right: 132px;

  width: 614px;
  height: 97px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  margin-left: 132px;
`;
const Div3 = styled.div`
  width: 614px;
  height: 42px;
  font-family: "Roslindale Text";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 38px;
  color: #ffffff;
  margin-left: 130px;
`;
const Div4 = styled.div`
  width: 37px;
  height: 28px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  margin-left: 130px;
`;
// const CarouselContainer = styled.div``;
// const CarouselContainer = styled.div``;
// const CarouselContainer = styled.div``;
// const CarouselContainer = styled.div``;
// const CarouselContainer = styled.div``;
