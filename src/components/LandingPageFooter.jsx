import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Map from "../assets/Map.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" bg-[#000]  ">
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 text-[#fff]">
        <div className=":pl-8 w-550px">
          <div className="flex lg:gap-4 lg:mt-6 lg:mb-10 ">
            <img
              src="/LogoImage.png"
              alt="Mi Artisan Logo"
              width="26.96px"
              height="20.67px"
            />
            <p className="font-medium text-sm lg:text-2xl w-550px">
              MI ARTISAN
            </p>
          </div>
          <p className="mb-3 pl-2">
            Connecting artisans with the world,Celebrating <br />
            craftsmanship and creativity"Discover unique handmade <br />
            treasures."Empowering artisans globally"."Your marketplace <br />
            for handcrafted goods. "Supporting artisans, one purchase <br />
            at a time".
          </p>
          <h3 className="text-2xl font-medium">Follow us</h3>
          <div className="flex gap-4 text-xl mt-4">
            <BiLogoFacebook />
            <FaXTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        <div className="mt-6  ">
          <h3 className="font-medium text-2xl mb-10">Pages</h3>
          <p className="mb-6">
            <Link to="/">Home</Link>
          </p>
          <p className="mb-6">
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/service">Our Services</Link>
          </p>
          <p>
            <Link to="/contact">Contact Us</Link>
          </p>
        </div>
        <div className="mt-6 ">
          <h3 className="font-medium text-2xl mb-10">Services</h3>
          <p className="mb-6">Caregiver</p>
          <p className="mb-6">Mechanic</p>
          <p className="mb-6">Plumber</p>
          <p className="mb-6">Tailor</p>
          <p>Drycleaner</p>
        </div>
        <div className="mt-6 ">
          <h3 className="font-medium text-2xl mb-10">contact us</h3>
          <p className="mb-6"> Address: Skillup Training Centre,8 Olayiwola Street
           Opposite Galatic School General gas Ibadan </p>
          <p className="mb-6">Phone No.:+234-706-952-52054</p>
          <p className="mb-6">E-mail:asdfghjk@gmail.com</p>
          <p>Whatsapp No: +234-706-952-5205 </p>
        </div>

        <div className="mt-6 ml-4">
          <h3 className="font-medium text-2xl mb-4">Map Location</h3>
          <p>
            <img src={Map} alt="map" />
          </p>
        </div>
      </div>
      <div>
        <p className="text-center text-[#fff] text-2xl mt-16 pb-10">
        MIARTISAN 2024 © All Copyrights Reserved.
        </p>
      </div>
    </div>
  );
}
