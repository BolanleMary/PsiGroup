import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import LogoImage from "../../public/LogoImage.png";
import Map from "../assets/Map.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" bg-[#000]  ">
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 text-[#fff]">
        <div className=" w-550px">
          <div className="flex lg:gap-4 lg:mt-6 lg:mb-10 ">
            <img src={LogoImage} alt="Mi Artisan Logo" className="  w-7 h-7" />
            <p className="font-medium text-2xl">MI ARTISAN</p>
          </div>
          <p className="mb-3">
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel <br />
            utom diska. Jinesade bel när feras redorade i belogi. FAR <br />
            paratyp i muvåning, och pesask vyfisat. Viktiga poddradio <br />
            har un mad och inde.
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
            {" "}
            <Link to="/service">Our Services</Link>
          </p>
          <p>
            <Link to="/contact">Contact Us</Link>
          </p>
        </div>
        <div className="mt-6">
          <h3 className="font-medium text-2xl mb-10">Services</h3>
          <p className="mb-6">Caregiver</p>
          <p className="mb-6">Mechanic</p>
          <p className="mb-6">Plumber</p>
          <p className="mb-6">Tailor</p>
          <p>Drycleaner</p>
        </div>
        <div className="mt-6 ">
          <h3 className="font-medium text-2xl mb-10">contact us</h3>
          <p className="mb-6"> Address:No.29xxx estate</p>
          <p className="mb-6">Opposite Galatic School General gas Ibadan</p>
          <p className="mb-6">Phone No.:+234-706-952-52054</p>
          <p className="mb-6">E-mail:asdfghjk@gmail.com</p>
          <p>Whatsapp No </p>
        </div>

        <div className="mt-6 ml-4 pr-4">
          <h3 className="font-medium text-2xl mb-4">Map Location</h3>
          <p>
            <img src={Map} alt="map" />
          </p>
        </div>
      </div>
    </div>
  );
}
