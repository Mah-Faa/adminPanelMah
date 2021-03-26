import React, { useState } from "react";
import { Route, Switch } from "react-router";
import "../../assets/css/demo.css";
import "../../assets/css/paper-dashboard.css";
import MainDashbord from "../../components/custom-components/MainDashbord/MainDashbord";
import Order from "../../components/custom-components/orderList/Order";
import UserPosts from "../../components/posts/UserPosts";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

const AdminLayout = () => {
  return (
    <>
      <div class="wrapper">
        <Sidebar />
        <div class="main-panel">
          <TopNavbar />
          <div className="content">
            <Switch>
              <Route path="/" exact component={MainDashbord} />
              <Route path="/userPost" component={UserPosts} />
              <Route path="/order" component={Order} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
