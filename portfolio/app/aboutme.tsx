/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AboutMe = () => {
  return (
<div className="hero min-h-screen ">
  <div className="rounded-3xl p-7 sm:p-20 bg-[#FFF] dark:bg-[#075066]">
      <div className="hero-content sm:max-w-[80rem] max-w-[20rem] flex-col lg:flex-row">
        <img
          src="/Moi.jpg"
          alt="moi"
          className="max-w-[9rem] sm:max-w-[15rem] rounded-lg shadow-2xl" />
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold transition-all duration-700 text-[#075066] dark:text-white">About me</h2>
          <p className="text-sm sm:text-base py-4 sm:py-6 sm:max-w-[50rem] text-[#075066] transition-all duration-700 dark:text-white">
            I'm Dieudonne, a frontend designer passionate about creating clean, user-friendly interfaces.<br></br>
            My main focus is on crafting responsive and visually appealing web experiences.<br></br>
            While my expertise lies in frontend development,<br></br>
            I also work on backend projects, ensuring seamless integration and functionality.<br></br>
            I'm always excited to take on new challenges and continue growing in the world of web development.<br></br>
          </p>
          <a href="/resume.pdf" download="My_Resume_jean_Dieudonne.pdf">
            <button className="btn border-0 bg-[#a5e5ff] border-[#075066] text-[#075066] px-10 hover:bg-[#175e91] hover:text-[#fbfeff]">
              Get my resume
            </button>
          </a>
        </div>
      </div>
  </div>
</div>
  )
}

export default AboutMe