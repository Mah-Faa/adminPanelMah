import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar" data-color="white" data-active-color="danger">
        <div className="logo">
          <NavLink className="simple-text logo-normal" to="/">
            MahFa
          </NavLink>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li>
              <NavLink
                exact
                activeclassName="active"
                className="simple-text logo-normal"
                to="/"
              >
                <i className="nc-icon nc-bank"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/userPost">
                <i className="nc-icon nc-paper"></i>
                <p>Users Posts</p>
              </NavLink>
            </li>

            <li>
              <NavLink to="/order">
                <i className="nc-icon nc-pin-3"></i>
                <p>Order List</p>
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/">
                <i className="nc-icon nc-bell-55"></i>
                <p>Notifications</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i className="nc-icon nc-single-02"></i>
                <p>User Profile</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i className="nc-icon nc-tile-56"></i>
                <p>Table List</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <i className="nc-icon nc-caps-small"></i>
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
