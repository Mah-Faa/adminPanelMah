import React, { Component } from "react";

const Login = () => {
  return (
    <>
      <div class="main">
        <div class="container">
          <center>
            <div class="middle">
              <div id="login">
                <form action="javascript:void(0);" method="get">
                  <fieldset class="clearfix">
                    <p>
                      <span class="fa fa-user"></span>
                      <input type="text" Placeholder="Username" required />
                    </p>
                    <p>
                      <span class="fa fa-lock"></span>
                      <input type="password" Placeholder="Password" required />
                    </p>

                    <div>
                      <span style="width:48%; text-align:left;  display: inline-block;">
                        <a class="small-text" href="#">
                          Forgot password?
                        </a>
                      </span>
                      <span style="width:50%; text-align:right;  display: inline-block;">
                        <input type="submit" value="Sign In" />
                      </span>
                    </div>
                  </fieldset>
                  <div class="clearfix"></div>
                </form>

                <div class="clearfix"></div>
              </div>
              <div class="logo">
                MAHFA
                <div class="clearfix"></div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default Login;
