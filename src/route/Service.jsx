import React from "react";
import Header from "../components/Header";
import ExploreOurServices from "../components/ExploreOurServices";
import Footer from "../components/GeneralFooter";

export default function Service() {
  return (
    <div className="font-poppins ">
      <Header />
      <div className="mt-6 p-2 md:pl-8 lg:pl-8">
        <h1 className=" text-2xl md:text-5xl lg:text-5xl text-[#000] font-extrabold mb-3">
          Our Services
        </h1>
        <p className="text-[#09AB46] text-lg  md:text-2xl lg:text-2xl md:text-center lg:text-center font-bold  lg:ml-[-20px]">
          Unique Products: Discover a curated selection of handcrafted items
          made with care and passion by skilled artisans. <br />
          Global Reach: Our platform bridges the gap between local artisans and
          global customers, creating opportunities for cultural exchange and
          economic growth.
        </p>
      </div>
      <div className="flex flex-row gap-3 md:gap-6  lg:gap-6 mt-6 mb-10 justify-center">
        <div className="border h-1 w-14 md:w-[250px] lg:w-[480px] border-[#09AB46] bg-[#09AB46] mt-3  " />
        <div className="text-[#09AB46] font-medium text-lg ">
          Explore Our Unique Services
        </div>
        <div className="border h-1 w-14 md:w-[250px] lg:w-[480px] border-[#09AB46] bg-[#09AB46] mt-3 "></div>
      </div>
      <div className="mb-4">
        <ExploreOurServices />
      </div>
      <Footer />
    </div>
  );
}
