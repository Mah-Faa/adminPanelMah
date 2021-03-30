import React, { useState } from "react";

const TableChart = ({ salery }) => {
  return (
    <div>
      <div class="table-responsive text-nowrap">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Country</th>
              <th>City</th>
              <th>Position</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Kate</td>
              <td>Moss</td>
              <td>USA / The United Kingdom / China / Russia </td>
              <td>
                New York City / Warsaw / Lodz / Amsterdam / London / Chicago
              </td>
              <td>
                Web Designer /UX designer / Ul designer / JavaScript Developer
              </td>
              <td>23</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableChart;
