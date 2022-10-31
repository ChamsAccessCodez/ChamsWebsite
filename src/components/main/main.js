import React from 'react'
import Header from '../landingPage/header/Header'
import Hero from "../landingPage/hero/Hero"
import {MainWrapper} from './mainStyle'


const Main = () => {
  return (
    <MainWrapper>
        <Header />
        <Hero />
    </MainWrapper>
  )
}

export default Main