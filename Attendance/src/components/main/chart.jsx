import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'January', 'February', 'March', 'April', 'May', 
          'June', 'July', 'August', 'September', 'November', 'December'
        ],
        datasets: [
          {
            label: '16 Mar 2018',
            borderColor: '#4A5568',
            data: [600, 400, 620, 300, 200, 600, 230, 300, 200, 200, 100, 1200],
            fill: false,
            pointBackgroundColor: '#4A5568',
            borderWidth: 3,
            pointBorderWidth: 4,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 8,
            pointHoverBorderColor: 'rgba(74,85,104,0.2)',
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              display: false,
            },
          ],
        },
      },
    });
  }, []); 

  return <canvas id="myChart" ref={chartRef}></canvas>;
};

export default LineChart;
