import { FaArrowRightLong } from "react-icons/fa6";
import hero from "../assets/hero.png";
import Navbar from "../utilities/Navbar";

const Hero = () => {
  return (
    <section className="container mx-auto relative px-2 mb-16 flex flex-col md:px-12 ">
      <Navbar />

      <div className="bg-gray-200 py-2 mt-16 rounded-md flex flex-col sm:flex-row md:flex-row h-[100vh] items-start sm:items-center sm:justify-center md:items-center justify-start md:justify-center">
        <div className=" h-[40%] w-[90%] sm:w-[45%] sm:h-full md:w-[40%] md:h-full flex flex-col gap-y-6 items-start sm:justify-center justify-start lg:gap-y-10">
          <h1 className="text-3xl font-bold text-black leading-tight md:text-4xl lg:text-5xl ">
            Shape Your Body, Shape Your Destiny
          </h1>
          <p className="text-sm font-normal text-black leading-tight  ">
            Be more than just a member — become part of a community that moves,
            grows, and conquers together. Whether you’re chasing peak
            performance or just getting started, Apex is where your journey
            truly begins.
          </p>
          <button className="text-sm font-semibold text-white px-3 py-2 flex gap-2 rounded-full bg-orange-500 w-fit items-center cursor-pointer">
            <span>Become A Member</span>
            <span className="bg-white p-2 rounded-full">
              <FaArrowRightLong className="text-black text-lg" />
            </span>
          </button>
        </div>
        {/* image */}
        <div className=" h-[60%] md:flex sm:w-fit sm:h-full w-fit md:h-full md:w-fit overflow-hidden">
          <img src={hero} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
