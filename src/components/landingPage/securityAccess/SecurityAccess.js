import React, { useState } from "react";
import Biometric from "./Biometric";
import Cybersecurity from "./Cybersecurity";
import Payment from "./Payment";
import Access from "./Access";
import Custom from "./Custom";
import {
  AccessWrapper,
  AccessTop,
  AccessMiddle,
  OurProduct,
  Think,
  We,
  Item,
  Navs,
  Contents,
} from "./SecurityAccessStyle.js";

const SecurityAccess = () => {
  const [biometric, setBiometric] = useState(true);
  const [cyberSecurity, setCyberSecurity] = useState(false);
  const [payments, setPayments] = useState(false);
  const [access, setAccess] = useState(false);
  const [custom, setCustom] = useState(false);

  const showBiometric = () => {
    setBiometric(true);
    setCyberSecurity(false);
    setPayments(false);
    setAccess(false);
    setCustom(false);
  };
  const showCyberSecurity = () => {
    setBiometric(false);
    setCyberSecurity(true);
    setPayments(false);
    setAccess(false);
    setCustom(false);
  };
  const showPayments = () => {
    setBiometric(false);
    setCyberSecurity(false);
    setPayments(true);
    setAccess(false);
    setCustom(false);
  };
  const showAccess = () => {
    setBiometric(false);
    setCyberSecurity(false);
    setPayments(false);
    setAccess(true);
    setCustom(false);
  };
  const showCustom = () => {
    setBiometric(false);
    setCyberSecurity(false);
    setPayments(false);
    setAccess(false);
    setCustom(true);
  };

  const [toggle, setToggle] = useState(false);
  const toggleMe = () => {
    setToggle(!toggle);
  };

  return (
    <AccessWrapper>
      <AccessTop>
        <OurProduct>our product</OurProduct>
        <Think>Think Possibilities Think ChamsAccess</Think>
        <We>
          We are leading providers of customized financial, identity, access and
          security solutions.
        </We>
      </AccessTop>
      <AccessMiddle>
        <Navs>
          {biometric ? (
            <Item
              bg
              cl
              onClick={() => {
                showBiometric();
              }}
            >
              <span>Biometrics Solutions</span>
            </Item>
          ) : (
            <Item
              onClick={() => {
                showBiometric();
              }}
            >
              <span>Biometrics Solutions</span>
            </Item>
          )}
          {cyberSecurity ? (
            <Item
              bg
              cl
              onClick={() => {
                showCyberSecurity();
              }}
            >
              <span>Cybersecurity Solutions</span>
            </Item>
          ) : (
            <Item
              onClick={() => {
                showCyberSecurity();
              }}
            >
              <span>Cybersecurity Solutions</span>
            </Item>
          )}
          {payments ? (
            <Item
              bg
              cl
              onClick={() => {
                showPayments();
              }}
            >
              <span>Payments Solutions</span>
            </Item>
          ) : (
            <Item
              onClick={() => {
                showPayments();
              }}
            >
              <span>Payments Solutions</span>
            </Item>
          )}
          {access ? (
            <Item
              bg
              cl
              onClick={() => {
                showAccess();
              }}
            >
              <span>Access Management Solutions</span>
            </Item>
          ) : (
            <Item
              onClick={() => {
                showAccess();
              }}
            >
              <span>Access Management Solutions</span>
            </Item>
          )}
          {custom ? (
            <Item
              bg
              cl
              onClick={() => {
                showCustom();
              }}
            >
              <span>Custom Solutions</span>
            </Item>
          ) : (
            <Item
              onClick={() => {
                showCustom();
              }}
            >
              <span>Custom Solutions</span>
            </Item>
          )}
        </Navs>
        <Contents>
          {biometric ? (
            <Biometric />
          ) : cyberSecurity ? (
            <Cybersecurity />
          ) : payments ? (
            <Payment />
          ) : access ? (
            <Access />
          ) : custom ? (
            <Custom />
          ) : null}
        </Contents>
      </AccessMiddle>
    </AccessWrapper>
  );
};

export default SecurityAccess;
