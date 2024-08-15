import React from "react";
import LogoImage from "../../public/LogoImage.png";
import Google from "../../public/googles.png";
import Facebook from "../../public/facebookicon.png";
import Img from "../assets/Login.png";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-items-center min-h-screen bg-gray-200">
      <div className="bg-green-500 rounded-lg flex flex-col justify-center items-center shadow-lg w-1/4 md:w-1/2 lg:w-1/2">
        <div className="p-2">
          <h2 className="mt-4 text-lg md:text-2xl lg:text-2xl font-bold text-white">
            Find all types of Artisan in this website
          </h2>
          <img src={Img} alt="Artisan" className="md:ml-16 lg:ml-16 mt-6 " />
        </div>
      </div>
      <div className="w-3/4  md:w-1/2  lg:w-1/2 p-6  md:p-10 lg:p-10 bg-white rounded-3xl">
        <img
          src={LogoImage}
          alt="Artisan"
          className=" w-10 h-10 md:w-36 md:h-36 lg:w-36 lg:h-36"
        />
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <div className=" flex gap-2">
          <button className="w-1/2 flex tracking-tight text-black border border-green-500 rounded-lg hover:bg-green-400">
            <img src={Google} alt="" className="w-6 h-6" />
            Sign Up with Google
          </button>
          <button className="w-1/2 flex text-black tracking-tight border border-green-500 rounded-lg hover:bg-green-400">
            <img src={Facebook} alt="" className="w-6 h-6" />
            Sign Up with Facebook
          </button>
        </div>
        <div className="text-center my-4 font-bold">- OR -</div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Full Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <a href="/forget-password" className="text-green-600 text-sm">
              <Link to="/ForgetPassword">Forgot password?</Link>
            </a>
          </div>
          <Link to="/">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Log In
            </button>
          </Link>
        </form>
        <div className="text-center mt-4">
          Don't have an account?{" "}
          <a href="/intro-registration" className="text-green-600 font-bold">
            <Link to="/signup"> Sign Up </Link>
          </a>
        </div>
      </div>
    </div>
  );
}
