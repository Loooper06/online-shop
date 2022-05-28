import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  Typography,
  Radio,
  RadioGroup,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import "./Register.css";

const Register = () => {
  const [mounted, setMounted] = useState(false);
  const [users, setUsers] = useState([]);
  const [passwordVisiable, setPasswordVisiable] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [receiveOffers, setReceiveOffers] = useState(false);
  const [newsLetter, setNewsLetter] = useState(false);

  useEffect(() => {
    fetch("https://azeno-3045b-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((data) => setUsers(Object.entries(data)));
  }, [mounted]);

  useEffect(() => {
    setMounted((prev) => !prev);
  }, []);

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const birthDateHandler = (event) => {
    setBirthDate(event.target.value);
  };
  const genderHandler = (event) => {
    setGender(event.target.value);
  };
  const receiveOffersHandler = () => {
    setReceiveOffers((prev) => !prev);
  };
  const newLetterHandler = () => {
    setNewsLetter((prev) => !prev);
  };

  const submitSignupForm = () => {
    let uniqId = Date.now();
    let newUser = {
      id: uniqId,
      firstName,
      lastName,
      email,
      password,
      gender,
      birthDate,
      receiveOffers,
      newsLetter,
    };
    let isUserExist = users.find((user) => user[1].email === email);
    if (isUserExist) {
      Swal.fire({
        icon: "error",
        title: "User has Already Exist !",
        timer: 1500,
      });
    } else if (
      firstName === "" &&
      lastName === "" &&
      email === "" &&
      password === "" &&
      gender === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Please Enter the Informations Correctly",
      });
    } else {
      fetch("https://azeno-3045b-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        body: JSON.stringify(newUser),
      }).then((response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Sign up successfully",
            timer: 1500,
          });
          setMounted((prev) => !prev);
          setTimeout(() => {}, 1500);
        }
      });
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setBirthDate("");
  };

  return (
    <div className="signup">
      <div className="signupHeader">
        <h2>Create an account</h2>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className="fw-light text-black">
            Home
          </Link>
          <Typography className="fw-light text-muted">
            Create an account
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="signupWrapper">
        <div className="signupForm">
          <div className="signinLink">
            <Link to="/login">Already have an account? Log in instead!</Link>
          </div>
          <div className="signupFields">
            <div className="userGender">
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  className="text-muted fw-light"
                >
                  Social Title : <span className="essential">*</span>
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Mr"
                    onChange={(event) => genderHandler(event)}
                    control={
                      <Radio
                        size="small"
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}
                      />
                    }
                    label="Mr."
                  />
                  <FormControlLabel
                    value="Mrs"
                    onChange={(event) => genderHandler(event)}
                    control={
                      <Radio
                        size="small"
                        sx={{
                          color: pink[800],
                          "&.Mui-checked": {
                            color: pink[600],
                          },
                        }}
                      />
                    }
                    label="Mrs."
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="userFirstName my-4">
              <label>
                First Name <span className="essential">*</span>
              </label>
              <div className="formInputWrapper">
                <input
                  type="text"
                  className="mt-2 px-3 py-2"
                  placeholder="Enter Your First Name ... "
                  value={firstName}
                  onChange={(event) => firstNameHandler(event)}
                />
              </div>
            </div>
            <div className="userLastName my-4">
              <label>
                Last Name <span className="essential">*</span>
              </label>
              <div className="formInputWrapper">
                <input
                  onChange={(event) => lastNameHandler(event)}
                  value={lastName}
                  type="text"
                  className="mt-2 px-3 py-2"
                  placeholder="Enter Your Last Name ... "
                />
              </div>
            </div>
            <div className="userEmail my-4">
              <label>
                Email <span className="essential">*</span>
              </label>
              <div className="formInputWrapper">
                <input
                  onChange={(event) => emailHandler(event)}
                  value={email}
                  type="email"
                  className="mt-2 px-3 py-2"
                  placeholder="Enter Your Email ... "
                />
              </div>
            </div>
            <div className="userPassword my-4">
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
            <div className="userBirthdate my-4">
              <label>
                BirthDate <span className="optionalTag">Optional</span>
              </label>
              <div className="formInputWrapper">
                <input
                  value={birthDate}
                  onChange={(event) => birthDateHandler(event)}
                  type="text"
                  className="mt-2 px-3 py-2"
                  placeholder="MM/DD/YYYY"
                />
                <p className="text-muted fw-light birthDateEx">
                  (E.g.: 05/31/1970)
                </p>
              </div>
            </div>
            <div className="userChecks">
              <FormGroup>
                <FormControlLabel
                  onClick={() => receiveOffersHandler()}
                  control={
                    <Checkbox
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label="Receive offers from our partners"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label="Customer data privacy"
                />
                <p className="customerPrivacyNotice">
                  The personal data you provide is used to answer queries,
                  process orders or allow access to specific information. You
                  have the right to modify and delete all the personal
                  information found in the "My Account" page.
                </p>
                <FormControlLabel
                  onClick={() => newLetterHandler()}
                  control={
                    <Checkbox
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label="Sign up for our newsletter"
                />
                <p className="customerPrivacyNotice">
                  You may unsubscribe at any moment. For that purpose, please
                  find our contact info in the legal notice.
                </p>
              </FormGroup>
            </div>
            <div className="formSubmit">
              <button
                className="formSubmitButton"
                onClick={() => submitSignupForm()}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
