"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaDocker,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

const skillIcons = [
  { icon: <FaHtml5 className="text-orange-500" />, label: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS3" },
  { icon: <FaPython className="text-yellow-400" />, label: "Python" },
  { icon: <FaJsSquare className="text-yellow-500" />, label: "JavaScript" },
  { icon: <FaDocker className="text-blue-400" />, label: "Docker" },
  { icon: <FaReact className="text-cyan-400" />, label: "React" },
  { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
];

const Skills = () => {
  return (
    <div className="w-full bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
      <div className="text-white w-[90%] max-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">What I do?</h2>
        {/* Responsive Grid: Adjusts layout based on screen width */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {skillIcons.map((skill, index) => (
            <button
              key={index}
              className="flex flex-col items-center justify-center bg-white/10 p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/20 focus:ring-2 focus:ring-orange-400"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl">{skill.icon}</div>
              <p className="mt-2 text-sm md:text-lg font-semibold">{skill.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
