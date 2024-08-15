import React from "react";
import Contact from "../assets/ContactUs.png";
import CallIcon from "../assets/CallIcon.svg";
import LocationIcon from "../assets/LocationIcon.svg";
import Header from "../components/Header";
import Footer from "../components/GeneralFooter";

export default function ContactUs() {
  return (
    <div className="font-poppins">
      <Header />
      <body className="md:ml-8 lg:ml-16 mt-6 ml-6">
        <h1 className="text-xl md:text-5xl lg:text-5xl font-extrabold">
          Contact Us
        </h1>
        <p className="text-xl md:text-4xl lg:text-4xl font-bold md:pl-16 pl-4 lg:pl-16 md:pt-6 lg:pt-6 pt-2 pb-4">
          Get In touch with us through our webpages
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row md:gap-8 lg:gap-20 mb-10  ">
          <img
            className=" w-64 h-32 md:w-72 md:h-72 lg:h-[414px] lg:w-[588px]"
            src={Contact}
            alt=" Contact Image"
          />
          <div>
            <div className="flex gap-2 md:gap-8 lg:gap-8 mt-4 md:-mt-32 lg:-mt-24">
              <img
                className="flex-grow-0 w-6 h-6 md:w-auto md:h-auto lg:w-auto lg:h-auto"
                src={CallIcon}
                alt=" Call Icon"
              />
              <div className="md:mt-28 lg:mt-28 text-[#1A202C]">
                <h1 className="text-lg md:text-2xl lg:text-2xl font-bold ">
                  Customer Support
                </h1>
                <p className="md:mt-3 lg:mt-6 text-sm md:text-lg lg:text-lg">
                  Need help? We're here for you! <br /> Email:
                  support@smartmarketplace.com <br />
                  Phone: +1 (123) 456-7890 <br /> Address: 123 Artisans Lane,
                  Creativity City, 98765
                </p>
              </div>
            </div>

            <div className="flex gap-2 md:gap-8 lg:gap-8 mt-2 md:-mt-24 lg:-mt-24">
              <img
                className="flex-grow-0 w-6 h-6 md:w-auto md:h-auto lg:w-auto lg:h-auto "
                src={LocationIcon}
                alt=" Call Icon"
              />
              <div className=" md:mt-28 lg:mt-28 text-[#1A202C]">
                <h1 className="text-lg md:text-2xl lg:text-2xl font-bold  ">
                  Our Location
                </h1>
                <p className="md:mt-3 lg:mt-6 text-sm md:text-lg lg:text-lg">
                  Address:No.29xxx estate Opposite Galatic School General gas
                  Ibadan <br />
                  Phone No.:+234-706-952-52054 <br />
                  E-mail:asdfghjk@gmail.com <br />
                  Whatsapp No
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
}
