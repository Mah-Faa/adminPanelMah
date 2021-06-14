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
        <div className="col-md-12">
          {/* <TableChart /> */}
          <BarChart />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <SaleryList />
        </div>
      </div>
    </div>
  );
};

export default MainDashbord;
