"use client"
import React from 'react';
import Image from "next/image";
import mail from "@/assets/mail.png";

const Contact = () => {
    return (
        <div className="w-full overflow-x-hidden max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8" id="contact">
            {/* Contact Info Section */}
            <div className="flex justify-center items-center w-full">
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <Image src={mail} alt="mail" className="h-[80px] w-[70px] mr-6"/>
                        <p className="text-md font-bold max-w-xs sm:max-w-sm md:max-w-md break-words">subhanbasha6303@gmail.com</p>
                    </li>
                </ul>
            </div>

            {/* Form Section */}
            <div className="bg-white/10 p-6 rounded-xl w-full max-w-[550px] mx-auto">
                <h2 className="text-5xl font-bold text-orange-400 mb-4 text-center">Let&apos;s Connect</h2>
                <p className="text-white/70 mb-6 text-center">Send a Message and let&apos;s Schedule a Call!</p>
                
                <form className="space-y-4" action="https://getform.io/f/bqokoevb" method="POST">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" name="name" className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="First Name"/>
                        <input type="text" name="lastname" className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Last Name"/>
                        <input type="email" name="email" className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Email"/>
                        <input type="phone" name="phone" className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Phone"/>
                    </div>
                    <textarea className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Message"></textarea>
                    <button className="bg-orange-800 hover:bg-orange-400 cursor-pointer text-white px-6 py-2 w-full font-semibold text-xl rounded-xl">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
