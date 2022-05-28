import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, TextField, InputAdornment } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const SignUpDrawer = () => {
  const [signUpDrawerShow, setSignUpDrawerShow] = useState(false);
  const [signUpSwitch, setSignUpSwitch] = useState(false);
  const [visiblePass, setVisiblePass] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  const emailHandler = (event) => {
    setUserEmail(event.target.value);
  };

  const passHandler = (event) => {
    setUserPass(event.target.value);
  };

  const firstNameHandler = (event) => {
    setUserFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setUserLastName(event.target.value);
  };

  return (
    <div>
      <span
        className="cartButton"
        onClick={() => setSignUpDrawerShow((prev) => !prev)}
      >
        <AccountCircleOutlinedIcon />
      </span>
      <Drawer anchor="right" open={signUpDrawerShow} style={{zIndex: '9999999999'}}>
        <div className="DrawerHeader border-0">
          <div className="cartCloseButton">
            <button onClick={() => setSignUpDrawerShow((prev) => !prev)}>
              <CloseIcon />
            </button>
          </div>
          <div className="cartDrawerContext">
            <p>SignUp / SignIn</p>
          </div>
        </div>
        <div className="switcher">
          <div className="switcherWrapper">
            <div
              className="switchSide"
              onClick={() => setSignUpSwitch((prev) => !prev)}
            >
              SignIn
            </div>
            <div
              className="switchSide"
              onClick={() => setSignUpSwitch((prev) => !prev)}
            >
              SignUp
            </div>
            <div
              className={`switchSelector ${
                signUpSwitch ? "transformRight" : "transformLeft"
              }`}
            ></div>
          </div>
        </div>
        {signUpSwitch ? (
          <div className="sign_up">
            <div className="sign_upWrapper">
              <div className="sign_up_Inputs">
                <TextField
                  id="input-with-icon-textfield"
                  label="First Name"
                  fullWidth
                  variant="outlined"
                  color="warning"
                  type="text"
                  onChange={firstNameHandler}
                  value={userFirstName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BadgeOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="input-with-icon-textfield"
                  label="Last Name"
                  fullWidth
                  variant="outlined"
                  color="warning"
                  type="text"
                  onChange={lastNameHandler}
                  value={userLastName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BadgeOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ marginTop: "30px" }}
                />
                <TextField
                  id="input-with-icon-textfield"
                  label="Email"
                  fullWidth
                  variant="outlined"
                  color="warning"
                  type="email"
                  onChange={emailHandler}
                  value={userEmail}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ marginTop: "30px" }}
                />
                <TextField
                  id="input-with-icon-textfield"
                  label="Password"
                  fullWidth
                  variant="outlined"
                  color="warning"
                  type={visiblePass ? "text" : "password"}
                  onChange={passHandler}
                  value={userPass}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <VisibilityOutlinedIcon
                          className="visibalePass"
                          onClick={() => setVisiblePass((prev) => !prev)}
                        />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ marginTop: "30px" }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="sign_in">
            <div className="sign_inWrapper">
              <div className="sign_in_Inputs">
                <TextField
                  id="input-with-icon-textfield"
                  label="Email"
                  fullWidth
                  variant="outlined"
                  color="warning"
                  type="email"
                  onChange={emailHandler}
                  value={userEmail}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="input-with-icon-textfield"
                  label="Password"
                  fullWidth
                  variant="outlined"
                  color="warning"
                  type={visiblePass ? "text" : "password"}
                  onChange={passHandler}
                  value={userPass}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <VisibilityOutlinedIcon
                          className="visibalePass"
                          onClick={() => setVisiblePass((prev) => !prev)}
                        />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ marginTop: "30px" }}
                />
              </div>
            </div>
          </div>
        )}

        <div className="sign_in_submit">
          <button className="sign_in_submitButton">Sign In</button>
          {signUpSwitch ? (
            <></>
          ) : (
            <article className="forgetPass">
              <Link to="/resetpassword">Forget Password ?</Link>
            </article>
          )}
        </div>

        <div className="subLinks">
            <ul className="subLinksList">
              <li className="subLinksItem"><Link to='/compare'><CompareArrowsOutlinedIcon className="subLinksIcon"/>Compare</Link></li>
              <li className="subLinksItem"><Link to='/whislist'><FavoriteBorderOutlinedIcon className="subLinksIcon"/>Favorites</Link></li>
            </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default SignUpDrawer;
