import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const TableChart = ({ salerys, page }) => {
  return (
    <div>
      <div className="table-responsive text-nowrap">
        <table className="table table-striped">
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
