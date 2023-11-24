import React from "react";
import Linegraph from "@/components/graph/components/Linegraph";
import { Doughnut } from "react-chartjs-2";

const Graph = () => {
  const plugins: any = [
    {
      beforeDraw: function (chart: any) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = 4;
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "center";
        var text = "200",
          textX = Math.round((width - ctx.measureText(text).width) / 3),
          textY = height / 1.8;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  const data = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options: object = {
    plugins: {
      legend: {
        position: "right",
        label: {},
      },
    },
  };

  return (
    <>
      <div className="flex gap-2">
        <div className=" h-fit">
          <Linegraph />
        </div>

        <div className="w-[400px]">
          <Doughnut data={data} options={options} plugins={plugins} />
        </div>
      </div>
    </>
  );
};

export default Graph;
