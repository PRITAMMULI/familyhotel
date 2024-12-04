import React, { useEffect, useReducer } from "react";
import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import hotelcontext from "../hotelcontext/hotelContext";
import MenuCategoryButtons from "./overallMenu/MenuCategoryButtons";
import { ToastContainer, toast } from "react-toastify";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShopIcon from "@mui/icons-material/Shop";
import Navbar from "../genralcomponent/Navbar";
import Footer from "../genralcomponent/Footer";

function MenuCard() {
  const context = useContext(hotelcontext);
  const { selecteditem, YourItems, handleSubmit, reducer, Buy_the_product } =
    context;

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    reasonofrejection: "",
    actionby: "",
  });
  const { reasonofrejection, actionby } = credentials;
  let initialState = 1;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Navbar />
      <div className="totalmenu">
        <MenuCategoryButtons />
        <div className="menu_items">
          <h1 className="menu">{localStorage.getItem("category")}</h1>
          <div className="container">
            <div className="menuitems">
              <div className="row">
                {selecteditem &&
                  selecteditem.map((value) => {
                    return (
                      <>
                        <div className="col-lg-4">
                          <div class="card menucard">
                            <img
                              src={value.food.image}
                              class="card-img-top productimage"
                              alt="..."
                              onClick={(e) => {
                                e.preventDefault();
                                localStorage.setItem("dishid", value.food.id);
                                navigate("/dishdetails");
                              }}
                            />
                            <div class="card-body">
                              <h4 class="card-title food_category">
                                {value.food.knownAs}
                              </h4>

                              <form action="">
                                <div className="uiui">
                                  <div className="wrapper">
                                    {state == 1 ? (
                                      <span
                                        className="minus d-none"
                                        onClick={() =>
                                          dispatch({ type: "DECREAMENT" })
                                        }
                                      >
                                        -
                                      </span>
                                    ) : (
                                      <span
                                        className="minus"
                                        onClick={() =>
                                          dispatch({ type: "DECREAMENT" })
                                        }
                                      >
                                        -
                                      </span>
                                    )}

                                    <span
                                      className="num"
                                      onChange={onchange}
                                      id="num"
                                    >
                                      {state}
                                    </span>
                                    <span
                                      className="plus"
                                      onClick={() =>
                                        dispatch({ type: "INCREAMENT" })
                                      }
                                    >
                                      +
                                    </span>
                                  </div>
                                </div>
                              </form>

                              <div className="row">
                                <div className="col-lg-12">
                                  <button
                                    type="button"
                                    class="btn btn-outline-success shopping_icons"
                                    onClick={() => {
                                      Buy_the_product(
                                        localStorage.getItem("email"),
                                        value.food.knownAs,
                                        value.food.category,
                                        value.food.id,
                                        state,
                                        "pending",
                                        value.food.discountedprice,
                                        credentials.reasonofrejection,
                                        credentials.actionby
                                      );
                                    }}
                                  >
                                    <ShopIcon /> Buy now
                                  </button>
                                </div>
                                <div className="col-lg-12">
                                  <button
                                    type="button"
                                    class="btn btn-outline-warning shopping_icons"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleSubmit(
                                        localStorage.getItem("email"),
                                        value.food.knownAs,
                                        value.food.category,
                                        value.food.id,
                                        state,
                                        "500"
                                      );
                                    }}
                                  >
                                    <AddShoppingCartIcon /> Add To Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MenuCard;
