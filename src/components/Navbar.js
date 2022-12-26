import React from "react";
import { FaBars, FaBell } from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import { FiGift } from "react-icons/fi";
import { useGlobalContext } from "../context/Context";

const Navbar = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <nav
      className={`${
        isSidebarOpen
          ? "nav w-full pl-80 bg-white flex items-center justify-between px-10 py-4 transition-all duration-75 ease-linear"
          : "nav w-full bg-white flex items-center justify-between px-10 py-4 transition-all duration-300 ease-linear"
      }`}
    >
      <div className="flex items-center">
        <button
          className={`${
            isSidebarOpen ? "nav-toggle" : "text-green-600 mr-4 w-2 cursor-pointer"
          }`}
          onClick={openSidebar}
        >
          <FaBars />
        </button>
        <h1 className="capitalize font-bold">dashboard</h1>
      </div>
      {/* profile section */}
      <div className="flex items-center px-2 mr-6">
        <div className="text-green-600 mr-4 border-slate-200 border p-2 rounded-[50%]">
          <FaBell />
          <div className="absolute top-[-0.01rem] right-[22.2rem] mt-2 flex items-center justify-center rounded-[50%] bg-green-600 text-white w-[1rem] px-[0.75rem] py-[0.1rem]">
            <p className="text-xs">12</p>
          </div>
        </div>
        <div className="text-green-600 mr-4 border-slate-200 border p-2 rounded-[50%]">
          <BiMessageAltDetail />
          <div className="absolute top-[-0.01rem] right-[19.1rem] mt-2 flex items-center justify-center rounded-[50%] bg-green-600 text-white w-[1rem] px-[0.75rem] py-[0.1rem]">
            <p className="text-xs">5</p>
          </div>
        </div>
        <div className="mr-4 border-slate-200 border p-2 rounded-[50%]">
          <FiGift />
          <div className="absolute top-[-0.01rem] right-[16rem] mt-2 flex items-center justify-center rounded-[50%] bg-black text-white w-[1rem] px-[0.75rem] py-[0.1rem]">
            <p className="text-xs">2</p>
          </div>
        </div>
        <div className="flex items-center bg-gray-200 pr-5 rounded-3xl">
          <img
            src="https://res.cloudinary.com/dy0yctvyp/image/upload/v1671829377/csr-challenge/pic1_zngj0v.webp"
            alt="profile"
            className="w-10 rounded-[50%] mr-2"
          />
          <h2 className="text-green-600 font-bold capitalize">
            hello, roberto
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
