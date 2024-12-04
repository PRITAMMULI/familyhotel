import React from "react";
import bacckgroumd from "../Images/foodBackground.jpg";
import Navbar from "../genralcomponent/Navbar";
import Burger from "../Images/Burger.jpg";
import Cake from "../Images/cake.jpg";
import Idli from "../Images/idli.jpg";
import NewFooter from "./NewFooter";
import "./Home.css"
function NewHome() {
   
  return (
    <>
      <Navbar />
      <div>
        <img src={bacckgroumd} className="background_image" alt="" />
      </div>

      <div className="top_product_heading">
        <h1 className="top_rated_food_heading">Our top rated food</h1>

        <div className="container">
          <div className="row">
             <div className="col-lg-4  col-md-4 col-sm-4 col-4">
              <div class="card topr_rated_image_card">
                <img src={Burger} class="top_rated_food_image card-img-top" alt="..." />
              </div>
            </div>
             <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <div class="card topr_rated_image_card">
                <img src={Cake} class="top_rated_food_image card-img-top" alt="..." />
              </div>
            </div>
             <div className="col-lg-4 col-md-4 col-sm-4 col-4">
              <div class="card topr_rated_image_card">
                <img src={Idli} class="card-img-top top_rated_food_image" alt="..." />
              </div>
            </div>
          </div>
        </div>
       </div>

      <NewFooter />
    </>
  );
}

export default NewHome;
