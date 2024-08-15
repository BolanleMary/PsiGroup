import React from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700">Enter OTP</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <Link to="/NewPassword">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
