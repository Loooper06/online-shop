import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PassRecovery = () => {
  return (
    <div>
      <div className="passRecovery">
        <div className="passRecoveryHeader">
          <h2>Log in to your account</h2>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/" className="text-black fw-light">
              Home
            </Link>
            <Link to="/login" className="text-black fw-light">
              Log in to your account
            </Link>
            <Typography color="text.primary" className="text-muted fw-light">
              Recovery Password
            </Typography>
          </Breadcrumbs>
        </div>
        <div className="passRecoveryWrapper">
          <div className="passRecoveryForm">
            <p className="fw-light text-muted">
              Please enter the email address you used to register. You will
              receive a temporary link to reset your password.
            </p>
            <div className="userEmail">
              <label>Email</label>
              <div className="formInputWrapper">
                <input
                  type="email"
                  className="mt-2 px-3 py-2"
                  placeholder="Enter Your Email ... "
                />
                <button className="passRecoverySubmitButton">Recovery</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassRecovery;
