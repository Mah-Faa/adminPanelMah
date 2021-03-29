import React, { useState } from "react";
import CardsDashbords from "./CardsDashbords";
import BarChart from "./charts/barChart";
const MainDashbord = () => {
  const [cards, setCards] = useState([]);

  return (
    <div>
      <BarChart />
    </div>
  );
};

export default MainDashbord;
