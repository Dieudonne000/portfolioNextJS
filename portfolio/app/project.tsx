import React from 'react'
import ProjectsCarousel from './projectCarousel'

const Project = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
        <div className="p-5 sm:p-20 rounded-3xl max-w-6xl w-full mx-1 sm:mx-4">
          <ProjectsCarousel />
        </div>
      </div>
  )
}

export default Project