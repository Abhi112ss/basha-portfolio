"use client"
import React from 'react';
import {FaHtml5,FaCss3Alt, FaReact, FaJsSquare, FaDocker,FaNodeJs,FaPython} from "react-icons/fa";

const skillIcons = [
    {icon: <FaHtml5 size={140}/>, label: "HTML5"},
    {icon: <FaCss3Alt size={140}/>, label: "CSS3"},
    {icon: <FaPython size={140}/>, label: "Python"},
    {icon: <FaJsSquare size={140}/>, label: "Javascript"},
    {icon: <FaDocker size={140}/>, label: "Docker"},
    {icon: <FaReact size={140}/>, label: "React"},
    {icon: <FaNodeJs size={140}/>, label: "Node.js"},
]

const Skills = () => {
    return (
        <div className={"w-full overflow-x-hidden bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32"}>

            <div className={"text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center"}>
                <h2 className={"text-6xl font-bold mb-4"}>What I do ?</h2>
                <div className={"grid grid-cols-2 md:grid-cols-4 gap-6"}>
                    {skillIcons.map((skill, index) => (
                        <div key={index} className={"h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl cursor-pointer"}>
                            {skill.icon}
                            <p className={"mt-2"}>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Skills;