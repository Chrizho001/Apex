import { FaDumbbell } from "react-icons/fa6";
import aboutImage from "../assets/about2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <section className="container mx-auto mt-6 py-4 px-2 flex flex-col lg:flex-row-reverse justify-between items-center gap-y-12 lg:gap-y-0 lg:gap-x-6 md:px-12">
      {/* About text */}
      <div className="flex flex-col gap-y-4 lg:w-[40%] py-3 ">
        <h1 className="text-3xl font-semibold text-black tracking-tight">
          We Believe That Fitness Is Not Just A Destination But A Journey
        </h1>
        <p className="text-sm text-black font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor
          quasi natus nulla deleniti magni doloribus, libero eum impedit,
        </p>
        <div className="flex flex-col w-full gap-y-3">
          <div className="flex justify-start items-center gap-x-6">
            <span>
              <FaDumbbell className="text-2xl text-orange-400" />
            </span>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-black">
                Expert Guidance
              </h3>
              <span className="text-sm font-normal text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                sapiente aliquam magnam fuga? Dolores
              </span>
            </div>
          </div>

          <div className="flex justify-start items-center gap-x-6">
            <span>
              <FaDumbbell className="text-2xl text-orange-400" />
            </span>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-black">
                Cutting Edge Facillities
              </h3>
              <span className="text-sm font-normal text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                sapiente aliquam magnam fuga? Dolores
              </span>
            </div>
          </div>

          <div className="flex justify-start items-center gap-x-6">
            <span>
              <FaDumbbell className="text-2xl text-orange-400" />
            </span>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-black">
                Flexible Membership Options
              </h3>
              <span className="text-sm font-normal text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                sapiente aliquam magnam fuga? Dolores
              </span>
            </div>
          </div>

          <button className="text-sm font-semibold text-white px-3 py-2 flex gap-2 rounded-full bg-orange-500 w-fit items-center cursor-pointer">
            <span>Become A Member</span>
            <span className="bg-white p-2 rounded-full">
              <FaArrowRightLong className="text-black text-lg" />
            </span>
          </button>
        </div>
      </div>
      {/* About Image */}
      <div className="w-full lg:w-[50%]">
        <div
          className="bg-center bg-cover h-[400px] lg:h-[450px] rounded-md"
          style={{
            backgroundImage: `url(${aboutImage})`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default About;
