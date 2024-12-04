import React, { useEffect, useState } from "react";
import Navbar from "../../genralcomponent/Navbar";
import { MenuItems } from "../MenuItems";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library

function NewMenu() {
  let arr = [];
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  MenuItems.map((value) => {
    arr.push(value.food.image);
  });

  return (
    <>
      <Navbar />
      <div className="inspiration_for_you">
        <div className="carousel-container" data-aos="fade-up">
          <h1>Inspiration for your first order</h1>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={6}
            navigation
          >
            {arr.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="inspiration_image carousel-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {MenuItems.map((value, index) => (
            <div
              key={index}
              className="col-lg-4 p-5 mt-4 col-md-4 col-sm-6 col-12"
              data-aos="flip-up"
              data-aos-delay={index * 10} // Add delay for staggered animation
              data-aos-duration="800"
            >
              <div
                className="card menu_card"
                onClick={() => {
                  navigate("/productdetails");
                }}
              >
                <img
                  src={value.food.image}
                  className="card-img-top menu_image"
                  alt="..."
                />
                <div className="menu_card_body card-body d-flex justify-between">
                  <div>
                    <h5 className="card-title">{value.food.knownAs}</h5>
                    <p>{value.food.category}</p>
                  </div>
                  <h5>{value.food.price} &#8360;</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NewMenu;

// import React, { useState } from "react";
// import Navbar from "../../genralcomponent/Navbar";
// import { MenuItems } from "../MenuItems";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { useNavigate } from "react-router-dom";

// function NewMenu() {
//   // const [items, setItems] = useState([])
//   let arr = [];

//   const navigate = useNavigate();
//   MenuItems.map((value) => {
//     // console.log(value.food.image)
//     arr.push(value.food.image);
//   });

//   arr.map((value) => {
//     console.log(value);
//   });

//   //   setItems(MenuItems)

//   //   console.log(items)
//   return (
//     <>
//       <Navbar />
//       <div className="inspiration_for_you">
//         <div className="carousel-container">
//           <h1>Inspoiration for your first order</h1>
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={10}
//             slidesPerView={6}
//             navigation
//           >
//             {arr.map((img, index) => (
//               <SwiperSlide key={index}>
//                 <img
//                   src={img}
//                   alt={`Slide ${index + 1}`}
//                   className="inspiration_image carousel-image"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>

//       <div className="container">
//         <div className="row">
//           {MenuItems.map((value) => {
//             console.log(value);
//             return (
//               <>
//                 <div className="col-lg-4 p-5 mt-4">
//                   <div
//                 //   data-aos="flip-left"
//                 data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" 
//                     class="card menu_card"
//                     onClick={() => {
//                       navigate("/productdetails");
//                     }}
//                   >
//                     <img
//                       src={value.food.image}
//                       class="card-img-top menu_image"
//                       alt="..."
//                     />
//                     <div class="menu_card_body card-body d-flex justify-between">
//                       <div>
//                         <h5 class="card-title">{value.food.knownAs}</h5>
//                         <p>{value.food.category}</p>
//                       </div>
//                       <h5>{value.food.price} </h5>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default NewMenu;
