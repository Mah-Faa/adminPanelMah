import React, { useState, useEffect } from "react";
import axios from "axios";
import TableChart from "./tableChart";

const SaleryList = () => {
  const [salerys, setSalarys] = useState([]);

  useEffect(() => {
    getSalerys();
  }, []);

  const getSalerys = () => {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log(res);
        setSalarys(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Table Charts</h5>
          {/* <h1>
            {salerys.map((salery) => (
              <div>
                {salery.id}
                <h3> {salery.employee_name}</h3>
                <h4>{salery.employee_salary}</h4>
                <h5>{salery.employee_age}</h5>
              </div>
            ))}
          </h1> */}

          <TableChart salerys={salerys} />
        </div>
      </div>
    </div>
  );
};

export default SaleryList;
