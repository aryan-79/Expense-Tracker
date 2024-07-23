"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ options, lineChartData }) => {
  return (
    <div className={`relative mx-auto md:h-[60vh] md:w-[60vw]`}>
      <Line options={options} data={lineChartData} />
    </div>
  );
};

export default LineChart;
