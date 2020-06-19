import React from "react";
import { Pie } from "react-chartjs-2";
import { covid } from "../api/apiCalls";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* 
      countries: [],
      cases: [], 
      chartData: {
        labels:[],
        datasets:[{
          label: "Covid19 Cases",
          data:[]
        }]
      },*/
    };
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
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
              ],
            },
          ],
        },
      });
      console.log(this.state.chartData);
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

/* <div>
        {this.state.countries.map((country, index) => (
          <p key={index}>{country}</p>
        ))}
        {this.state.cases.map((country, index) => (
          <p key={index}>{country}</p>
        ))}
        {console.log(this.state)}
      </div> */
