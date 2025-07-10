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
          Your fitness goals don’t end at a finish line — they evolve. At Apex,
          we walk with you every step of the way, helping you build a stronger,
          healthier version of yourself.
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
              <span className="text-sm font-normal text-black text-wrap">
                Our certified trainers aren’t just here to count reps — they’re
                here to coach, motivate, and customize your fitness plan to
                match your lifestyle and goals. From beginners to seasoned
                athletes, we’ve got your back.
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
                Train with top-of-the-line equipment in a modern, spacious
                environment designed to energize and inspire. From weights to
                cardio, yoga to functional training — we’ve got it all under one
                roof.
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
                Life can be unpredictable, so your membership shouldn’t be a
                burden. Choose a plan that fits your schedule and goals —
                whether it’s daily, monthly, or long-term. No pressure, just
                progress.
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
