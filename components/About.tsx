"use client";
import React from 'react';
import Image from "next/image";
import book from "@/assets/book.png";
import pc from "@/assets/pc.png";
import card from "@/assets/card.png";
import finance from "@/assets/finance.png";

const About = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-4" id="about">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">
                About <span className="text-orange-400">Me</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card Component */}
                {[
                    { img: book, title: "Education", desc: "I hold a Bachelor&apos;s degree in Computer Science and focus on Full Stack with Python, OWASP, and more." },
                    { img: finance, title: "Problem Solving", desc: "I have a logical and practical approach to problem-solving, allowing me to think outside the box." },
                    { img: card, title: "Experience", desc: "I have a diverse portfolio of projects, demonstrating my ability to build innovative solutions." },
                    { img: pc, title: "Technical Skills", desc: "C | Java | Python | HTML | CSS | JavaScript | MySQL | Node.js | React.js | MongoDB | AWS & more." }
                ].map((item, index) => (
                    <div key={index} className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-md">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                        <div className="flex flex-col items-center text-center">
                            <Image src={item.img} alt={item.title} width={80} height={80} className="h-auto w-20 md:w-24" />
                            <h2 className="text-lg font-bold text-white/80 mt-4">{item.title}</h2>
                            <p className="text-white/70 text-sm md:text-base mt-2">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
