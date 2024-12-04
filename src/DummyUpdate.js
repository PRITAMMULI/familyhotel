import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {MenuItems} from "./menu/MenuItems"
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
  // Add more image URLs here
];
console.log(MenuItems)
let arr = []

MenuItems.map((value) => {
  // console.log(value.food.image)
  arr.push(value.food.image)
})


arr.map((value) => {
  console.log(value)
})
function ImageCarousel() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={6}
        navigation
      >
        {arr.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
