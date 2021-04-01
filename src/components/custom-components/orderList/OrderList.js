import React, { useState } from "react";
import "../orderList/Order.css";

const OrderList = ({ data, remove, increment, decrement }) => {
  return (
    <div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th className="th-lg">Product Image</th>
              <th className="th-lg">Names of Foods</th>
              <th csslaName="th-lg">Size</th>
              <th className="th-lg">No.Of Product</th>
              <th className="th-lg">price</th>

              <th className="th-lg">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td className="img-container">
                  <img className="person-img" src={item.image} />
                </td>
                <td>{item.name}</td>
                <td>{item.size}</td>

                <td>
                  <button
                    className="btn btn-sm btn-danger mr-1"
                    onClick={() => decrement(index)}
                  >
                    -
                  </button>

                  <b> {item.total}</b>
                  <button
                    className="btn btn-sm btn-primary ml-1"
                    onClick={() => increment(index)}
                  >
                    +
                  </button>
                </td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="btn btn-md btn-danger"
                    onClick={() => {
                      remove(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
