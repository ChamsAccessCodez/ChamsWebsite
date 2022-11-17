import React, { useState } from "react";
import {
  HeaderContainer,
  LeftNav,
  RightNav,
  ImageLink,
  Navs,
  Item,
  ItemWrapper,
  ItemWrapper2,
  ImageWrapper,
  Request,
  Support,
  Drop,
  Text,
} from "./HeaderStyle";
import chamsLogo from "../../../images/chamsLogo.svg";
import arrowDownIcon from "../../../images/arrowDownIcon.svg";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import WhoAreWe from "../navs/WhoWeAre";
import OurSolutions from "../navs/WhoWeAre";

const Header = () => {
  // change bugger menu
  const changeBuggerMenu = () => {
    setToggle(!toggle);
  };

  // close bugger menu
  const closeBuggerMenu = () => {
    setToggle(false);
  };

  const [toggle, setToggle] = useState(false);

  return (
    <HeaderContainer>
      <LeftNav>
        <ImageWrapper>
          <Link to="/">
            <ImageLink src={chamsLogo} alt="chamsLogo" />
          </Link>
        </ImageWrapper>
        <Navs>
          <Item>
            <ItemWrapper
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <Text>
                Who are we
                <span>
                  <img src={arrowDownIcon} alt="arrowDown" />
                </span>
              </Text>
              {toggle ? (
                <Drop
                  // hd
                  onMouseLeave={() => {
                    setToggle(false);
                  }}
                >
                  <WhoAreWe />
                </Drop>
              ) : null}
            </ItemWrapper>
          </Item>
          <Item>
            <ItemWrapper2
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <Text>
                Our solutions
                <span>
                  <img src={arrowDownIcon} alt="arrowDown" />
                </span>
              </Text>
              {toggle ? (
                <Drop
                  // hd
                  onMouseLeave={() => {
                    setToggle(false);
                  }}
                >
                  <OurSolutions />
                </Drop>
              ) : null}
            </ItemWrapper2>
          </Item>
          <Item>
            <ItemWrapper>
              <Text>
                Our subsidiaries
                <span>
                  <img src={arrowDownIcon} alt="arrowDown" />
                </span>
              </Text>
            </ItemWrapper>
          </Item>
          <Item>
            <ItemWrapper>
              <Text>
                News and insights
                <span>
                  <img src={arrowDownIcon} alt="arrowDown" />
                </span>
              </Text>
            </ItemWrapper>
          </Item>
        </Navs>
      </LeftNav>
      <RightNav>
        <Request>Request a callback</Request>
        <Support>Support Center</Support>
      </RightNav>
    </HeaderContainer>
  );
};

export default Header;
