import React from "react";
import { CiFacebook } from "react-icons/ci";
import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl tracking-wider text-gray-700 pb-1">
          DUSTIN FARRELL
        </h1>
        <p>DIRECTOR OF PHOTOGRAPHY</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="pr-4   border-r border-gray-500">
          © {new Date().getFullYear()} Dustin Farrell Visual Concepts
        </p>
        <div className="flex items-center gap-3">
          <CiFacebook size={20} />
          <AiOutlineTwitter size={20} />
          <BsYoutube size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
