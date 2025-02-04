'use client'
import { useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { FaHtml5, FaJs, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFirebase, SiPython,SiCplusplus, SiBlender } from "react-icons/si";
import { CiMobile1 } from "react-icons/ci";

const TechStack = () => {
    const [activeTab, setActiveTab] = useState("Frontend");
  
    const renderContent = () => {
        switch (activeTab) {
          case "Frontend":
            return (
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center">
                  <FaReact className="text-blue-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">React</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiNextdotjs className="text-white text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">Next.js</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiTailwindcss className="text-blue-400 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaHtml5 className="text-orange-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">HTML</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaJs className="text-yellow-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">JavaScript</p>
                </div>
              </div>
            );
          case "Backend":
            return (
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <FaNodeJs className="text-green-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">Node.js</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiExpress className="text-gray-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">Express.js</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaPhp className="text-indigo-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">PHP</p>
                </div>
              </div>
            );
          case "Others":
            return (
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <SiMongodb className="text-green-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">MongoDB</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiFirebase className="text-yellow-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">Firebase</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiPython className="text-blue-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">Python</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiCplusplus className="text-purple-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">C++</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaDatabase className="text-yellow-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">C</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiBlender className="text-orange-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">Blender</p>
                </div>
              </div>
            );
          case "Mobile":
            return (
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <FaMobileAlt className="text-purple-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">React Native</p>
                </div>
                <div className="flex flex-col items-center">
                  <CiMobile1 className="text-green-500 text-4xl" />
                  <p className=" text-[#01566F] dark:text-white">Kivy</p>
                </div>
              </div>
            );
          default:
            return null;
        }
      };
  
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-[#ffffff] dark:bg-[#01566F] p-20 rounded-3xl shadow-lg max-w-6xl w-full mx-4 h-[30rem]">
                <h2 className="text-center text-3xl text-[#01566F] font-bold dark:text-white mb-6">Tech Stack</h2>
                <div className="flex justify-center">
          <div className="tabs gap-4 tabs-boxed justify-center mb-6 rounded-2xl max-w-[30rem] p-2 bg-[#01566F] dark:bg-white">
            {["Frontend", "Backend", "Others", "Mobile"].map((tab) => (
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
    );
  };
  
  export default TechStack;
  
