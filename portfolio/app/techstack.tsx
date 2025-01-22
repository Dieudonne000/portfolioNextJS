'use client'
import { useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt } from "react-icons/fa";

const TechStack = () => {
    const [activeTab, setActiveTab] = useState("Frontend");
  
    const renderContent = () => {
      switch (activeTab) {
        case "Frontend":
          return (
            <div className="flex items-center space-x-4">
              <FaReact className="text-blue-500 text-4xl" />
              <p className="text-white">React, Next.js, Tailwind CSS</p>
            </div>
          );
        case "Backend":
          return (
            <div className="flex items-center space-x-4">
              <FaNodeJs className="text-green-500 text-4xl" />
              <p className="text-white">Node.js, Express.js</p>
            </div>
          );
        case "Others":
          return (
            <div className="flex items-center space-x-4">
              <FaDatabase className="text-yellow-500 text-4xl" />
              <p className="text-white">MongoDB, Firebase</p>
            </div>
          );
        case "Mobile":
          return (
            <div className="flex items-center space-x-4">
              <FaMobileAlt className="text-purple-500 text-4xl" />
              <p className="text-white">React Native, Flutter</p>
            </div>
          );
        default:
          return null;
      }
    };
  
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-[#01566F] p-20 rounded-3xl shadow-lg max-w-6xl w-full mx-4">
                <h2 className="text-center text-3xl font-bold text-white mb-6">Tech Stack</h2>
                <div className="flex justify-center">
          <div className="tabs tabs-boxed justify-center mb-6 rounded-2xl max-w-[30rem] p-2 bg-white !text-teal-600">
            {["Frontend", "Backend", "Others", "Mobile"].map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? "tab-active bg-[#01566F]" : ""}`}
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
  
