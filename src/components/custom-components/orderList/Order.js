import React, { useState, useEffect } from "react";
import OrderList from "./OrderList";
import data from "../../globalData/InitialData";

const Order = () => {
  const [items, setItems] = useState(data);
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <OrderList data={items} />
        </div>
      </div>
    </div>
  );
};

export default Order;
