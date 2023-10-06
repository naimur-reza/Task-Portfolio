import React from "react";
import SideNav from "../components/shared/Sidenav";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import logo from "../assets/logo.svg";
const Main = () => {
  return (
    <div className="flex flex-col min-h-screen p-12 transition-all">
      <div className="flex-grow flex justify-between items-start">
        <SideNav />
        <img src={logo} className="w-20" alt="" />
        <div className="flex-grow flex justify-center items-center  absolute inset-0 -z-10 bg-black">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
