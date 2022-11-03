import React from 'react'
import Header from '../landingPage/header/Header'
import Hero from "../landingPage/hero/Hero"
import {MainWrapper} from './mainStyle'
import SecurityAccess from '../landingPage/securityAccess/SecurityAccess'


const Main = () => {
  return (
    <MainWrapper>
        <Header />
        <Hero />
        <SecurityAccess />
    </MainWrapper>
  )
}

export default Main