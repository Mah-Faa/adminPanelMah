import React, { useState } from "react";
import CardsDashbords from "./CardsDashbords";
import BarChart from "./charts/barChart";
import TableChart from "./charts/tableChart";
const MainDashbord = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <TableChart />
        </div>
        <div className="col-md-6">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default MainDashbord;
