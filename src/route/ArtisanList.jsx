import React from "react";
import VerifyIcon from "../assets/VerifyIcon.png";
import { Link } from "react-router-dom";
import Ade from "../assets/Ade.png"

export default function ArtisanList() {
  return (
    <div className="flex flex-col items-center md:p-4 gap-6  lg:p-4 bg-green-100 border-2 border-green-400 rounded-lg mb-4">
      <div className="bg-[#BDE2C0] border-2 border-[#09AB46] w-full h-36 p-6 flex  rounded-3xl">
        <div className="flex pl-2 md:pl-12 lg:pl-12">
          <div className="w-16 h-16 bg-[#D9D9D9] rounded-full mr-4">
            <img src= {Ade} alt="" />
            <img src={VerifyIcon} className="w-4 h-4 ml-14" alt="verify img" />
          </div>
          <div>
            <h2 className="text-xl text-[#09AB46] text-center pt-2 mb-4 md:w-[500px] w-64 lg:w-[800px] lg:ml-14 h-1/2 bg-[#F4E8E8]">
              Adewale Festus{" "}
            </h2>
            <Link to="/select-artisan">
              <button className="px-4 py-2 bg-[#FFFADA] text-[#FC0808] absolute left-1/2  rounded-lg hover:bg-orange-600">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#BDE2C0] border-2 border-[#09AB46] w-full h-36 p-6 flex  rounded-3xl">
        <div className="flex pl-2 md:pl-12 lg:pl-12">
          <div className="w-16 h-16 bg-[#D9D9D9] rounded-full mr-4">
            <img src= {Ade} alt="" />
            <img src={VerifyIcon} className="w-4 h-4 ml-14" alt="verify img" />
          </div>
          <div>
            <h2 className="text-xl text-[#09AB46] text-center pt-2 mb-4 md:w-[500px] w-64 lg:w-[800px] lg:ml-14 h-1/2 bg-[#F4E8E8]">
              Oluwaseun Bernard{" "}
            </h2>
            <Link to="/select-artisan">
              <button className="px-4 py-2 bg-[#FFFADA] text-[#FC0808] absolute left-1/2  rounded-lg hover:bg-orange-600">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#BDE2C0] border-2 border-[#09AB46] w-full h-36 p-6 flex  rounded-3xl">
        <div className="flex pl-2 md:pl-12 lg:pl-12">
          <div className="w-16 h-16 bg-[#D9D9D9] rounded-full mr-4">
            <img src= {Ade} alt="" />
            <img src={VerifyIcon} className="w-4 h-4 ml-14" alt="verify img" />
          </div>
          <div>
            <h2 className="text-xl text-[#09AB46] text-center pt-2 mb-4 md:w-[500px] w-64 lg:w-[800px] lg:ml-14 h-1/2 bg-[#F4E8E8]">
              Uche Sunday{" "}
            </h2>
            <Link to="/select-artisan">
              <button className="px-4 py-2 bg-[#FFFADA] text-[#FC0808] absolute left-1/2  rounded-lg hover:bg-orange-600">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
