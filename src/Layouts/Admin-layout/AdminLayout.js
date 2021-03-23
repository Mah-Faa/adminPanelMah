import React, { useState } from "react";
import { Route, Switch } from "react-router";
import "../../assets/css/demo.css";
import "../../assets/css/paper-dashboard.css";
import MainDashbord from "../../components/MainDashbord";
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
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
