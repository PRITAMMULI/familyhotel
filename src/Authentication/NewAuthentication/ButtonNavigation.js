import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../genralcomponent/Navbar";
import hotelcontext from "../../hotelcontext/hotelContext";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import NewLogin from "./NewLogin";
import NewSignup from "./NewSignup";

function ButtonNavigation() {

const context = useContext(hotelcontext)
const {resrictONAuthentication} = context
    const [value, setValue] = useState(0);

  useEffect(() => {
    resrictONAuthentication()
  }, [])
  return (
    <>
      <div>
        <Navbar />
        <div>
          <div className="navigation_box">
            <Box sx={{ width: 500 }}>
              <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  console.log(event, value);
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction label="Login" icon={<VpnKeyIcon />} />
                <BottomNavigationAction
                  label="Sign Up"
                  icon={<LockOpenIcon />}
                />
              </BottomNavigation>
            </Box>
          </div>
          <div className="form-container">
            {value === 0 ? (
              <NewLogin />
            ) : (
              <NewSignup />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonNavigation;
