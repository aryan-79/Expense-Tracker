"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ options, barChartData }) => {
  return (
    <div className={`relative m-auto md:h-[60vh] md:w-[60vw]`}>
      <Bar options={options} data={barChartData} />
    </div>
  );
};

export default BarChart;
