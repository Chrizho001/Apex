import logo from "../assets/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 container mx-auto  z-20 flex items-center py-2 px-2 justify-between bg-gray-100 md:px-12">
      {/* logo */}
      <div className="flex flex-row  items-center justify-center w-fit">
        <img src={logo} alt="logo" className="object-cover w-[50px]" />
        <h1 className="text-2xl font-bold text-black tracking-tight font-raleway">
          APEX
        </h1>
      </div>
      {/* hamburger menu */}
      <div className="">
        <button>
          <HiMenuAlt3 className="text-black text-3xl"/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
