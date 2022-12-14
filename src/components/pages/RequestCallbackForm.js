import React, { useEffect } from "react";
import {
  RequestContainer,
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
} from "./RequestCallbackFormStyle";
import requestImage from "../../images/RequestImage.png";
import cancelIcon from "../../images/CancelIcon.svg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const RequestCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <RequestContainer>
      <Left>
        <p>We will reach out as soon as we can</p>
        <img src={requestImage} alt="seyi" />
      </Left>
      <Right>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer"
          }}
          onClick={()=>{
            navigate(-1);
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
              display: "flex",
              alignText: "flex-end",
            }}
          />
        </div>
        <FormContainer>
          <FormContent>
            <Heading>Request a callback</Heading>
            <p>
            We appreciate your interest in our services and solutions. Do let us know how we can reach out to discuss your project in details.
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
                  Company name
                  <input type="text" />
                </label>
                <label style={{ marginLeft: "10px" }}>
                  Email address
                  <input type="text" />
                </label>
              </Contact1>
              <Contact2>
                <label style={{ marginRight: "10px" }}>
                  Phone number
                  <input type="text" />
                </label>
                <label style={{ marginLeft: "10px" }}>
                  Location of customer
                  <input type="text" />
                </label>
              </Contact2>
              <Message>
                <label>
                  Enquiry description
                  <textarea type="text" placeholder="Enter a description..." />
                </label>
              </Message>
              <Button>Submit</Button>
            </Form>
          </FormWrapper>
        </FormContainer>
      </Right>
    </RequestContainer>
  );
};

export default RequestCallback;
