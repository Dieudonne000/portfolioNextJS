/* eslint-disable react/no-unescaped-entities */
import React from 'react'
// import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"

const Hero = () => {
  return (
    <div className="hero min-h-[40rem] pt-[10rem]">
  <div className="hero-content text-center">
    <div className="max-w-max">
    <h1 className="text-8xl font-bold">
    Hi.I’m Dieudonne.<br></br>
    A Web developer
    </h1>
      <p className="py-6">
            I'd be happy to work with you
          </p>
          {/* <span><MdOutlineKeyboardDoubleArrowDown /></span> */}
          {/* <button className="btn btn-primary">Get Started</button> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-angles-down" bounce /> */}
        </div>
      </div>
      
</div>
  )
}

export default Hero