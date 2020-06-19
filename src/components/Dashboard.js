import React from "react";
import Chart from "./Chart";

const Dashboard = () => {
  const [chartConfigData]=React.useState()
  return (
    <div className="chart">
      <Chart chartConfigData={chartConfigData}/>
    </div>
  );
};

export default Dashboard;
