/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import {ReactTyped} from 'react-typed';

const Hero = () => {
  return (
    <div className="relative hero min-h-[40rem] pt-[3rem]">
      {/* Top-left icon */}
      <div className="absolute top-8 left-8">
        <img src="/Arrows.svg" alt="Icon 1" className="w-25 h-25 ml-[8rem]" />
      </div>

      {/* Top-right icon */}
      <div className="absolute top-12 right-12">
        <img src="/arc.svg" alt="Icon 2" className="w-25 h-25 mr-[12rem]" />
      </div>

      {/* Bottom-left icon */}
      <div className="absolute bottom-12 left-10">
        <img src="/cross.svg" alt="Icon 3" className="w-25 h-25 ml-[10rem]" />
      </div>

      {/* Bottom-right icon */}
      <div className="absolute bottom-10 right-14">
        <img src="/triangle.svg" alt="Icon 4" className="w-25 h-25 mr-[14rem] mb-[5rem]" />
      </div>

      <div className="hero-content text-center">
        <div className="max-w-max">
          <h1 className="text-8xl font-bold">
            Hi. I’m Dieudonne.<br />
            <ReactTyped
              className="text-[#31b0ff]"
              strings={['A Web Developer', 'A 3D Designer', 'A Programmer', 'A Student']}
              typeSpeed={60} // Speed of typing
              backSpeed={40} // Speed of deleting
              loop // Loops the typing animation
            />
          </h1>
          <p className="py-6 text-xl wel">Let’s Build Something Amazing Together</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
