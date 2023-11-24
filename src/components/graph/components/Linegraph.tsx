"use client";
import { Line } from "react-chartjs-2";

import { Chart } from "chart.js/auto";
import zoom from "chartjs-plugin-zoom";

Chart.register(zoom);

const Linegraph = () => {
  const labels = [
    "04/03/2022",
    "05/03/2022",
    "06/03/2022 ",
    "07/03/2022 ",
    "07/03/2022 ",
    "07/03/2022 ",
    "07/03/2022 ",
    "07/03/2022 ",
  ];

  const label2 = [10, 20, 30, 40, 50, 60, 70, 80];
  const data: any = {
    labels: labels,
    datasets: [
      {
        label: "RPK",
        data: [20, 50, 20, 42, 67, 45, 34, 56, 45, 45],
        fill: false,
        borderColor: "#E8915D",
        backgroundColor: "#E8915D",
        tension: 0.4,
      },
      {
        label: "M13B",
        data: [20, 50, 20, 50, 20, 54, 34, 45, 13, 54, 13],
        fill: false,
        borderColor: "#0080FF",
        backgroundColor: "#0080FF",
        tension: 0.4,
      },
      {
        label: "M13B",
        data: [10, 69, 50, 25, 30, 78, 45, 76, 13, 74, 21],
        fill: false,
        borderColor: "#0080FF",
        backgroundColor: "#0080FF",
        tension: 0.4,
      },
    ],
  };

  const options: Object = {
    elements: {
      point: {
        radius: 0,
      },
    },

    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
            mode: "x",
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 12,
            weight: "500",
          },
          color: "black",
          boxWidth: 10,
          boxHeight: 10,
        },
      },
    },

    tension: 0.1,
    scales: {
      y: {
        labels: label2,
        beginAtZero: true,
        border: {
          color: "transparent",
        },

        min: 10,
        max: 80,
        grid: {
          tickColor: "white",
          color: "#ccc",
        },
        ticks: {
          color: "#4F6A8B",
        },
      },

      x: {
        labels: labels,
        beginAtZero: true,
        border: {
          color: "#ccc",
        },
        grid: {
          color: "transparent",
          tickColor: "white",
        },
        ticks: {
          color: "black",
          align: "center",
        },
      },
    },
  };

  return (
    <>
      <div className="w-[700px]">
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default Linegraph;
