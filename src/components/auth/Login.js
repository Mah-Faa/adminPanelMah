import React from "react";
import "../auth/Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import loginImg from "../../assets/imgs/Login-pana2.png";

const Login = () => {
  const history = useHistory();
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
                <div>
                  <h2 className="text-muted text-center">Login Page</h2>

                  <div className="">
                    <Formik
                      initialValues={{ email: "", password: "" }}
                      validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                          errors.email = "Required";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                          )
                        ) {
                          errors.email = "Invalid email address";
                        }
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        if (
                          values.email == "mahdiyeh.fani@gmail.com" ||
                          values.password == "123456"
                        ) {
                          const user = {
                            userId: "25",
                            userName: "mahdiyeh",
                            token: "jdiwuebapwpindlasowieyfbsalkpwoejukl45j-s",
                          };
                          //set local storage
                          localStorage.setItem("user", JSON.stringify(user));
                          history.push("/");
                        } else {
                          alert(values.email);
                        }

                        setSubmitting(false);
                      }}
                    >
                      {({ isSubmitting }) => (
                        <Form>
                          <div className="form-group">
                            <label for="email">Email</label>
                            <Field
                              type="email"
                              name="email"
                              className="form-control form-control-lg"
                            />
                            <ErrorMessage name="email" component="div" />
                          </div>

                          <div className="form-group">
                            <label for="password">Password</label>
                            <Field
                              type="password"
                              name="password"
                              className="form-control form-control-lg"
                            />
                            <ErrorMessage name="password" component="div" />
                          </div>

                          <div className="custom-control custom-checkbox">
                            <Field
                              type="checkbox"
                              name="checkbox"
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
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg btn-block my-3"
                              disabled={isSubmitting}
                            >
                              Login
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>

                    <div className="d-flex justify-content-between">
                      <a href="#!">Password forgotten?</a>
                      <span>
                        <a href="#">Create account</a>
                      </span>
                    </div>
                    <div className="dropdown-divider my-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
