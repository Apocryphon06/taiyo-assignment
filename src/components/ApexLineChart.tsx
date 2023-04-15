import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function LineChart({ cases, deaths, recovered, labels }: any) {
  // console.log(cases, "cases");

  const [chartOptions, setChartOptions] = useState<any>({
    series: [],
    chart: { toolbar: { show: false } },
    colors: [
      "rgba(255, 196, 83, 0.2)",
      "rgba(68, 227, 119,0.2)",
      "rgba(241, 77, 77, 0.2)",
      "rgba(255,255,255, 0.0)",
    ],
  });

  const setChartValue = () => {
    setChartOptions({
      // chart: {
      //   type: "line",
      // },
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },

      legend: {
        show: true,
      },
      series: [
        {
          name: "Cases",
          data: [10, 40, 50, 60, 10, 20, 30, 98, 200],
          // data: cases,
          fill: {
            colors: ["rgba(255, 196, 83, 0.5)"],
          },
        },
        
        {
          name: "Recovered",
          data: [45, 23, 12, 65, 20, 40, 90, 120, 40],
          // data: recovered,

          fill: {
            colors: ["rgba(68, 227, 119,0.5)"],
          },
        },
        {
          name: "Deaths",
          data: [140, 20, 40, 50, 120, 55, 77, 90, 78],
          // data: deaths,
          fill: {
            colors: ["rgba(241, 77, 77, 0.5)"],
          },
        },
      ],
      xaxis: {
        type: "datetime",
        // title: {
        //   text: "Month",
        // },
      },
      yaxis: {
        type:'numeric',
        // title: {
        //   text: "CASES & DEATHS & RECOVERED",
        // },
      },
      stroke: {
        curve: "straight",
        colors: [
          "rgba(255, 196, 83, 1)",
          "rgba(68, 227, 119,1)",
          "rgba(241, 77, 77, 1)",

          "transparent",
        ],
        width: 2,
        background: ["#000000"],
      },

      tooltip: {
        theme: "dark",
        custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
          //   return (
          //     '<div class="arrow_box"  >' +
          //     "<span style='font-size:12px;color:white;'>" +
          //     labels[dataPointIndex] +
          //     "</span>" + "<br/>" +
          //     "<span style='font-size:15px;color:white;'>" +
          //     "Order Placed" +
          //     ": " +
          //     orderPlaced[dataPointIndex] +
          //     "</span>" + "<br/>" +
          //     "<span style=''>" + "<span style='font-size:15px;color:white;'>" +
          //     "Order Completed" +
          //     ": " +
          //     "<span style='color:#44E377;'>" +
          //     orderCompleted[dataPointIndex] + "</span>" +
          //     "</span>" + "</span>" + "<br/>" +
          //     "<span style='font-size:15px;color:white;'>" +
          //     " Order Cancelled" +
          //     ": " +
          //     "<span style='color:#F14D4D;' >" +
          //     orderCancelled[dataPointIndex] + "</span>" +
          //     "</span>" + "<br/>" +

          //     "<span style='font-size:15px;color:white;'>" +
          //     " Revenue" +
          //     ": AED " +
          //     orders?.revenue_order_graph_data[dataPointIndex]?.value || 0 +
          //     "</span>" +
          //     "</div>"
          //   );
          return dataPointIndex;
        },
      },
      crosshairs: {
        show: false,
      },

      grid: {
        strokeDashArray: 5,
      },
      markers: {
        colors: [
          "rgba(255, 196, 83, 1)",
          "rgba(109, 196, 234, 1)",
          "rgba(241, 77, 77, 1)",
          "transparent",
        ],
        strokeWidth: 1,
        show: false,
      },

      dataLabels: { enabled: false },
    });
  };

  useEffect(() => {
    setChartValue();
  }, [cases, deaths, recovered, labels]);

  return (
    <div style={{ userSelect: "none" }}>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="area"
        height="auto"
      />
    </div>
  );
}

export default LineChart;
