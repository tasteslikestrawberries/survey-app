import React from "react";
import { HorizontalBar } from "react-chartjs-2";

class Graph extends React.Component {
  state = {
    dataHorizontal: {
      labels: [
        "Po preporuci",
        "Svidio mi se sadržaj",
        "Želim produbiti postojeće znanje o tematici",
        "Po zahtjevu poslodavca",
        "Mislim da će mi pomoći u razvoju karijere",
        "Drugi razlozi",
      ],
      datasets: [
        {
          label: [],
          data: [25.49, 16.81, 18.12, 32, 13, 4],
          fill: false,
          backgroundColor: [
            "rgba(11, 144, 197, 0.986)",
            "rgba(42, 167, 47, 0.986)",
            "rgba(255, 217, 54)",
            "rgba(255,	0,	0)",
            "rgba(186, 63, 211, 0.986)",
            "rgba(73, 213, 255, 0.986)",
          ],
          borderColor: [],
          borderWidth: 1,
        },
      ],
    },
  };

  render() {
    return (
      <>
        <HorizontalBar
          data={this.state.dataHorizontal}
          options={{
            responsive: true,
            legend: { display: false },
            scales: { yAxes: [{ gridLines: { display: false } }] },
          }}
        />
      </>
    );
  }
}

export default Graph;
