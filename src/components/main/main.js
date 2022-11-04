import React from 'react'
import Header from '../landingPage/header/Header'
import Hero from "../landingPage/hero/Hero"
import SecurityAccess from '../landingPage/securityAccess/SecurityAccess'
import About  from '../landingPage/about/About'
import {MainWrapper} from './mainStyle'


const Main = () => {
  return (
    <MainWrapper>
        <Header />
        <Hero />
        <SecurityAccess />
        <About />
    </MainWrapper>
  )
}

export default Main