/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import {ReactTyped} from 'react-typed';

const Hero = () => {
  return (
    <div className="relative hero min-h-[40rem] pt-[3rem]">
      {/* Top-left icon */}
      <span className="absolute top-8 left-8">
        <img src="/Arrows.svg" alt="Icon 1" className="size-14 sm:size-[7rem] sm:ml-[8rem]" />
      </span>

      {/* Top-right icon */}
      <span className="absolute top-12 right-12">
        <img src="/arc.svg" alt="Icon 2" className="size-14 sm:size-[7rem] sm:ml-[12rem]" />
      </span>

      {/* Bottom-left icon */}
      <span className="absolute bottom-12 left-10">
        <img src="/cross.svg" alt="Icon 3" className="size-14 sm:size-[7rem] sm:ml-[10rem]" />
      </span>

      {/* Bottom-right icon */}
      <span className="absolute bottom-10 right-52">
        <img src="/triangle.svg" alt="Icon 4" className="size-14 sm:size-[7rem] sm:ml-[5rem]" />
      </span>

      <div className="hero-content text-center">
        <div className="max-w-max">
          <h1 className="text-2xl md::text-6xl sm:text-8xl font-bold transition-all duration-700 text-[#01566F] dark:text-[#fff]">
            Hi. I’m Dieudonne.<br />
            <ReactTyped
              className="text-[#31b0ff]"
              strings={['A Web Developer', 'A 3D Designer', 'A Programmer', 'A Student']}
              typeSpeed={60} // Speed of typing
              backSpeed={40} // Speed of deleting
              loop // Loops the typing animation
            />
          </h1>
          <p className="py-6 text-xl text-[#01566F] dark:text-[#fff] wel">Let’s Build Something Amazing Together</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
