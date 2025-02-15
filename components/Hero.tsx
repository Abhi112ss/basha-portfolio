"use client"
import Image from "next/image";
import cursor from "@/assets/icon1.png"
import lighting from "@/assets/icon2.png";
import {motion} from "framer-motion";
import profilepic from "@/assets/basha.png"
import React from 'react';

const Hero = () => {
    return (
        <div className={"py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#281942_35%,#8F5C55_60%,#DBAF6E_80%)]"}>

            <div className={"absolute rounded-[50%] w-[3000px] h-[1300px] top-[450px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#281942)] outline-none"}></div>

            <div className={"relative"}>
                <div className={"text-8xl font-extrabold text-center "}>
                    <h1 className={"text-[#98B4CE]"}>Hi, Iam</h1>
                    <h1 className={"text-8xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent animate-color"}>Subhan
                        Basha</h1>
                </div>


                <motion.div className={"hidden md:block absolute left-[280px] top-[170px]"}
                            drag>
                    <Image src={cursor} alt={"setting-image"} height={190} width={190} className={""}
                           draggable={"false"}/>
                </motion.div>

                <motion.div className={"hidden md:block absolute right-[220px] top-[20px]"}
                            drag>
                    <Image src={lighting} alt={"setting-image"} height={120} width={120} className={""}
                           draggable={"false"}/>
                </motion.div>


                <p className={"text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80 mb-5"}>
                    I&apos;m a fullstack Developer and Python Programmer focused on creating interactive-dynamic webpages for
                    users.</p>

                {/* Profile Image with Rotating Border */}
                <div className="relative flex items-center justify-center mt-10 ">
                    {/* Rotating Border */}
                    <motion.div
                        className="absolute w-[400px] h-[400px] rounded-full border-[10px] border-transparent neon-border blur-sm"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    ></motion.div>

                    {/* Static Image */}
                    <div className="w-[400px] h-[400px] rounded-full overflow-hidden bg-transparent">
                        <Image src={profilepic} alt="Styled Image" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;