import React from "react";
import "../auth/Login.css";
import loginImg from "../../assets/imgs/Login-pana.png";

const Login = () => {
  return (
    <>
      <div className="container login__container my-5">
        <div className="row login__row">
          <div className="col-md-6 d-flex">
            <img
              className="login__imagek align-self-center"
              src={loginImg}
              width="100%"
              alt=""
            />
          </div>
          <div className="col-md-5 d-flex">
            <div className="align-self-center card login__card shadow-sm w-100">
              <div className="card-body">
                <form action="">
                  <h2 className="text-muted text-center">Login Page</h2>

                  <div className="my-5">
                    <h5 className="text-center">Login</h5>
                  </div>

                  <div className="">
                    <div className="form-group">
                      <label for="">Username</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-group">
                      <label for="">Password</label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input custom-control"
                        id="customCheckDisabled1"
                      />
                      <label
                        className="custom-control-label"
                        for="customCheckDisabled1"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="form-group">
                      <a
                        href="#"
                        className="btn btn-primary btn-lg btn-block my-3"
                      >
                        Login
                      </a>

                      <div className="d-flex justify-content-between">
                        <a href="#!">Password forgotten?</a>
                        <span>
                          <a href="#">Create account</a>
                        </span>
                      </div>
                      <div className="dropdown-divider my-4"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
