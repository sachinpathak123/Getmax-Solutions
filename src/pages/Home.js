import React from 'react'
import { Hero , About ,Contact  , Team,Solutions ,Clients} from "../containers"
import { NavBar } from '../components'
import Intro from '../containers/Intro/Intro'

const Home = () => {
  return (
    <>
        <NavBar />
        <Hero/>
        <Intro />
        {/* <About/>
        <Solutions/> */}
        <Clients/>
        <Team/>
        <Contact/>
    </>
  )
}

export default Home