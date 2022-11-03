import React, { useState } from "react";
import {
  HeaderContainer,
  LeftNav,
  RightNav,
  ImageLink,
  Navs,
  Item,
  ItemWrapper,
  ImageWrapper,
  Request,
  Support,
} from "./HeaderStyle";
import chamsLogo from "../../../images/chamsLogo.svg";
import arrowDownIcon from "../../../images/arrowDownIcon.png";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  // change bugger menu
  const changeBuggerMenu = () => {
    setToggle(!toggle);
  };

  // close bugger menu
  const closeBuggerMenu = () => {
    setToggle(false);
  };

  return (
    <HeaderContainer>
      <LeftNav>
        <ImageWrapper>
          <ImageLink src={chamsLogo} alt="chamsLogo" />
        </ImageWrapper>
        <Navs>
          <Item>
            <ItemWrapper>
              Who are we
              <span>
                <img src={arrowDownIcon} alt="arrowDown" />
              </span>
            </ItemWrapper>
          </Item>
          <Item>
            <ItemWrapper>
              Our solutions
              <span>
                <img src={arrowDownIcon} alt="arrowDown" />
              </span>
            </ItemWrapper>
          </Item>
          <Item>
            <ItemWrapper>
              Our subsidiaries
              <span>
                <img src={arrowDownIcon} alt="arrowDown" />
              </span>
            </ItemWrapper>
          </Item>
          <Item>
            <ItemWrapper>
              News and insights
              <span>
                <img src={arrowDownIcon} alt="arrowDown" />
              </span>
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
