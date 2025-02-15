import React from 'react';
import {FaLinkedin, FaGithub} from "react-icons/fa";

// const footerIcons = [
//     {icon: <FaLinkedin />, name: 'Linkedin'},
//     {icon: <FaInstagram />, name: 'Instagram'},
//     {icon: <FaGithub />, name: 'Github'},
// ]

const Footer = () => {
    return (
        <div className={"w-full overflow-x-hidden mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center"}>
            <h1 className={"w-full overflow-x-hidden text-xl font-bold"}>Made for Subhan Basha</h1>

            <div className={"flex space-x-5 mt-4"}>
                <a href="https://www.linkedin.com/in/subhanbasha6303" className={"hover:text-gray-300"}>
                    <FaLinkedin size={24}/>
                </a>
                <a href="https://github.com/Subhn/" className={"hover:text-gray-300"}>
                    <FaGithub size={24}/>
                </a>
            </div>
        </div>
    );
};

export default Footer;
