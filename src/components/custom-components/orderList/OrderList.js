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
            <tr>
              <th scope="row">1</th>
              <td>Lorem ipsum dolor</td>
              <td>Lorem ipsum dolor</td>
              <td>Lorem ipsum dolor</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
