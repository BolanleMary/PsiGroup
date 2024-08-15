import React from "react";
import { useState } from "react";
import MainImage from "../../public/MainImage.jpg";
import Mechanic from "../assets/Mechanic.png";
import Plumber from "../assets/Plumber.jpg";
import Tailor from "../assets/Tailor.png";
import DryCleaner from "../assets/DryCleaner.png";
import Caregiver from "../assets/Caregiver.jpeg";

export default function BackgroundChanger() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["/public/MainImage.jpg", "/Mechanic.png", "Plumber"];

  const changeImage = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };

  return (
    <div
      className={`bg-cover bg-center ${images[imageIndex]}`}
      style={{ height: "100vh" }}
    >
      <button onClick={changeImage}>Change Image</button>
    </div>
  );
}
