import React from "react";
import { TbHeartMinus } from "react-icons/tb";
import { MdShowChart } from "react-icons/md";
import { FaStethoscope, FaRegCalendarAlt, FaDollarSign } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="flex items-center gap-x-5">
      {/* first card */}
      <div className="bg-red-300 w-64 px-4 py-5 text-white rounded-lg">
        <h1 className="capitalize font-semibold">total patient</h1>
        <div className="flex items-center gap-x-4">
          <h1 className="text-3xl font-semibold">783k</h1>
          <div className="font-semibold text-base">
            <MdShowChart />
            <p>+4%</p>
          </div>
          <div className="ml-10 text-5xl">
            <TbHeartMinus />
          </div>
        </div>
      </div>

      {/* second card */}
      <div className="bg-green-400 w-64 px-4 py-5 text-white rounded-lg">
        <h1 className="capitalize font-semibold">doctor</h1>
        <div className="flex items-center gap-x-4">
          <h1 className="text-3xl font-semibold">76</h1>
          <div className="font-semibold text-base">
            <MdShowChart />
            <p>-4%</p>
          </div>
          <div className="ml-10 text-5xl">
            <FaStethoscope />
          </div>
        </div>
      </div>

      {/* third card */}
      <div className="w-64 px-4 py-5 text-white bg-blue-400 rounded-lg">
        <h1 className="capitalize font-semibold">appointment</h1>
        <div className="flex items-center gap-x-4">
          <h1 className="text-3xl font-semibold">76</h1>
          <div className="font-semibold text-base">
            <MdShowChart />
            <p>-4%</p>
          </div>
          <div className="ml-10 text-5xl">
            <FaRegCalendarAlt />
          </div>
        </div>
      </div>

      {/* fourth card */}
      <div className="w-64 px-4 py-5 bg-purple-600 text-white rounded-lg">
        <h1 className="capitalize font-semibold">hospital earning</h1>
        <div className="flex items-center gap-x-4">
          <h1 className="text-3xl font-semibold">$56k</h1>
          <div className="font-semibold text-base">
            <MdShowChart />
            <p>+4%</p>
          </div>
          <div className="ml-10 text-5xl">
            <FaDollarSign />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
