import React, { useState, useEffect } from "react";
import axios from "axios";
import TableChart from "./tableChart";
const [salery, setSalary] = useState();

useEffect(() => {
  getSalery();
}, []);

const getSalery = () => {
  axios
    .get("http://dummy.restapiexample.com/api/v1/employees")
    .then((res) => {
      setSalary(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const SaleryList = () => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Table Charts</h5>

          <TableChart salery={salery} />
        </div>
      </div>
    </div>
  );
};

export default SaleryList;
