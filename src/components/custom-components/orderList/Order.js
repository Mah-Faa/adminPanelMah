import React, { useState, useEffect } from "react";
import OrderList from "./OrderList";
import data from "../../globalData/InitialData";
import swal from "sweetalert";

const Order = () => {
  const [items, setItems] = useState(data);

  const removeItem = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this item?",
      icon: "warning",
      dangerMode: true,
      buttons: ["Cancel", "Delete"],
    }).then((willDelete) => {
      if (willDelete) {
        setItems([...items.filter((q) => q.id !== id)]);
      }
    });
  };
  const handleIncrement = (index) => {
    const temp = [...items];
    // const findIndex = temp.findIndex((q) => q.index == index);
    temp[index].total++;
    setItems(temp);
  };
  const handleDecrement = (index) => {
    const temp = [...items];
    if (temp[index].total > 0) {
      temp[index].total--;
      setItems(temp);
    }
  };
  return (
    <div>
      <div class="card orderCard">
        <div class="card-body">
          <h5 class="card-title">Order List</h5>
          <OrderList
            data={items}
            remove={removeItem}
            increment={handleIncrement}
            decrement={handleDecrement}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
