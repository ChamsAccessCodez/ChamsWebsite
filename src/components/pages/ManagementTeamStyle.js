import styled from "styled-components";
import dotedComplete from "../../images/DotedComplete.png";

export const ManagementTeamContainer = styled.div`
  background: #ffffff;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 80px;
`;
export const GetInTouch = styled.div`
  flex-wrap: wrap;
  width: inherit;
  margin-top: 80px;
  height: 500px;
  background: url(${dotedComplete}),
    linear-gradient(
      0deg,
      rgba(57, 147, 100, 0.25) 0%,
      rgba(206, 228, 216, 0.25) 77.6%
    );
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: flex;
  // justify-content: space-between;
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
    width: 703px;
    height: 56px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #667085;
    margin-top: 60px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  width: 94px;
  height: 28px;
  background: #f6eaeb;
  border-radius: 97px;
  cursor: pointer;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-bottom: 20px;
  transition: background 1s;

  font-family: "Komet";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #a92f34;

  :hover {
    background: #a92f34;
    color: #f6eaeb;
  }
`;

export const Touch = styled.div`
  width: 700px;
  height: 60px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #101828;
  margin-bottom: 20px;

  span {
    color: #08783d;
  }
`;
export const BoardOfDirectors = styled.div`
  background: #ffffff;
  width: 100vw;
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const Caption = styled.div`
  width: 311px;
  height: 44px;
  font-family: "amster";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #1d2939;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const ManagementCardWrapper = styled.div`
  // background: red;
  width: 90%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
// export const ManagementTeamContainer = styled.div``;
// export const ManagementTeamContainer = styled.div``;

export const MgtTeam = styled.div`
  background: #ffffff;
  width: 100vw;
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
// export const Caption = styled.div`
//   width: 311px;
//   height: 44px;
//   font-family: "amster";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 36px;
//   line-height: 44px;
//   text-align: center;
//   letter-spacing: -0.02em;
//   color: #1d2939;
//   margin-top: 50px;
//   margin-bottom: 50px;
// `;
// export const ManagementCardWrapper = styled.div`
//   // background: red;
//   width: 90%;
//   height: auto;
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
// `;
// export const ManagementTeamContainer = styled.div``;
// export const ManagementTeamContainer = styled.div``;
// export const ManagementTeamContainer = styled.div``;
// export const ManagementTeamContainer = styled.div``;
// export const ManagementTeamContainer = styled.div``;
// export const ManagementTeamContainer = styled.div``;
