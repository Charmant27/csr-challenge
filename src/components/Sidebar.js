import React, { useState, useEffect } from "react";
import {
  FaHospitalUser,
  FaDesktop,
  FaChartArea,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsShieldPlus, BsServer } from "react-icons/bs";
import { SlArrowRight, SlLayers } from "react-icons/sl";
import { TbNotebook, TbWorld } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { GrSettingsOption } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
import { useGlobalContext } from "../context/Context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const [date, setDate] = useState();

  useEffect(() => {
    const today = new Date().getFullYear();
    setDate(today);
  }, [date]);

  return (
    <div
      className={`${
        isSidebarOpen
          ? "sidebar fixed top-0 left-0 bg-white shadow-lg w-72 h-screen overflow-y-scroll transition-all duration-700 ease-linear"
          : "side"
      }`}
    >
      <div className="close-toggle absolute right-4 top-4">
        <button
          className="text-green-600 mr-4 w-2 cursor-pointer"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>
      <div className="flex items-center pl-5 py-4 font-extrabold text-2xl text-green-600">
        <div className="mr-3">
          <BsShieldPlus />
        </div>
        <h2 className="uppercase">eres</h2>
      </div>
      {/* menu */}
      <div className="flex items-center py-4 px-6 text-slate-500">
        <div className="pr-4">
          <TbNotebook />
        </div>
        <h2 className="capitalize text-base pr-4">dashboard</h2>
        <div className="text-xs cursor-pointer ml-16">
          <SlArrowRight />
        </div>
      </div>

      <div className="flex items-center py-4 px-6 text-slate-500">
        <div className="pr-4">
          <CgNotes />
        </div>
        <h2 className="capitalize text-base pr-4">appointment</h2>
      </div>

      <div className="flex items-center py-3 px-6 text-slate-500">
        <div className="pr-4">
          <FaHospitalUser />
        </div>
        <h2 className="capitalize text-base pr-4">staff</h2>
        <div className="text-xs cursor-pointer ml-28">
          <SlArrowRight />
        </div>
      </div>

      <div className="flex items-center py-3 px-6 text-slate-500">
        <div className="pr-4">
          <FaDesktop />
        </div>
        <h2 className="capitalize text-base pr-4">apps</h2>
        <div className="text-xs cursor-pointer ml-28">
          <SlArrowRight />
        </div>
      </div>

      <div className="flex items-center py-3 px-6 text-slate-500">
        <div className="pr-4">
          <FaChartArea />
        </div>
        <h2 className="capitalize text-base pr-4">charts</h2>
        <div className="text-xs cursor-pointer ml-[6.5rem]">
          <SlArrowRight />
        </div>
      </div>

      <div className="flex items-center py-3 px-6 text-slate-500">
        <div className="pr-4">
          <TbWorld />
        </div>
        <h2 className="capitalize text-base pr-4">bootstrap</h2>
        <div className="text-xs cursor-pointer ml-20">
          <SlArrowRight />
        </div>
      </div>

      <div className="flex items-center py-3 px-6 text-slate-500">
        <div className="pr-4">
          <FiHeart />
        </div>
        <h2 className="capitalize text-base pr-4">plugins</h2>
        <div className="text-xs cursor-pointer ml-[6rem]">
          <SlArrowRight />
        </div>
      </div>

      <div className="flex items-center py-4 px-6 text-slate-500">
        <div className="pr-4">
          <GrSettingsOption />
        </div>
        <h2 className="capitalize text-base pr-4">widgets</h2>
      </div>

      <div className="flex items-center py-3 px-6 text-slate-500">
        <div className="pr-4">
          <IoNewspaperOutline />
        </div>
        <h2 className="capitalize text-base pr-4">forms</h2>
        <div className="text-xs cursor-pointer ml-[6rem]">
          <SlArrowRight />
        </div>
      </div>

      <div className="flex items-center py-3 px-6 text-slate-500">
        <div className="pr-4">
          <BsServer />
        </div>
        <h2 className="capitalize text-base pr-4">table</h2>
        <div className="text-xs cursor-pointer ml-[6.5rem]">
          <SlArrowRight />
        </div>
      </div>

      <div className="flex items-center py-3 px-6 text-slate-500">
        <div className="pr-4">
          <SlLayers />
        </div>
        <h2 className="capitalize text-base pr-4">pages</h2>
        <div className="text-xs cursor-pointer ml-[6rem]">
          <SlArrowRight />
        </div>
      </div>

      <div className="bottom mx-8 my-6 py-4 pl-4 w-48 rounded-2xl text-white font-bold">
        <h2 className="mb-2">Check your job schedule</h2>
        <FaArrowRight />
      </div>

      <div className="mb-6 px-4">
        <h2 className="text-slate-500 capitalize font-semibold">
          eres hospital admin dashboard &copy; {date} all rights reserved
        </h2>
      </div>
    </div>
  );
};

export default Sidebar;
