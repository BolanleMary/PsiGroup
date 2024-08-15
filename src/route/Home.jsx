import Header from "../components/Header";
import Footer from "../components/LandingPageFooter";
import ImageSlide from "../components/ImageSlide";
import "../components/Home.css";
import { Link } from "react-router-dom";
import ExploreOurServices from "../components/ExploreOurServices";
import Developers from "../components/MeetTheTeam";
import image from "../assets/WhoWeAre.png";
import ImageSlider from "../components/ImageSlider";
export default function Home() {
  return (
    <div className="font-poppins">
      <>
        <Header />
      </>

      <div>
        <ImageSlider />
        {/* <div className="text-center">
          <h1 className="  font-sans text-[#000] text-xl md:text-4xl lg:text-4xl font-extrabold ">
            A smart marketplace for artisans
            <br /> to connect with a global <br /> audience.
          </h1>
          <br />
          <p className="text-[#000]">
            Showcase your unique products and reach more customers <br />
            with MI ARTISAN. Our platform boosts your visibility and <br />
            supports your income growth.
          </p>
          <Link to="/signup">
            <button className=" text-[#fff] h-10  px-10 rounded-xl bg-[#0E0AE6] shadow-lg shadow-[#0E0AE6] bg-gradient-to-r from-[#09AB46] to-[#04FF2D]">
              Register with Us
            </button>
          </Link>
        </div>*/}
      </div>
      <div className="flex flex-row gap-3 md:gap-6  lg:gap-6 mt-6 mb-10 justify-center">
        <div className="border h-1 w-14 md:w-[250px] lg:w-[480px] border-[#09AB46] bg-[#09AB46] mt-3  " />
        <div className="text-[#09AB46] text-center font-medium text-lg ">
          Explore Our Unique Services
        </div>
        <div className="border h-1 w-14 md:w-[250px] lg:w-[480px] border-[#09AB46] bg-[#09AB46] mt-3 "></div>
      </div>
      <div>
        <ExploreOurServices />
      </div>
      <div>
        <div className="flex flex-row gap-6 mt-6 mb-10 justify-center">
          <div className="border h-1 w-14 md:w-[250px] lg:w-[550px] border-[#09AB46] bg-[#09AB46] mt-3 " />
          <div className="text-[#09AB46] font-medium text-lg ">
            Meet Our Team
          </div>
          <div className="border h-1 w-14 md:w-[250px] lg:w-[550px] border-[#09AB46] bg-[#09AB46] mt-3 "></div>
        </div>
        <div>
          <Developers />
        </div>
        <div>
          <div className="flex flex-row gap-4 mt-6 mb-10 justify-center">
            <div className="border h-1 w-28 md:w-[500px] lg:w-[550px] border-[#09AB46] bg-[#09AB46] mt-3 " />
            <div className="text-[#09AB46] font-medium text-lg ">
              Who We Are
            </div>
            <div className="border h-1 w-28 md:w-[500px] lg:w-[550px] border-[#09AB46] bg-[#09AB46] mt-3 "></div>
          </div>
        </div>
        <div className="flex gap-6 mb-6">
          <div>
            <p
              className=" border-4 border-solid border-[#09AB46] rounded-3xl p-8 ml-8 text-xl text-[#353D42]
             font-semibold lg:w-[1000px] w- "
            >
              At MI ARTISAN, we are committed to connecting local artisans with
              their communitie through innovative and user-friendly solutions.
              Our mission is to empower artisans by providing a platform that
              enhances their visibility, streamlines their services, and fosters
              meaningful connections with customers. We strive to deliver
              exceptional value and support, helping artisans thrive in today’s
              dynamic market.
            </p>
            <p
              className=" border-4 rounded-3xl border-solid border-[#09AB46] mt-10 font-semibold
            pr-10 ml-6 pl-8 lg:w-1/2 pt-4 pb-2 w-80"
            >
              Website: www.miartisan.com <br />
              Email: info@miartisan.com <br />
              Phone: +234-706-952-5205 <br /> Office: Skillup Training Centre,8
              Olayiwola Street <br /> Off Freedom House, General Gas, Akobo
              Ibadan.
            </p>
          </div>
          <div className="">
            <img
              className=" opacity-0 md:opacity-100 lg:opacity-100  h-[407px] mb-2"
              src={image}
            />
          </div>
        </div>
        <>
          <Footer />
        </>
      </div>
    </div>
  );
}
