import React from "react";
import styled from "styled-components";
import RoleClock from "../../images/RoleClock.png";

const RoleCard = ({roleTitle, roleDescription, cardImage, workSite}) => {
  return (
    <RoleCardContainer>
      <RoleContent>
        <RoleText>{roleTitle}</RoleText>
        <p>
          {roleDescription}
        </p>
        <RolePeriod>
          <MiniCard>
            <img src={cardImage} alt="role-position" />
            <p>Full-time</p>
          </MiniCard>
          <MiniCard>
            <img src={RoleClock} alt="role-position" />
            <p>{workSite}</p>
          </MiniCard>
        </RolePeriod>
      </RoleContent>
      <RoleButton>Department</RoleButton>
    </RoleCardContainer>
  );
};

export default RoleCard;

const RoleCardContainer = styled.div`
  width: 100%;
  height: 150px;
  background: #fcfcfd;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 1s;

  :hover {
    transform: scale(0.95);
  }
`;
const RoleContent = styled.div`
//   background: green;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  //   gap: 14px;
  width: 607px;
  width: 75%;
  height: 116px;
  margin-left: 30px;
  margin-top: 17px;
  margin-bottom: 17px;
  margin-right: 17px;

  p {
    margin-top: 0px;
    width: 606px;
    height: 40px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #475467;
  }
`;
const RoleButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2px 20px;
  width: 117px;
  width: 20%;
  height: 24px;
  background: #ebf5f0;
  border-radius: 97px;
  margin-right: 30px;
  cursor: pointer;
`;
const RoleText = styled.div`
  width: 95px;
  height: 30px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #1d2939;
`;
const RolePeriod = styled.div`
//   background: yellow;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const MiniCard = styled.div`
//   background: red;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-right: 30px;
  height: inherit;
  align-items: center;

  img {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }

  p {
    width: 52px;
    height: 18px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #475467;
    text-align: center;
    margin-top: 10px;
    height: 18px;
  }
`;
// const RoleCardContainer = styled.div``;
// const RoleCardContainer = styled.div``;
// const RoleCardContainer = styled.div``;
// const RoleCardContainer = styled.div``;
// const RoleCardContainer = styled.div``;
