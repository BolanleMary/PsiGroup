import React from "react";
import LogoImage from "../../public/LogoImage.png";
import UploadpicImg from "../assets/UploadpicImg.jpg";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div>
      <div className=" bg-[#77FF84] text-white pl-4">
        <div className="flex">
          <img
            src={LogoImage}
            alt="Mi Artisan Logo"
            className=" my-2 md:w-12 md:h-12 w-16 h-16"
          />
          <p className="font-semibold text-2xl lg:text-3xl mt-6">MI ARTISAN</p>
        </div>
        <h1 className=" text-4xl font-bold text-center">
          Registration Programme
        </h1>
        <p className="text-center">Please complete this registration form</p>
        <div className="flex gap-10">
          <img src={UploadpicImg} className="rounded-full" alt="upload Image" />
          <button className="bg-[#13CF58] h-8  mt-28 px-8 rounded-xl">
            Upload Photo
          </button>
        </div>
      </div>
      <form className="text-[#09AB46] p-2 mt-4 justify-center gap-4 w-full flex flex-col md:text-lg lg:text-lg items-center">
        <div>
          <label for="name" className=" font-bold">
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-64 md:w-[500px] lg:w-[1000px] px-3 py-2 border ml-5 md:ml-24 lg:ml-28 border-[#04FF2D] rounded-xl"
          />
        </div>
        <div>
          <label for="email" className=" font-bold">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-48 md:w-[500px] lg:w-[1000px] px-3 py-2 border ml-5 md:ml-24 lg:ml-28 border-[#04FF2D] rounded-xl"
          />
        </div>
        <div>
          <label for="password" className=" font-bold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-64 md:w-[500px] lg:w-[1000px] px-3 py-2 border ml-5 md:ml-24 lg:ml-28 border-[#04FF2D] rounded-xl"
          />
        </div>
        <div>
          <label for="password" className=" font-bold">
            Confirm Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-48 md:w-[500px] lg:w-[1000px] px-3 py-2 border ml-2 md:ml-24 lg:ml-28 border-[#04FF2D] rounded-xl"
          />
        </div>
        <div>
          <label for="name" className=" font-bold">
            Shop Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-64 md:w-[500px] lg:w-[1000px] px-3 py-2 border ml-5 md:ml-24 lg:ml-28 border-[#04FF2D] rounded-xl"
          />
        </div>
        <div>
          <label for="category" className="  font-bold">
            Craft/Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            required
            className="w-48 md:w-[500px] lg:w-[1000px] px-3 py-2 border ml-5 md:ml-24 lg:ml-28 border-[#04FF2D] rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className=" font-bold mb-1">
            Description Of Your Work
          </label>
          <textarea
            id="message"
            name="message"
            className="p-3 w-96 md:w-[720px] lg:w-[1200px] border border-[#04FF2D] shadow-sm "
            rows="4"
            required
          />
        </div>
        <div>
          <label for="phone number" className="  font-bold">
            Phone Number:
          </label>
          <input
            type="number"
            id="phone number"
            name="phone number"
            required
            className="w-64 md:w-[500px] lg:w-[1000px] px-3 py-2 border ml-5 md:ml-24 lg:ml-28 border-[#04FF2D] rounded-xl"
          />
        </div>
        <div>
          <label for="address" className="  font-bold">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            className="w-64 md:w-[500px] lg:w-[1000px] px-3 py-2 border ml-5 md:ml-24 lg:ml-28 border-[#04FF2D] rounded-xl"
          />
        </div>
        <div>
          <label for="business name" className="  font-bold">
            Business Name:
          </label>
          <input
            type="text"
            id="business name"
            name="business name"
            required
            className="w-48 md:w-[500px] lg:w-[1000px] px-3 py-2 border ml-5 md:ml-24 lg:ml-28 border-[#04FF2D] rounded-xl"
          />
        </div>
        <div>
          <label for="business name" className="  font-bold">
            Location of workplace:
          </label>
          <input
            type="text"
            id="business name"
            name="business name"
            required
            className="w-40 md:w-[500px] lg:w-[800px] px-3 py-2 border ml-5 md:ml-24 lg:ml-28 border-[#04FF2D] rounded-xl"
          />
        </div>

        <div>
          <label for="business website" className="  font-bold">
            Business Website:
          </label>
          <input
            type="text"
            id="business website"
            name="business  website"
            required
            className="w-48 md:w-[500px] lg:w-[1000px] px-3 py-2 border ml-5 md:ml-24 lg:ml-28 border-[#04FF2D] rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="checkbox"
            className="flex items-center text-sm font-mediummb-1"
          >
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="h-4 w-4  rounded"
            />
            <span className="ml-2 text-[#04FF2D] text-xl">
              I agree to the terms and conditions
            </span>
          </label>
        </div>
      </form>
      <Link to="/">
        <button className="bg-[#04FF2D] text-black mr-28 px-6 font-bold rounded-xl float-right">
          Verify
        </button>
      </Link>
    </div>
  );
}
