import LogoImage from "../../public/LogoImage.png";
import NavLinks from "./NavLinks";
export default function Header() {
  return (
    <div className="sticky top-0 z-[20] mx-auto">
      <header className=" text-[#fff] flex gap-10 lg:gap-72 bg-[#09AB46] lg:px-4 h-20  ">
        <div className="md:pl-2 lg:pl-4 flex gap-2 lg:gap-4">
          <img
            src={LogoImage}
            alt="Mi Artisan Logo"
            className=" my-2 md:w-12 md:h-12 w-16 h-16"
          />
          <p className="font-semibold text-2xl lg:text-3xl mt-6">MI ARTISAN</p>
        </div>
        <NavLinks />
      </header>
    </div>
  );
}
