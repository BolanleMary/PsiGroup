import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      {/* Hamburger */}
      <div className="block md:hidden lg:hidden mt-8 ml-24">
        <button
          onClick={toggleMenu}
          className="text-white outline outline-white hover:outline hover:outline-black"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Navbar for bigger screen */}
      <ul className=" hidden  md:flex lg:flex felx-row  gap-8 lg:gap-16 mt-6 ">
        <li className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white"
            }
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white"
            }
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white"
            }
          >
            SignUp
          </NavLink>
        </li>
        <button className="bg-[#04FF2D]  h-8 px-2  mb-14 mr-6 rounded-lg">
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "text-black" : "text-white"
              }
            >
              Sign in
            </NavLink>
          </li>
        </button>
      </ul>
      {/* Hamburger menu for smaller screen */}
      <div
        className={`md:hidden lg:hidden ${
          isOpen ? "block" : "hidden"
        } absolute inset-0 bg-[#09AB46] opacity-95 pt-4 text-xl text-white h-96`}
      >
        <div className="flex flex-col gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white "
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white "
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-white "
            }
          >
            SignUp
          </NavLink>
          <button className="bg-[#04FF2D]  h-8 w-1/5  mb-14 mr-6 rounded-lg ">
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "text-black" : "text-white "
              }
            >
              Sign in
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavLinks;
