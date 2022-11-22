
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
  BurgerMenu,
} from "./HeaderStyle";
import chamsLogo from "../../../images/chamsLogo.svg";
import arrowDownIcon from "../../../images/arrowDownIcon.svg";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import WhoAreWe from "../navs/WhoWeAre";
import OurSolutions from "../navs/WhoWeAre";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const changeBuggerMenu = () => {
    setToggle(!toggle);
  };

  const closeBuggerMenu = () => {
    setToggle(false);
  };

  return (
    <HeaderContainer>
      <LeftNav>
        <ImageWrapper>
          <Link to="/">
            <ImageLink src={chamsLogo} alt="chamsLogo" />
          </Link>
        </ImageWrapper>
      </LeftNav>
      <BurgerMenu onClick={changeBuggerMenu}>
        {toggle ? (
          <RiCloseFill size={40} style={{ fill: "red" }} />
        ) : (
          <RiMenu4Line size={40} style={{ fill: "#002644" }} />
        )}
      </BurgerMenu>
      <Navs onclick={changeBuggerMenu} toggle={toggle}>
        <Item onclick={changeBuggerMenu}>
          <ItemWrapper  onClick={closeBuggerMenu}
          // onClick={() => {
          //   setToggle(!toggle);
          // }}
          >
            <Text>
              Who are we
              <span>
                <img src={arrowDownIcon} alt="arrowDown" />
              </span>
            </Text>
            {/* {toggle ? (
                <Drop
                  // hd
                  onMouseLeave={() => {
                    setToggle(false);
                  }}
                >
                  <WhoAreWe />
                </Drop>
              ) : null} */}
          </ItemWrapper>
        </Item>
        <Item>
          <ItemWrapper2  onClick={closeBuggerMenu}
          // onClick={() => {
          //   setToggle(!toggle);
          // }}
          >
            <Text>
              Our solutions
              <span>
                <img src={arrowDownIcon} alt="arrowDown" />
              </span>
            </Text>
            {/* {toggle ? (
                <Drop
                  // hd
                  onMouseLeave={() => {
                    setToggle(false);
                  }}
                >
                  <OurSolutions />
                </Drop>
              ) : null} */}
          </ItemWrapper2>
        </Item>
        <Item>
          <ItemWrapper  onClick={closeBuggerMenu}>
            <Text>
              Our subsidiaries
              <span>
                <img src={arrowDownIcon} alt="arrowDown" />
              </span>
            </Text>
          </ItemWrapper>
        </Item>
        <Item>
          <ItemWrapper  onClick={closeBuggerMenu}>
            <Text>
              News and insights
              <span>
                <img src={arrowDownIcon} alt="arrowDown" />
              </span>
            </Text>
          </ItemWrapper>
        </Item>
        <RightNav>
          <Link to="/callback" style={{ textDecoration: "none" }}>
            <Request  onClick={closeBuggerMenu}>Request a callback</Request>
          </Link>
          <Support  onClick={closeBuggerMenu}>Support Center</Support>
        </RightNav>
      </Navs>
    </HeaderContainer>
  );
};

export default Header;
