import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="flex items-center justify-between text-white">
      <div>
        <h1 className="text-2xl tracking-wider   pb-1">DUSTIN FARRELL</h1>
        <p>DIRECTOR OF PHOTOGRAPHY</p>
      </div>
      <div className="flex items-center gap-4 text-white/50">
        <p className="pr-4   border-r border-gray-500">
          © {new Date().getFullYear()} Dustin Farrell Visual Concepts
        </p>
        <div className="flex items-center gap-4 ">
          <BsFacebook
            className="hover:text-white transition-all cursor-pointer"
            size={20}
          />
          <AiOutlineTwitter
            className="hover:text-white transition-all cursor-pointer"
            size={20}
          />
          <BsYoutube
            className="hover:text-white transition-all cursor-pointer"
            size={20}
          />
          <FaInstagram
            className="hover:text-white transition-all cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
