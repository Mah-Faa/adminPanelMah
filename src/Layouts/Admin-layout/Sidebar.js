import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div class="sidebar" data-color="white" data-active-color="danger">
        <div class="logo">
          <NavLink class="simple-text logo-normal" to="/">
            MahFa
          </NavLink>
        </div>
        <div class="sidebar-wrapper">
          <ul class="nav">
            <li class="active ">
              <NavLink to="/">
                <i class="nc-icon nc-bank"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/userPost">
                <i class="nc-icon nc-paper"></i>
                <p>Users Posts</p>
              </NavLink>
            </li>
            {/* 
            <li>
              <NavLink>
                <i class="nc-icon nc-pin-3"></i>
                <p>Maps</p>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <i class="nc-icon nc-bell-55"></i>
                <p>Notifications</p>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <i class="nc-icon nc-single-02"></i>
                <p>User Profile</p>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <i class="nc-icon nc-tile-56"></i>
                <p>Table List</p>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <i class="nc-icon nc-caps-small"></i>
                <p>Typography</p>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
