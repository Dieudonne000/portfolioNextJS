/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaEye } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const projects = [
  {
    title: "Fishot",
    image: "/fishot.jpg",
    description:
      "Fishot is a fish robot that cleans water by removing plastic using AI and sensors. It finds and collects plastic while protecting marine life.",
    link: "/projects/fishot",
    isReady: false,
    isDownloadable: false,
  },
  {
    title: "Intellix",
    image: "/intellix.png",
    description:
      "Intellix is an innovative, AI-powered virtual assistant designed to support people with sensory disabilities—specifically, the blind, deaf, and nonverbal.",
    link: "/projects/intellix",
    isReady: false, // Not ready yet
    isDownloadable: false,
  },
  {
    title: "3D project: Jeep",
    image: "/jeep.png",
    description:
      "One of my favourite 3D creations in Blender. Completely modeled in Blender, took inspiration from Bruno Simon.",
    link: "/jeep.zip", // File download
    isReady: true,
    isDownloadable: true,
  },
];

const ProjectsCarousel = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showNotReadyModal, setShowNotReadyModal] = useState(false);

  const handleButtonClick = (project) => {
    if (!project.isReady) {
      setShowNotReadyModal(true);
    } else {
      setSelectedProject(project);
      setShowModal(true);
    }
  };

  const handleConfirmNavigation = () => {
    if (selectedProject) {
      if (selectedProject.isDownloadable) {
        const link = document.createElement("a");
        link.href = selectedProject.link;
        link.download = selectedProject.title;
        link.click();
      } else {
        window.open(selectedProject.link, "_blank");
      }
      setShowModal(false);
    }
  };

  return (
    <div className="text-white py-2 sm:py-12 px-0 sm:px-6">
      <h2 className="text-center text-3xl font-bold mb-8 text-[#01566F] dark:text-white">
        Projects
      </h2>
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
            <div className="bg-slate-50 dark:bg-[#01566F] rounded-lg shadow-lg overflow-auto max-w-sm h-[26rem] relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-[#01566F] dark:text-white text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-[#072f3b] dark:text-gray-100">
                  {project.description}
                </p>
              </div>
              <button
                className="absolute bottom-6 sm:bottom-4 right-4 btn z-10 bg-[#0c92c3] border-0 hover:bg-[#01566F] text-white"
                onClick={() => handleButtonClick(project)}
              >
                <FaEye />
                View Project
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Not Ready Modal */}
      <dialog id="notReadyModal" className={`modal ${showNotReadyModal ? "modal-open" : ""}`}>
        <div className="modal-box bg-white dark:bg-[#01566F] min-h-[10rem]">
          <button
            className="absolute top-2 right-2 text-[#01566f] dark:text-gray-100 hover:text-[#0c303b]"
            onClick={() => setShowNotReadyModal(false)}
          >
            <IoClose size={24} />
          </button>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-50">Project Not Ready</h2>
          <p className="text-gray-600 dark:text-gray-50 mt-2">
            This project is not ready yet. Please check back later.
          </p>
        </div>
      </dialog>

      {/* Confirmation Modal */}
      <dialog id="confirmModal" className={`modal ${showModal ? "modal-open" : ""}`}>
        <div className="modal-box bg-white dark:bg-[#01566F]">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowModal(false)}
          >
            <IoClose size={24} />
          </button>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-50">Proceed?</h2>
          <p className="text-gray-600 dark:text-gray-50 mt-2">
            {selectedProject?.isDownloadable
              ? "This is a downloadable project. Do you want to download it?"
              : "Do you want to visit the project page?"}
          </p>
          <div className="modal-action">
            <button
              className="btn btn-sm bg-gray-200 text-gray-800 border-0 hover:bg-gray-400"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-sm bg-[#0c92c3] text-white border-0 hover:bg-[#0b3541]"
              onClick={handleConfirmNavigation}
            >
              Confirm
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProjectsCarousel;
