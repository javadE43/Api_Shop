import React from "react";
import { Bar } from 'react-chartjs-2';

function PieChart({ chartData }: any) {
  return (
    <div className="chart-container chart-container__sm chart-container__md chart-container__lg chart-container__xl">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "محصولات پر فروش",
              color: "inherit",
            },
          },
          // maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
export default PieChart;
