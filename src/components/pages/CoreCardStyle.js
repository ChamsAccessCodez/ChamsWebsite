import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 350px;
  height: 424px;
  background: #ffffff;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 14px;
  cursor: pointer;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 60px;
  transition: transform 1s;

  img {
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
  }

  &:hover {
    transform: scale(1.08);
  }
`;
export const CardContent = styled.div`
  height: 174px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;

  p {
    width: 300px;
    height: 70px;
    font-family: "Komet";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #475467;
    margin-left: 25px;
    margin-bottom: 30px;
  }
`;
export const Top = styled.div`
  width: 200px;
  height: 30px;
  font-family: "Komet";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #101828;
  margin-left: 25px;
  margin-top: 34px;
  margin-bottom: 10px;
`;
