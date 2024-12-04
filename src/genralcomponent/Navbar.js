import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseFiles/Config";
import LoginIcon from "@mui/icons-material/Login";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import hotelcontext from "../hotelcontext/hotelContext";
import HungerBox from "../Images/Hungerbox.png";
import { Button } from "@mui/material";
function Navbar() {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  const context = useContext(hotelcontext);
  const { userSignOut } = context;

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  return (
    <>
      <nav class="navbar new_navbar navbar-expand-lg">
        <div class="container-fluid">
          <img
            src={HungerBox}
            className="navbar_logo"
            onClick={() => {
              navigate("/");
            }}
            alt=""
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse  navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav new_navbar_items me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => {
                    navigate("/totalmenu");
                  }}
                >
                  Memu
                </a>
              </li>
              {localStorage.getItem("email") ? (
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    <AddShoppingCartIcon />
                  </a>
                </li>
              ) : null}
            </ul>
            <div className="login_button">
              {localStorage.getItem("email") ? (
                <div class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {localStorage.getItem("email")}
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        My Order
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        My Profile
                      </a>
                    </li>

                    <hr />
                    <li>
                      <a class="dropdown-item" onClick={() => {userSignOut()}}>
                         Logout
                      </a>
                    </li>

                  </ul>
                </div>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Authenticate
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <ToastContainer />
    </>
  );
}

export default Navbar;
