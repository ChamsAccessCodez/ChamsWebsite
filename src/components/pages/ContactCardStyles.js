import styled from "styled-components";

export const CardContainer = styled.div`
  box-sizing: border-box;
  width: 286px;
  height: 270px;
  background: #f9fafb;
  border: 1px solid #f2f4f7;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 12px;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  transition: transform 1.5s;

  img {
    width: 48px;
    height: 48px;
    background: #08783d;
    border: 8px solid #ebf5f0;
    border-radius: 28px;
    margin-top: 36px;
    margin-bottom: 30px;
    margin-left: 20px;
  }

  :hover {
    transform: scale(1.15);
  }
`;
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;

  p {
    width: 247px;
    height: 11px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #475467;
    margin-bottom: 30px;
  }
`;
export const P1 = styled.div`
  width: 247px;
  height: 17px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #1d2939;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

export const Email = styled.div`
  width: 247px;
  height: 15px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #08783d;
  margin-bottom: 6px;
`;
export const Phone = styled.div`
  width: 247px;
  height: 17px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #08783d;
  margin-bottom: 88px;
`;

// export const CardContainer = styled.div``;
// export const CardContainer = styled.div``;
// export const CardContainer = styled.div``;
