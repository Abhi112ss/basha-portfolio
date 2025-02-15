"use client"
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";  // ✅ Fixed import
import project from "@/assets/events.png";
import project1 from "@/assets/project1.png";

const projects = [
    {
        title: "House Price Prediction",
        desc: "This project is a house price prediction system that estimates property prices based on various features, with a focus on properties in Bangalore.",
        devStack: "Python, Scikit-Learn, Pandas, Numpy, FrontEnd",
        link: "https://github.com/Subhn/HousePricePrediction",
        git: "https://github.com/Subhn/HousePricePrediction",
        src: project1,
    },
    {
        title: "Event Management",
        desc: "Uses Various Backend Services to handle various events efficiently and optimally",
        devStack: "Python, Express.js",
        link: "https://github.com/Subhn/event-management-backend",
        git: "https://github.com/Subhn/event-management-backend",
        src: project
    }
];

const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">

            <h1 className={"text-white text-6xl max-w-[320px] mx-auto font-bold p-4 my-12"}>Selected <span
                className={"text-orange-400"}>Projects</span></h1>


            <div className=" max-w-[1200px] mx-auto mt-40 space-y-24">  {/* ✅ Fixed max-width */}
                {projects.map((project, index) => (
                    <motion.div key={index}
                                initial={{opacity: 0, y: 75}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: 0.25}}
                                className={`mt-12 flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} gap-12`}
                    >
                        <div className="space-y-2 max-w-[550px]">
                            <h2 className={"text-7xl font-extrabold my-4 text-white/70"}>{`0${index + 1}`}</h2>
                            <h2 className={"text-4xl font-bold"}>{project.title}</h2>
                            <p className={"text-lg text-white/70 font-semibold break-words p-4"}>{project.desc}</p>
                            <p className={"text-xl text-orange-400 font-semibold"}>{project.devStack}</p>
                            <div className="w-64 bg-gray-400 my-4 h-[1px]"></div>
                            {/* ✅ Fixed div */}
                            <div>
                                <a href={project.link} className="mr-6 text-blue-500 hover:underline">Link</a>
                                <a href={project.git} className="text-blue-500 hover:underline">Git</a>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <Image src={project.src} alt={project.title}
                                   className={`h-auto w-full max-w-[500px] object-contain border-2 border-yellow-400 rounded-2xl ${index === 1 ? "border-[5px] border-r-gray-300 md:mt-5 mb-5" : "border-[5px] border-l-gray-300 md:mt-2 mb-5"} `}/> {/* ✅ Fixed Image */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
