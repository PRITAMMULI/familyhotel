import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebaseFiles/Config";
import hotelcontext from '../../hotelcontext/hotelContext';
import SignupImaage from "../../Images/signup_image.png"
function NewSignup() {
  const [values, setValues] = useState("");
  const context = useContext(hotelcontext);
  const {handleSignup, onSignupChange, signupcredentials, onSignUPSubmit, errorSignup, setErrorSignup } = context;


  const { email, password } = signupcredentials;


  return (
    <>
       <div className="container">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8" id="form_container">
          <div className="row">
            <div className="col-lg-6 login_image_container">
              <img src={SignupImaage} className="signup_image" alt="" />
            </div>
            <div className="col-lg-6">
              <h2 className="member_login_heading mt-5">welcome to Hunger Box</h2>
              <form id="form">
              <div
                  className={`mb-3 form_input ${
                    errorSignup.email ? "has-error" : ""
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
                    onChange={onSignupChange}
                    aria-describedby="emailHelp"
                  />
                </div>
                {errorSignup.email && (
                  <small className="text-danger">
                    Enter emaail
                  </small>
                )}
                <div
                  className={`mb-3 form_input ${
                    errorSignup.password ? "has-error" : ""
                  }`}
                >
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={onSignupChange}
                    class="form-control"
                    id="password"
                    name="password"
                  />
                </div>
                {errorSignup.password && (
                  <small className="text-danger">
                    Enter password or Entered password is not strong
                  </small>
                )}

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    onChange={onSignupChange}
                    class="form-control"
                    id="cpassword"
                    name="cpassword"
                  />
                </div>
                <button
                  type="submit"
                  class="btn"
                  onClick={(e) => {
                    e.preventDefault();
                    onSignUPSubmit(auth, signupcredentials.email, signupcredentials.password, signupcredentials.cpassword);
                  }}
                >
                  Create account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default NewSignup
