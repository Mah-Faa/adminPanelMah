import React, { useState } from "react";

const OrderList = ({ data }) => {
  return (
    <div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th class="th-lg">Product</th>
              <th class="th-lg">Details</th>
              <th class="th-lg">price</th>
              <th class="th-lg">No.Of Product</th>
              <th class="th-lg">Total</th>
              <th class="th-lg">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.image}</td>
                <td>{item.color}</td>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>
                  <button className="btn btn-md btn-danger">Delet</button>
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
