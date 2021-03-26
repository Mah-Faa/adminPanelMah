import React, { useState } from "react";
import CardsDashbords from "./CardsDashbords";
const MainDashbord = () => {
  const [cards, setCards] = useState([]);

  return (
    <div>
      <div className="row">
        <div classname="col">
          <CardsDashbords />
        </div>
      </div>
    </div>
  );
};

export default MainDashbord;
