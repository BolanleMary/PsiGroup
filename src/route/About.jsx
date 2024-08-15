import React from "react";
import Header from "../components/Header";
import Footer from "../components/GeneralFooter";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <body className=" w-screen h-screen justify-center items-center  font-poppins">
      <Header />
      <div /*className="flex gap-12 mt-4  "*/>
        <div className="flex mt-6 gap-6 md:gap-16 lg:gap-16">
          <h1 className="font-poppins mt-3 text-lg md:text-4xl lg:text-4xl font-black pl-4 md:pl-12 lg:pl-12 ">
            About Us
          </h1>
          <h1 className="text-2xl md:mt-6 font-bold mt-3 text-[#09AB46] ">
            About MI ARTISAN
          </h1>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row  md:gap-16 lg:gap-16 ">
          <h3 className="font-poppins text-lg  md:text-3xl lg:text-3xl font-semibold pl-6 md:pl-14 lg:pl-14 pt-4">
            Who We Are
          </h3>
          <p className="mt-3 font-medium text-[#09AB46] pl-10 md:pl-0 lg:pl-0 md:w-80 lg:w-80 font-poppins">
            At ARTISINIAN, we are passionate about connecting talented artisans
            with a global audience. Our platform is dedicated to showcasing
            unique, handcrafted products that tell a story of tradition,
            creativity, and craftsmanship.
          </p>
        </div>
      </div>
      <div className=" mt-10 ml-12 bg-[#09AB46]  text-white text-xl font-medium border border-solid border-l border-[#09AB46] rounded-lg w-80 md:w-[600px] lg:w-2/5">
        <h1 className=" text-2xl font-bold">Why Choose Us?</h1>
        <p className="pl-2 ">
          <span className="font-extrabold">Quality Assurance:</span> We ensure
          that every product meets our high standards of quality and
          authenticity.
        </p>
        <p className="pl-2">
          <span className="font-extrabold">Fair Trade:</span> We are committed
          to ethical practices, ensuring fair compensation for artisans and
          sustainable production methods
        </p>
      </div>
      <div className="mt-4">
        <p className="text-[#09AB46] px-12 font-bold text-xl">
          Join us in celebrating the art of craftsmanship and supporting
          <br />
          artisans worldwide. Thank you for being a part of our journey!
        </p>
      </div>
      <div className="button mt-6 mb-20">
        <Link to="/signup">
          <button className="outline outline-offset-0 outline-1 outline-[#09AB46] px-6  mb-0 rounded-xl float-right mr-24 text-[#09AB46] text-2xl">
            Join Us
          </button>
        </Link>
      </div>
      <Footer />
    </body>
  );
}
