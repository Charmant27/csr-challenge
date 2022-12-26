import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";
import Menu from "./Menu";
import BarChart from "./BarChart";
import { Data } from "../data/Data";

const Dashboard = () => {
  const [data, setData] = useState({
    labels: Data.map((ourData) => ourData.month),
    datasets: [
      {
        label: "income",
        data: Data.map((ourData) => ourData.income),
        backgroundColor: ["#2596be"],
      },

      {
        label: "expenses",
        data: Data.map((ourData) => ourData.expenses),
        backgroundColor: ["#5AF54B"],
      },
    ],
  });

  return (
    <div className="px-16">
      {/* first part */}

      <div className="flex items-center justify-between pt-6">
        <div className="py-2">
          <h1 className="capitalize font-bold text-xl pb-2">
            welcome to eres!
          </h1>
          <h2 className="capitalize text-base text-slate-700 font-semibold">
            hospital admin dashboard template
          </h2>
        </div>

        <div className="flex items-center gap-x-8">
          {/* input form */}
          <div>
            <label className="flex items-center bg-white px-5 py-2 rounded-[2rem]">
              <input
                type="text"
                placeholder="Search here"
                className="bg-transparent w-full py-2 px-5 border-transparent"
              />
              <div className="ml-[-2rem] text-slate-700">
                <FaSearch />
              </div>
            </label>
          </div>
          <div className="settings-icon p-4 rounded-[50%]">
            <GrSettingsOption />
          </div>
        </div>
      </div>

      {/* second part */}
      <div className="pt-10">
        <Menu />
      </div>

      {/* charts */}
      <div>
        <BarChart chart={data} />
      </div>
    </div>
  );
};

export default Dashboard;
