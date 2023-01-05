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
  Item3,
  ItemWrapper3,
  Text3
} from "./HeaderStyle";
import chamsLogo from "../../../images/chamsLogo.svg";
import arrowDownIcon from "../../../images/arrowDownIcon.svg";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import WhoAreWe from "../navs/WhoWeAre";
import OurSolutions from "../navs/OurSolutions";
import OurSubsidiary from "../navs/OurSubsidiary";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [who, setWho] = useState(false);
  const [our, setOur] = useState(false);
  const [sub, setSub] = useState(false);

  const changeBuggerMenu = () => {
    setToggle(!toggle);
  };

  const closeBuggerMenu = () => {
    setToggle(false);
  };

  const showWhoWeAre = () => {
    setWho(true);
    setOur(false);
    setSub(false);
  };
  const showOur = () => {
    setWho(false);
    setOur(true);
    setSub(false);
  };
  const showSub = () => {
    setWho(false);
    setOur(false);
    setSub(true);
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
          <ItemWrapper
            onClick={() => {
              closeBuggerMenu();
              setToggle(!toggle);
              showWhoWeAre();
            }}
          >
            <Text>
              Who are we
              <span>
                <img src={arrowDownIcon} alt="arrowDown" />
              </span>
            </Text>
            {toggle && who ? (
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
              closeBuggerMenu();
              setToggle(!toggle);
              showOur();
            }}
          >
            <Text>
              Our solutions
              <span>
                <img src={arrowDownIcon} alt="arrowDown" />
              </span>
            </Text>
            {toggle && our ? (
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
          <ItemWrapper
            onClick={() => {
              closeBuggerMenu();
              setToggle(!toggle);
              showSub();
            }}
          >
            <Text>
            {toggle && sub ? (
              <Drop
                // hd
                onMouseLeave={() => {
                  setToggle(false);
                }}
              >
                <OurSubsidiary />
              </Drop>
            ) : null}
              Our subsidiaries
              <span>
                <img src={arrowDownIcon} alt="arrowDown" />
              </span>
            </Text>
          </ItemWrapper>
        </Item>
        <Item3>
          <ItemWrapper3
            style={{ marginRight: "40px" }}
            onClick={closeBuggerMenu}
          >
            <Text3>
              News and insights
            </Text3>
          </ItemWrapper3>
        </Item3>
        <RightNav>
          <Link to="/request-a-callback" style={{ textDecoration: "none" }}>
            <Request onClick={closeBuggerMenu}>Request a callback</Request>
          </Link>
          <Support onClick={closeBuggerMenu}>Support Center</Support>
        </RightNav>
      </Navs>
    </HeaderContainer>
  );
};

export default Header;
