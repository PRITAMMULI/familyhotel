import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../genralcomponent/Navbar";
import hotelcontext from "../../hotelcontext/hotelContext";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoginUser from "../../Images/loginUserPage.png";
function NewLogin() {
  const context = useContext(hotelcontext);
  const {
    onSubmit,
    logincredentials,
    errorLogin,
    setErrorLogin,
    onLoginChange,
  } = context;
  const [value, setValue] = useState(0);
  // const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8" id="form_container">
          <div className="row">
            <div className="col-lg-6 login_image_container">
              <img src={LoginUser} className="login_user_image" alt="" />
            </div>
            <div className="col-lg-6">
              <h2 className="member_login_heading mt-5">Member login</h2>
              <form id="form">
                <div
                  className={`mb-3 form_input ${
                    errorLogin.email ? "has-error" : ""
                  }`}
                >
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    onChange={onLoginChange}
                    aria-describedby="emailHelp"
                  />
                </div>

                {errorLogin.email && (
                  <small className="text-danger">Email is required</small>
                )}
                <div
                  className={`mb-3 form_input ${
                    errorLogin.password ? "has-error" : ""
                  }`}
                >
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={onLoginChange}
                    class="form-control"
                    id="password"
                    name="password"
                  />
                </div>
                {errorLogin.password && (
                  <small className="text-danger">
                    Enter password or Entered password is not strong
                  </small>
                )}
                <button
                  type="submit"
                  class="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    onSubmit(logincredentials.email, logincredentials.password);
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLogin;
