import axios from "axios";
import Chart from "chart.js";
import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const BarChart = () => {
  const [chartData, setChatData] = useState({});
  const [barOptions, setBarOptions] = useState({});
  const [employeeSalary, setEmployeSalary] = useState([]);
  const [employeeAge, setEmployeAge] = useState([]);

  useEffect(() => {
    chart();
  }, []);

  const chart = () => {
    let empsal = [];
    let empAge = [];
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empsal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }
        setChatData({
          labels: empAge,
          datasets: [
            {
              label: "salerys",
              data: empsal,
              backgroundColor: ["rgb(239,129,87)"],
              borderWidth: 3,
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>chart</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: {
              display: true,
              text: "Data Orgranized In Bars",
              fontSize: 25,
            },

            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 10,
                  },
                  gridLines: { display: false },
                },
              ],
              xAxes: [{ gridLines: { display: false } }],
            },
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
