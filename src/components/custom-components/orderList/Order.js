import React, { useState, useEffect } from "react";
import OrderList from "./OrderList";
import data from "../../globalData/InitialData";

const Order = () => {
  const [items, setItems] = useState(data);
  const removeItem = (id) => {
    setItems([...items.filter((q) => q.id !== id)]);
  };
  return (
    <div>
      <div class="card orderCard">
        <div class="card-body">
          <h5 class="card-title">Order List</h5>
          <OrderList data={items} remove={removeItem} />
        </div>
      </div>
    </div>
  );
};

export default Order;
