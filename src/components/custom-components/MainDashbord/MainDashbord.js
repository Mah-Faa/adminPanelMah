import React, { useState } from "react";
import PostDetails from "../../posts/PostDetails";
import CardsDashbords from "./CardsDashbords";
import BarChart from "./charts/barChart";
import SaleryList from "./charts/SaleryList";
import TableChart from "./charts/tableChart";
const MainDashbord = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          {/* <TableChart /> */}
          <SaleryList />
        </div>
        <div className="col-md-6">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default MainDashbord;
