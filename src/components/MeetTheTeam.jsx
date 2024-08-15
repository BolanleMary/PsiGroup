import Mercy from "../assets/Mercy.png";
import Ade from "../assets/Ade.png";
import Naheem from "../assets/Naheem.png";
import Bolu from "../assets/Bolu.png";
import BOLA from "../assets/Bola.png";
export default function Home() {
  return (
    <div className="developers">
      <div className="flex gap-8 px-2 lg:gap-12 lg:px-20 ">
        <div className=" flex flex-col md:flex md:flex-row lg:flex lg:flex-row  border border-solid border-[#09AB46] h-80 md:h-64 lg:h-60 w-1/2 p-3 g lg:w-1/2  lg:p-8 gap-6 rounded-xl">
          <div>
            <img src={Mercy} alt="Mercy" />
          </div>
          <div>
            <h1 className="text-[#09AB46] text-xl font-bold">
              JOHN MERCY EJIRO
            </h1>
            <h3 className="text-[#09AB46] text-lg font-semibold mt-2">
              UI/UX DESIGNER
            </h3>
            <p className="opacity-0 md:opacity-100 lg:opacity-100">
              Building MI ARTISAN has been a pleasure. It’s designed to
              strengthen the relationship between local artisans and their
              customers
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:flex md:flex-row lg:flex lg:flex-row border border-solid border-[#09AB46] h-80 md:h-56 lg:h-52 w-1/2 p-3 lg:w-1/2  lg:p-8 gap-6 rounded-xl">
          <div>
            <img src={Ade} alt="Ade" border="0" />
          </div>
          <div>
            <h1 className="text-[#09AB46] text-xl font-bold">ADEYEMI Adelad</h1>
            <h3 className="text-[#09AB46] text-lg font-semibold mt-2">
              UI/UX DESIGNER
            </h3>
            <p className="opacity-0 md:opacity-100 lg:opacity-100">
              Creating MI ARTISAN has been a rewarding experience. It will truly
              connect local artisans with their customers seamlessly
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className=" flex flex-col md:flex-row lg:flex-row  border-x border-y  my-auto w-1/2 border border-solid border-[#09AB46] h-80 md:h-72 lg:h-60 p-8 gap-6  rounded-xl">
          <div>
            <img src={Naheem} alt="Naheem" border="0" />
          </div>
          <div>
            <h1 className="text-[#09AB46] text-xl font-bold">NAHEEM BANKOLE</h1>
            <h3 className="text-[#09AB46] text-lg font-semibold mt-2">
              BACKEND DESIGNER
            </h3>
            <p className="opacity-0 md:opacity-100 lg:opacity-100">
              This project, MI ARTISAN, has been amazing to work on. It will
              enhance connections between customers and local artisans
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-8 px-2 lg:gap-12 lg:px-20">
        <div className=" flex flex-col md:flex md:flex-row lg:flex lg:flex-row  border border-solid border-[#09AB46] h-80 md:h-96 lg:h-60 w-1/2 p-3 g lg:w-1/2 lg:p-8 gap-6 rounded-xl">
          <div>
            <img src={Bolu} alt="Bolu" border="0" />
          </div>
          <div>
            <h1 className="text-[#09AB46] text-xl font-bold">
              OGUNREMI INIOLUWA
            </h1>
            <h3 className="text-[#09AB46] text-lg font-semibold mt-2">
              FRONTEND DEVELOPER
            </h3>
            <p className="opacity-0 md:opacity-100 lg:opacity-100">
              Developing MI ARTISAN was fantastic. <br /> This platform will
              effectively link <br /> customers with skilled artisans in their
              <br /> communities.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:flex md:flex-row lg:flex lg:flex-row  border border-solid border-[#09AB46] h-80 md:h-96 lg:h-60 w-1/2 p-3 g lg:w-1/2 lg:p-8 gap-6 rounded-xl">
          <div>
            <img src={BOLA} alt="Bola" border="0" />
          </div>
          <div>
            <h1 className="text-[#09AB46] text-xl font-bold">
              OLOWOOKERE BOLANLE
            </h1>
            <h3 className="text-[#09AB46] text-lg font-semibold mt-2">
              FRONTEND DEVELOPER
            </h3>
            <p className="opacity-0 md:opacity-100 lg:opacity-100">
              Working on this project has been super awesome. I believe this
              masterpiece, MI ARTISAN will build the bridge between customers
              and Artisan in their locality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
