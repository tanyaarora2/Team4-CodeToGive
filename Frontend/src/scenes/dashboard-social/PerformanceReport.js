import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import "./PerformanceReport.css";
import axios from 'axios';

function PerformanceReport() {
  const [swdata, setswData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/socialworker/')
      .then(res => {
        setswData(res.data);
      });
  }, []);
  useEffect(() => {
    let pieChart = null;
    let barChart = null;


    const initializeCharts = () => {
      // Destroy the existing charts if they exist
      if (pieChart) {
        pieChart.destroy();
      }
      if (barChart) {
        barChart.destroy();
      }

      // Initialize and configure the pie chart
      const pieChartCtx = document.getElementById("pieChart").getContext("2d");
      pieChart = new Chart(pieChartCtx, {
        type: "pie",
        data: {
          labels: ["Active Cases", "Solved Cases"],
          datasets: [
            {
              data: [swdata[0]?.Active_Cases, swdata[0]?.Solved_Cases],
              backgroundColor: ["ABDDA4", "#FEE08B"],
            },
          ],
        },
        options: {
          // Additional options for the pie chart (e.g., title, legends, etc.)
        },
      });

      // Initialize and configure the bar chart
      const barChartCtx = document.getElementById("barChart").getContext("2d");
      barChart = new Chart(barChartCtx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "March"],
          datasets: [
            {
              label: "Data",
              data: [10, 20, 30],
              backgroundColor: ["#CCF1CD", "#A8D8CD", "#377375"],
            },
          ],
        },
        options: {
          // Additional options for the bar chart (e.g., title, legends, etc.)
        },
      });
    };

    initializeCharts();

    return () => {
      // Cleanup function to destroy the charts when the component unmounts
      if (pieChart) {
        pieChart.destroy();
      }
      if (barChart) {
        barChart.destroy();
      }
    };
  }, [swdata]);

  return (
    <div className="chart-container">
      <div className="canvas-container">
        <canvas id="pieChart" width="100" height="100"></canvas>
      </div>
      <div className="canvas-container">
        <canvas id="barChart" width="100" height="100"></canvas>
      </div>
    </div>
  );
}

export default PerformanceReport;
