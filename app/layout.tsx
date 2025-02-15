import type { Metadata } from "next";
import { Geist, Geist_Mono ,Poppins} from "next/font/google";
import "./globals.css";
import React from "react";
import {color} from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
    weight: ["100","200","300","400","500","600","700","800","900"],
    subsets:["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subhan's World",
  description: "Explore my world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
