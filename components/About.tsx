"use client";
import React from 'react';
import Image from "next/image";
import book from "@/assets/book.png";
import pc from "@/assets/pc.png";
import card from "@/assets/card.png";
import finance from "@/assets/finance.png";

const About = () => {
    return (
        <div className=" max-w-[1200px] mx-auto px-4" id="about">
            <h1 className="text-white text-6xl sm:text-5xl md:text-6xl max-w-[320px] mx-auto font-bold p-4 mb-4 flex w-full">
                About <span className="ml-2.5 text-orange-400">Me</span>
            </h1>

            <div className="w-full overflow-x-hidden grid grid-cols-1 md:grid-cols-8 gap-6 place-items-center">
                {/* Education Section */}
                <div className="w-full md:col-span-5 col-span-1 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-col md:flex-row p-6">
                        <Image src={book} alt="book-image" className="w-auto h-[100px] md:h-[130px] mx-auto" />
                        <div className="flex flex-col mt-4 text-center md:text-left">
                            <h2 className="text-xl font-bold text-white/80">Education</h2>
                            <p className="text-lg text-white/70 mt-2">I hold a Bachelor&apos;s degree in Computer Science and Engineering and I am focusing on technologies - Full Stack with Python, OWASP, and many more.</p>
                        </div>
                    </div>
                </div>

                {/* Problem-Solving Section */}
                <div className="w-full md:col-span-3 col-span-1 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-col md:flex-row p-6">
                        <Image src={finance} alt="finance-image" className="w-auto h-[100px] md:h-[130px] mx-auto" />
                        <div className="flex flex-col mt-4 text-center md:text-left">
                            <h2 className="text-xl font-bold text-white/80">Problem Solving</h2>
                            <p className="text-lg text-white/70 mt-2">I always have both logical and practical approach towards problems, which gives me the ability to think out of the box.</p>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="w-full md:col-span-3 col-span-1 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-col md:flex-row p-6">
                        <Image src={card} alt="card-image" className="w-auto h-[100px] md:h-[130px] mx-auto" />
                        <div className="flex flex-col mt-4 text-center md:text-left">
                            <h2 className="text-xl font-bold text-white/80">Experience</h2>
                            <p className="text-lg text-white/70 mt-2">I have a diverse portfolio of Projects.</p>
                        </div>
                    </div>
                </div>

                {/* Technical Skills Section */}
                <div className="w-full md:col-span-5 col-span-1 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-col md:flex-row p-6">
                        <Image src={pc} alt="pc-image" className="w-auto h-[100px] md:h-[130px] mx-auto" />
                        <div className="flex flex-col mt-4 text-center md:text-left">
                            <h2 className="text-xl font-bold text-white/80">Technical Skills</h2>
                            <p className="text-lg text-white/70 mt-2">C | JAVA | Python | HTML | CSS | JavaScript | MySQL | Node.js | React.js | Bootstrap | OWASP | Git | Express.js | MongoDB | GraphQL | Docker | AWS</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
