import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [
            {
              x: "7",
              y: [
                new Date(Date.UTC(2019, 2, 1, 0, 0, 0)).getTime(),
                new Date(Date.UTC(2019, 2, 1, 3, 0, 0)).getTime()
              ],
              fillColor: "#00E396"
            },
            {
              x: "6",
              y: [
                new Date(Date.UTC(2019, 2, 1, 9, 30, 0)).getTime(),
                new Date(Date.UTC(2019, 2, 1, 18, 0, 0)).getTime()
              ]
            },
            {
              x: "5",
              y: [
                new Date(Date.UTC(2019, 2, 1, 9, 30, 0)).getTime(),
                new Date(Date.UTC(2019, 2, 1, 18, 0, 0)).getTime()
              ]
            },
            {
              x: "4",
              y: [
                new Date(Date.UTC(2019, 2, 1, 9, 30, 0)).getTime(),
                new Date(Date.UTC(2019, 2, 1, 18, 0, 0)).getTime()
              ]
            },
            {
              x: "3",
              y: [
                new Date(Date.UTC(2019, 2, 1, 9, 30, 0)).getTime(),
                new Date(Date.UTC(2019, 2, 1, 18, 0, 0)).getTime()
              ]
            },
            {
              x: "2",
              y: [
                new Date(Date.UTC(2019, 2, 1, 9, 30, 0)).getTime(),
                new Date(Date.UTC(2019, 2, 1, 18, 0, 0)).getTime()
              ]
            },
            {
              x: "1",
              y: [
                new Date(Date.UTC(2019, 2, 1, 18, 30, 0)).getTime(),
                new Date(Date.UTC(2019, 2, 1, 24, 0, 0)).getTime()
              ]
            }
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: "candlestick"
          // type: "rangeBar"
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        annotations: {
          xaxis: [
            {
              x: "Mar 01 14:00",
              borderColor: "#00E396",
              label: {
                borderColor: "#00E396",
                style: {
                  fontSize: "12px",
                  color: "#fff",
                  background: "#00E396"
                },
                orientation: "horizontal",
                offsetY: 7,
                text: "Annotation Test"
              }
            }
          ]
        },
        xaxis: {
          type: "datetime"
        }
      }
    };
  }

  render() {
    console.log(new Date("Mar 01 2019 09:30:00"));
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default ApexChart;
