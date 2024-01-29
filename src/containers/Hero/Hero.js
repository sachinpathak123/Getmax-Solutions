import React,  { useEffect , useRef,useState} from 'react'
import {Card }from "../../components"
import "./Hero.css"
import AUlogo from '../../assets/AboutUs.svg'
import solutions from '../../assets/solutions.svg'
import careers from '../../assets/careers.svg'
import team from '../../assets/team.svg'
import blogs from '../../assets/blogs.svg'
import contactus from "../../assets/contactus.svg"
import getMaxLogo from "../../assets/getMaxLogo.svg"
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import {NavBar} from '../../components'
import {Link} from 'react-router-dom'
import {Link as ScrollLink} from 'react-scroll'


function Hero() {
  return (
    <div class="sect">
      <div class="first-sect">
        <div class="first-view">
        <div class="first-heading">
        GETMAX SOLUTIONS <br /><span class="head-part">WELCOMES&nbsp;</span>YOU
        </div>
        <h2 class="first-descrip">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sed dicta ex <br />molestiae, officiis corrupti dolorum dolore ipsam tempore reprehenderit?
        </h2>
        <button class="btn">
        Lets get started!
        </button>
        </div>
      </div>
      <div class="second-sect">
       <img src="/hero-img.png" alt="an image is there" class="second-img" />
      </div>
    </div>
  )
}


export default Hero