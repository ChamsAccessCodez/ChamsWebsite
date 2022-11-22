import React from "react";
import {
  CareerContainer,
  Left,
  Right,
  FormContainer,
  FormContent,
  Heading,
  FormWrapper,
  Form,
  Name,
  Contact1,
  Contact2,
  Message,
  Button,
  DownloadIcon,
  RealInput,
  InputRow,
} from "./CareersFormStyle.js";
import careerImage from "../../images/CareerImage.png";
import cancelIcon from "../../images/CancelIcon.png";
import uploadIcon from "../../images/uploadIcon.svg";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <CareerContainer>
      <Left>
        <p>Your dream job is waiting here</p>
        <img src={careerImage} alt="thelma" />
      </Left>
      <Right>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            justifySelf: "flex-end",
            alignSelf: "right",
            // backgroundColor: "red",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={cancelIcon}
            alt="cancel"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "20px",
              marginTop: "40px",
              marginRight: "40px",
              marginBottom: "80px",
            }}
          />
        </Link>
        <FormContainer>
          <FormContent>
            <Heading>Request a callback</Heading>
            <p>
              Thanks for your interest in our services. Let us know how we can
              reach out to discuss your project in more detail.
            </p>
          </FormContent>
          <FormWrapper>
            <Form>
              <Name>
                <label>
                  First name
                  <input type="text" />
                </label>
                <label>
                  Last name
                  <input type="text" />
                </label>
              </Name>
              <Contact1>
                <label style={{ marginRight: "10px" }}>
                  Current location
                  <input type="text" />
                </label>
                <label style={{ marginLeft: "10px" }}>
                  Email address
                  <input type="text" />
                </label>
              </Contact1>
              <Contact2>
                <div style={{ width: "47%" }}>
                  <p
                    style={{
                      marginTop: "0px",
                      fontFamily: "Komet",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#344054",
                    }}
                  >
                    Upload CV
                  </p>
                  <InputRow>
                    <RealInput
                      type="file"
                      accept=".docx, .pdf, .doc"
                      placeholder="Choose file"
                      style={{
                        display: "none",
                      }}
                    />
                    <DownloadIcon src={uploadIcon} alt="Download" />
                  </InputRow>
                </div>
                <div
                  style={{
                    width: "47%",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0px",
                      fontFamily: "Komet",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#344054",
                    }}
                  >
                    Upload cover letter
                  </p>
                  <InputRow>
                    <RealInput
                      type="file"
                      accept=".docx, .pdf, .doc"
                      placeholder="Choose file"
                      style={{
                        display: "none",
                      }}
                    />
                    <DownloadIcon src={uploadIcon} alt="Download" />
                  </InputRow>
                </div>
              </Contact2>
              <Message>
                <label>
                  Dream job description
                  <textarea type="text" placeholder="Enter a description..." />
                </label>
              </Message>
              <Button>Submit</Button>
            </Form>
          </FormWrapper>
        </FormContainer>
      </Right>
    </CareerContainer>
  );
};

export default Career;
