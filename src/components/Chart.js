import React from "react";
import { Pie } from "react-chartjs-2";
import { covid } from "../api/apiCalls";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    covid.get("/summary").then((res) => {
      let countriesData = res.data["Countries"]
        .sort((a, b) => b["TotalConfirmed"] - a["TotalConfirmed"])
        .slice(0, 10);
      let labels = countriesData.map((country) => country["Country"]);
      let data = countriesData.map((country) => country["TotalConfirmed"]);
      this.setState({
        chartData: {
          labels,
          datasets: [
            {
              label: "Covid19 Cases",
              data,
              backgroundColor: [
                "#eb5656",
                "#f2984a",
                "#f1c84b",
                "#3182ed",
                "#28af60",
                "#9b52e0",
                "#33759e",
                "#3deb6e",
                "#ed45b2",
                "#6c8c63"
              ],
            },
          ],
        },
      });
    });
  };

  render() {
    return (
      <Pie
        data={this.state.chartData}
        options={{
          title: {
            display: "true",
            text: "Top 10 Countries Infected By Covid19",
            fontSize: 25,
          },
        }}
      />
    );
  }
}

export default Chart;
