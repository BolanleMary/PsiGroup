// src/CreateAccountForm.js
import React from "react";
import LogoImage from "../../public/LogoImage.png";
import { Link } from "react-router-dom";

export default function CreateAccountForm() {
  return (
    <div className="flex flex-row md:flex-row min-h-screen">
      <div className="w-1/4 md:w-1/2 lg:w-1/2 bg-green-500 flex items-center justify-center">
        <img src={LogoImage} alt="Logo" className="w-1/2" />
      </div>
      <div className="md:w-1/2 bg-white flex flex-col justify-center p-8">
        <h1 className="text-3xl font-bold mb-6">Create account</h1>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
          <input
            type="email"
            placeholder="Email or phone number"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="date"
            placeholder="Date of birth (weekend)"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Remember me</span>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>I agree to all the Terms and Privacy policy</span>
          </div>
          <Link to="/">
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded"
            >
              Create account
            </button>
          </Link>
          <button
            type="button"
            className="w-full bg-black text-white p-2 rounded flex items-center justify-center space-x-2"
          >
            <img src="googles.png" alt="Google Logo" className="w-8 h-8" />
            <span>Sign in with Google</span>
          </button>
        </form>
        <div className="mt-6 text-center">
          <span>Already have an account?</span>
          <a href="/login" className="text-green-500 ml-2 font-bold">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}
