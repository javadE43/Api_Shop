import {useState}from "react"
//
import { dataChart } from "../../data/dataChart";
import PieChart from "../piCart/PieChart";

function Chart() {
    const [chartData, setChartData] = useState({
      labels: dataChart.map((data) => data.year),
      datasets: [
        {
          label: "محصولات پر فروش",
          data: dataChart.map((data) => data.userGain),
          backgroundColor: ["rgba(75,192,192,1)", "&quot;#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
    return (
      <div className={`chart__home chart__home__sm chart__home__md chart__home__lg chart__home__xl`}>
        <PieChart chartData={chartData} />
      </div>
    );
  }

  export default Chart;