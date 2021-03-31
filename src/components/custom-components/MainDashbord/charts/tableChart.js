import React, { useState } from "react";

const TableChart = ({ salerys }) => {
  return (
    <div>
      <div class="table-responsive text-nowrap">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>

              <th>salery</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody>
            {salerys.map((salery) => (
              <tr key={salery.id}>
                <td>{salery.id} </td>
                <td>{salery.employee_name} </td>
                <td>{salery.employee_salary}</td>
                <td>{salery.employee_age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableChart;
