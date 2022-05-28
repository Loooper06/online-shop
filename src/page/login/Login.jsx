import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import "./Login.css";

const Login = () => {
  const [passwordVisiable, setPasswordVisiable] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFieldEmpty, setEmailFieldEmpty] = useState(false);
  const [passwordFieldEmpty, setPasswordFieldEmpty] = useState(false);
  let history = useLocation();

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(Object.entries(data)));
  }, [mounted]);

  useEffect(() => {
    setMounted((prev) => !prev);
  }, []);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const formSubmit = () => {
    if (email === "") {
      setEmailFieldEmpty(true);
    } else {
      setEmailFieldEmpty(false);
    }
    if (password === "") {
      setPasswordFieldEmpty(true);
    } else {
      setPasswordFieldEmpty(false);
    }

    let userEmail = users.find((user) => user[1].email === email);
    let userPassword = users.find((user) => user[1].password === password);

    if (userEmail && userPassword) {
      Swal.fire({ icon: "success", title: "Successfuly Signed in :)" });
    } else {
      Swal.fire({
        icon: "error",
        title: "User Not Found Please Sign up please !",
      });
    }
  };

  return (
    <>
      {history.pathname === "/login" ? (
        <div className="login">
          <div className="loginHeader">
            <h2>Log in to your account</h2>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/" className="text-black fw-light">
                Home
              </Link>
              <Typography color="text.primary" className="text-muted fw-light">
                Log in to your account
              </Typography>
            </Breadcrumbs>
          </div>
          <div className="loginWrapper">
            <div className="loginForm">
              <div className="userEmail">
                <label>
                  Email <span className="essential">*</span>
                </label>
                <div className="formInputWrapper">
                  <input
                    value={email}
                    onChange={(event) => emailHandler(event)}
                    type="email"
                    className="mt-2 px-3 py-2"
                    placeholder="Enter Your Email ... "
                  />
                  {emailFieldEmpty ? (
                    <p className="emptyField">This Field Cannot be Empty</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="userPassword mt-4">
                <label>
                  Password <span className="essential">*</span>
                </label>
                <div className="formInputWrapper">
                  <input
                    value={password}
                    onChange={(event) => passwordHandler(event)}
                    type={passwordVisiable ? "text" : "password"}
                    className="mt-2 px-3 py-2"
                    placeholder="Enter Your Password ... "
                  />
                  {passwordFieldEmpty ? (
                    <p className="emptyField">This Field Cannot be Empty</p>
                  ) : (
                    <></>
                  )}
                  <button
                    className="showPass"
                    onClick={() => setPasswordVisiable((prev) => !prev)}
                  >
                    {passwordVisiable ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </button>
                </div>
              </div>
              <div className="recoveryPasswordLink">
                <Link to="/login/passwordRecovery">Forget your Password ?</Link>
              </div>
              <div className="formSubmit">
                <button
                  onClick={() => formSubmit()}
                  className="formSubmitButton"
                >
                  Sign in
                </button>
              </div>
              <div className="loginFooter">
                <Link to="/register">No account? Create one here</Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Login;
