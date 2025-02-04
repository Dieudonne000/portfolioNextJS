/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaEye } from "react-icons/fa6";

const projects = [
  {
    title: "Fishot",
    image: "/fishot.jpg",
    description: "Fishot is a fish robot that cleans water by removing plastic using AI and sensors. It finds and collects plastic while protecting marine life. It operates autonomously and reports pollution levels for cleaner waters.",
  },
  {
    title: "Intellix",
    image: "/intellix.png",
    description: "Intellix is an innovative, AI-powered virtual assistant designed to support people with sensory disabilities—specifically, the blind, deaf, and nonverbal.",
  },
  {
    title: "3D project: Jeep",
    image: "/jeep.png",
    description: "One of my favourite  3d creation in blender. Completely modeled in blender, took inspiration from Bruno Simon",
  }
];

const ProjectsCarousel = () => {
  return (
    <div className="text-white py-12 px-6">
      <h2 className="text-center text-3xl font-bold mb-8 text-[#01566F] dark:text-white">Projects</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-[#01566F] rounded-lg shadow-lg overflow-auto max-w-sm h-[26rem] relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-100 text-sm">{project.description}</p>
              </div>
              <button className="btn btn-disabled absolute bottom-4 right-4">
                  <FaEye />
                  view project
                </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsCarousel;
