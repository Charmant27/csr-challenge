import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import LineChart from "./LineChart";
import { Patients } from "../data/Patient";

const BarChart = ({ chart }) => {
  const [patientData, usePatientdata] = useState({
    labels: Patients.map((patient) => patient.month),
    datasets: [
      {
        label: "Recovered Patients",
        data: Patients.map((patient) => patient.recoveredPatient),
        backgroundColor: ["red"],
      },
      {
        label: "new Patients",
        data: Patients.map((patient) => patient.newPatient),
        backgroundColor: ["#5AF54B"],
      },
    ],
  });

  return (
    <div className="flex items-center mt-10 gap-x-6">
      <div className="w-96 h-96 py-5 bg-white rounded-lg px-5 shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="capitalize font-bold">revenue</h1>
          <h2 className="text-green-600 font-semibold">2022</h2>
        </div>
        <div className="flex items-center gap-x-8">
          <h2 className="text-blue-400 font-semibold text-2xl">$41,512k</h2>
          <h2 className="font-semibold text-pink-600">$25,612k</h2>
        </div>

        {/* bar chart */}
        <div className="pt-5 w-80">
          <Bar data={chart} />
        </div>
      </div>

      {/* line chart */}
      <div className="bg-white w-[40rem] h-96 rounded-lg shadow-lg px-5 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="capitalize font-bold">patient statistic</h1>
          </div>
          <div className="flex items-center gap-x-4">
            <button className="capitalize cursor-pointer text-green-600 font-semibold">
              monthly
            </button>
            <button className="capitalize cursor-pointer text-green-600 font-semibold">
              weekly
            </button>
            <button className="capitalize cursor-pointer text-green-600 font-semibold">
              today
            </button>
          </div>
        </div>

        {/* line cart */}
        <div>
          <LineChart chart={patientData} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
