/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { useState } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

const Experience = () => {
    const [activeTab, setActiveTab] = useState("Experience");
  
    const renderContent = () => {
        switch (activeTab) {
            case "Experience":
                return (
                    <ul className="timeline timeline-snap-icon text-[#01566F] dark:text-white max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle">
                            <IoCheckmarkCircle />
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2023 up to now</time>
                            <div className="text-lg font-black">Fishot</div>
                            Developing a Fishlike robot to combat water pollution
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                            <IoCheckmarkCircle />
                            </div>
                            <div className="timeline-end md:mb-10">
                            <time className="font-mono italic">2025</time>
                            <div className="text-lg font-black">Intellix</div>
                            Currently working on a project involving ML and AI to improve accessiblity for the disabled
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                            <IoCheckmarkCircle />
                            </div>
                            <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2025</time>
                            <div className="text-lg font-black">Umurava tallent Challenge</div>
                            Working on the umurava talent
                            </div>
                        </li>
                    </ul>
                )
          case "Education":
            return (
                <ul className="timeline timeline-snap-icon text-[#01566F] dark:text-white max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                    <IoCheckmarkCircle />
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">2020-2023</time>
                    <div className="text-lg font-black">Groupe Scolaire officiel de Butare</div>
                            I completed my junior secondary studies at this school, from Grade 7 to Grade 9.
                            Visit their website here: <a className='link-accent link-hover' href="https://gsobindatwa.com/" target='blank'>GSOB Indatwa</a>
                     </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                    <IoCheckmarkCircle />
                    </div>
                    <div className="timeline-end md:mb-10">
                    <time className="font-mono italic">2023-now</time>
                    <div className="text-lg font-black">Rwanda Coding Academy</div>
                    I am currently studying at this school, focusing on Software Programming, Embedded Systems, and Cybersecurity.<br></br>
                    I expect to graduate in 2026.<br />
                    Visit the school's website: <a className='link-accent' href="https://www.rca.ac.rw/" target='blank'>RCA</a>
                    </div>
                </li>
            </ul>
            );
            default:
                return null;
        }
      };
  
    return (
      <div className="flex justify-center items-center min-h-screen overflow-auto">
        <div className="bg-white dark:bg-[#01566F] p-20 rounded-3xl shadow-lg max-w-6xl w-full mx-4">
                <h2 className="text-center text-3xl font-bold text-[#01566F] dark:text-white mb-6">Experience & Education</h2>
                <div className="flex justify-center">
          <div className="tabs gap-4 tabs-boxed justify-center mb-6 rounded-2xl max-w-[30rem] p-2 bg-[#01566F] dark:bg-white">
            {["Experience", "Education"].map((tab) => (
              <button
                key={tab}
                className={`tab transition-all duration-500 font-semibold ${activeTab === tab ? " rounded-full text-[#01566F] bg-white dark:bg-[#01566F] dark:text-white"
          : "text-white dark:text-[#01566f]"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
                    </div>
                    </div>
          <div className="p-6 rounded-lg">{renderContent()}</div>
        </div>
        </div>
    )
}

export default Experience