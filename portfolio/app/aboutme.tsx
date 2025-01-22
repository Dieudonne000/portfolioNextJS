/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AboutMe = () => {
  return (
<div className="hero min-h-screen">
  <div className="rounded-3xl p-20 bg-[#075066]">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/Moi.jpg"
          alt="moi"
          className="max-w-[15rem] rounded-lg shadow-2xl" />
        <div>
          <h2 className="text-5xl font-bold">About me</h2>
          <p className="py-6 max-w-[50rem]">
            I'm Dieudonne, a frontend designer passionate about creating clean, user-friendly interfaces.<br></br>
            My main focus is on crafting responsive and visually appealing web experiences.<br></br>
            While my expertise lies in frontend development,<br></br>
            I also work on backend projects, ensuring seamless integration and functionality.<br></br>
            I'm always excited to take on new challenges and continue growing in the world of web development.<br></br>
          </p>
          <button className="btn border-0 bg-[#fbfeff] text-[#075066] px-10 hover:bg-[#175e91] hover:text-[#fbfeff]"> Get my resume</button>
        </div>
      </div>
  </div>
</div>
  )
}

export default AboutMe