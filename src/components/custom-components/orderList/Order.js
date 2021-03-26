import React, { useState, useEffect } from "react";
import OrderList from "./OrderList";
import Data from "../../globalData/InitialData";

const Order = () => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <OrderList data={Data} />
        </div>
      </div>
    </div>
  );
};

export default Order;
