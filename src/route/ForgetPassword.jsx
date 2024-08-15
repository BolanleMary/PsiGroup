// src/ForgetPasswordPage.js
import React from "react";
import { Link } from "react-router-dom";

export default function ForgetPassword() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('path_to_your_image/background.png')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Forget Password</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Enter E-mail
            </label>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <Link to="/EnterOtp">
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Send
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
