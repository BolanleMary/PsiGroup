import React from "react";
import Signin from "../assets/Signin.png";
import LogoImage from "../../public/LogoImage.png";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <div className="flex justify-items-center min-h-screen">
      <div className="flex flex-col justify-center items-center bg-green-500 w-1/4 md:w-1/2 lg:w-1/2 p-8 ">
        <div className="text-center mb-4">
          <h1 className=" text-2xl md:text-3xl Lg:text-3xl font-bold text-white">
            Start New Journey!
          </h1>
          <h2 className=" text-xl md:text-2xl lg:text-2xl text-white">
            As an Artisan
          </h2>
        </div>
        <img src={Signin} alt="Artisan" className=" w-2/3" />
      </div>
      {/* Right Side */}
      <div className="flex flex-col justify-center items-center  bg-white w-3/4  md:w-1/2  lg:w-1/2 p-8">
        <div className="max-w-md w-full">
          <div className="flex gap-2">
            <img src={LogoImage} alt="" className="w-10" />
            <span className=" text-sm font-bold"> MI ARTISAN</span>
          </div>
          <br />
          <h1 className="text-3xl font-bold mb-6">Create account</h1>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="date"
              placeholder="Date of birth (weekend)"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" required />
              <span>I agree to all the Terms and Privacy policy</span>
            </div>
            <Link to="/registration">
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded"
              >
                Create account
              </button>
            </Link>
            <button
              type="button"
              className="w-full bg-gray-800 text-black p-2 rounded flex items-center justify-center space-x-2"
            >
              <img
                src="public/googles.png"
                alt="Google Logo"
                className="w-6 h-6 "
              />
              <span className="text-white">Sign in with Google</span>
            </button>
          </form>
          <div className="mt-6 text-center">
            <span>Already have an account?</span>
            <a href="/login" className="text-green-500 font-bold ml-2">
              <Link to="/Login">Log In</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
