// src/components/ImageSlider.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Caregiver from "../assets/Caregiver.jpeg";
import Plumber from "../assets/Plumber.jpg";

const slides = [
  {
    image: "https://i.ibb.co/S5F2rL9/Main-Image.jpg",
    title:
      " A smart marketplace for artisans to connect with a global audience.",
    description:
      "Showcase your unique products and reach more customers with MI ARTISAN. Our platform boosts your visibility and supports your income growth.",
  },
  {
    image: "https://i.ibb.co/4gfj8X5/Caregiver.jpg",
    title:
      " A smart marketplace for artisans to connect with a global audience.",
    description:
      "Showcase your unique products and reach more customers with MI ARTISAN. Our platform boosts your visibility and supports your income growth.",
  },
  {
    image: "https://i.ibb.co/q7Nj4rc/Plumber.jpg",
    title:
      " A smart marketplace for artisans to connect with a global audience.",
    description:
      "Showcase your unique products and reach more customers with MI ARTISAN. Our platform boosts your visibility and supports your income growth.",
  },

  {
    image: "https://i.ibb.co/TqQXLf2/woman-Mechanic.jpg",
    title:
      " A smart marketplace for artisans to connect with a global audience.",
    description:
      "Showcase your unique products and reach more customers with MI ARTISAN. Our platform boosts your visibility and supports your income growth.",
  },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesToShow = [...slides, ...slides];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide >= slides.length - 1) {
          return 0;
        } else {
          return prevSlide + 1;
        }
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide >= slides.length - 1) {
        return 0;
      } else {
        return prevSlide + 1;
      }
    });
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => {
      if (prevSlide <= 0) {
        return slides.length - 1;
      } else {
        return prevSlide - 1;
      }
    });
  };

  return (
    <div className="relative overflow-hidden w-full lg:h-[900px]">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slidesToShow.map((slide, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center text-center text-white p-4">
              <h2 className="text-3xl font-extrabold lg:mb- lg:w-1/2 mb-4">
                {slide.title}
              </h2>
              <p className="text-lg mb-4 lg:mb-[500px] lg:text-2xl">
                {slide.description}
              </p>
              <Link to="/signup">
                <button className=" text-[#fff] h-10  px-10 rounded-xl bg-[#0E0AE6] shadow-lg shadow-[#0E0AE6] bg-gradient-to-r from-[#09AB46] to-[#04FF2D]">
                  Register with Us
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevSlide}
        className="absolute opacity-0 top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        &#9664;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute opacity-0  top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      >
        &#9654;
      </button>
    </div>
  );
};

export default ImageSlider;
