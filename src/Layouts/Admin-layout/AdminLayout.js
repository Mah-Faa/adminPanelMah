import React, { useState } from "react";
import { Route, Switch } from "react-router";
import "../../assets/css/demo.css";
import "../../assets/css/paper-dashboard.css";
import Login from "../../components/auth/Login";
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
              <Route path="/login" exact component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
