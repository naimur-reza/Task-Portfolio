import React from "react";
import SideNav from "../components/shared/Sidenav";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import logo from "../assets/logo.svg";
import videoBackground from "../assets/background.mp4";
import "./Main.css";
const Main = () => {
  return (
    <div className="flex flex-col min-h-screen px-14 py-12 transition-all">
      <video
        src={videoBackground}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="flex-grow flex justify-between items-start ">
        <div className="z-10">
          <SideNav />
        </div>
        <img src={logo} className="w-20 z-10" alt="" />
        <div className="flex-grow flex  justify-center items-center  absolute inset-0  fade-bg">
          <Outlet />
        </div>
      </div>
      <div className="z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
