import React from "react";
import Ade from "../assets/Ade.png"

export default function SelectArtisan() {
  return (
    <div className=" flex justify-center items-center w-screen h-screen bg-green-200 ">
      <div className="flex pl-2 md:pl-12 lg:pl-12">
        <div className="w-16 h-16  md:w-24 md:h-24 lg:w-24 lg:h-24  bg-[#D9D9D9] rounded-full mr-4"><img src={Ade} alt="" /></div>
        <div>
          <h2 className="text-xl text-[#09AB46] text-center pt-2 mb-4 md:w-[500px] w-64 lg:w-[800px] lg:ml-14 md:h-16 lg:h-16 bg-[#F4E8E8]">
            Adewale Festus
          </h2>
          <h2 className="text-xl text-black text-center pt-2 mb-4 md:w-[500px] w-64 lg:w-[800px] lg:ml-14 md:h-16 lg:h-16 bg-[#FFFADA]">
            Phone : +2349021217980
          </h2>
          <h2 className="text-xl text-[#1A3BE6] text-center pt-2 mb-4 md:w-[500px] w-64 lg:w-[800px] lg:ml-14 md:h-16 lg:h-16 bg-[#FEFEFF]">
            Email: adewalefs@gmail.com
          </h2>
          <div className=" flex flex-col ml-8 md:flex md:flex-row lg:flex lg:flex-row gap-4">
            <button className="px-4 py-2 bg-[#F4E8E8] text-[#09AB46] w-3/4 md:w-1/2 lg:w-1/2  rounded-lg ">
              Book Now
            </button>
            <button className="px-4 py-2 bg-[#514B4B] text-[#FFFFFF] w-3/4 md:w-1/2 lg:w-1/2    rounded-lg">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
