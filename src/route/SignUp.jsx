import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <Header />
      <div className="">
        <body className="bg-green-200 h-screen flex justify-center items-center font-poppins  ">
          <div
            className="flex flex-col m-auto text-center items-center justify-center  border border-solid border-1 border-white rounded-3xl
           bg-white lg:w-[700px] lg:h-[700px] w-5/6 h-3/5 md:w-[700px] md:h-[700px] "
          >
            <p className="text-3xl md:text-6xl lg:text-6xl font-bold mb-6">
              Are you an artisan?{" "}
            </p>
            <p className=" text-3xl md:text-6xl lg:text-6xl font-bold">
              Click{" "}
              <span className="text-[#8F53DD] underline underline-offset-4 cursor-pointer  ">
                <Link to="/signin">here</Link>
              </span>{" "}
              to Register
            </p>
            <p className=" text-3xl md:text-6xl lg:text-6xl text-[#09AB46] font-bold mt-10 mb-10 md:mt-20 md:mb-20  lg:mt-20 lg:mb-20 ">
              OR
            </p>
            <p className="text-3xl md:text-6xl lg:text-6xl  font-bold mb-6">
              Are you a end user?
            </p>
            <p className="text-3xl md:text-6xl lg:text-6xl font-bold">
              Click{" "}
              <span className="text-[#FF004D] underline underline-offset-4 cursor-pointer  ">
                <Link to="/CreateAccount">here</Link>
              </span>{" "}
              to Register
            </p>
          </div>
        </body>
      </div>
    </div>
  );
}
