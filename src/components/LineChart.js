import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chart }) => {
  return <Line data={chart} />
};

export default LineChart