import image from "../assets/pricing.jpg";
import { useState } from "react";
import { Spinner } from "flowbite-react";
import { toast } from "react-toastify";
import api from "../axios/api";
import { useMembership } from "../utilities/MembershipContext";

const Pricing = () => {
  const { setMembershipType } = useMembership();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState({
    button1: false,
    button2: false,
    button3: false,
  });

  const resetLoading = () =>
    setLoading({ button1: false, button2: false, button3: false });

  const handleClick = async (membership_type = "basic") => {
    if (membership_type == "basic") {
      setLoading({ ...loading, button1: true });
    }
    if (membership_type == "premium") {
      setLoading({ ...loading, button2: true });
    }
    if (membership_type == "vip") {
      setLoading({ ...loading, button3: true });
    }

    try {
      const response = await api.post("api/join/", { membership_type });
      console.log(response);
      const msg = response.data.detail;

      const newType = response.data.membership.membership_type;

      // Save to both context and localStorage
      localStorage.setItem("membership_type", newType);
      setMembershipType(newType);

      toast.success(msg);
      resetLoading();
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
      toast.error(error.response?.data?.detail || "Something went wrong");

      resetLoading();
    }
  };

  return (
    <section className="container mx-auto flex flex-col gap-3 py-2 px-2 justify-center items-center mt-6 md:px-12">
      <div className="w-full sm:w-[70%] md:w-[45%] lg:w-[40%] py-6">
        <h1 className="text-2xl font-bold text-black text-center lg:text-2xl ">
          Choose The Plan That Aligns With Your Fitness Goals And Preferences
        </h1>
      </div>
      {/* Plans Div */}
      <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0  w-full  py-6 items-center justify-between">
        {/* plans */}
        <div className="flex flex-col gap-y-5 w-full md:w-[50%]">
          {/* Basic */}
          <div className="w-full flex gap-x-3 items-center justify-between bg-gray-200 py-2 px-2 rounded-md md:w-full ">
            <div className="w-full">
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="text-xl py-2 text-black font-bold flex justify-between items-center md:text-2xl lg:text-3xl">
                  Basic Membership
                </h1>
                {!loading.button1 ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("basic");
                    }}
                    className="px-4 py-1 bg-orange-500 rounded-full text-white text-lg font-sans"
                  >
                    5000
                  </button>
                ) : (
                  <div className="flex w-fit items-center justify-center ">
                    <Spinner
                      color="success"
                      aria-label="Success spinner example"
                      size="lg"
                    />
                  </div>
                )}
              </div>
              <div className="w-[80%]">
                <span className="text-sm leading-tight tracking-tight text-wrap text-black">
                  Get access to our fully equipped gym floor, essential workout
                  equipment, and a supportive fitness community. Perfect for
                  beginners or those looking to stay active on a budget.
                </span>
              </div>
            </div>
          </div>

          {/* Premium */}
          <div className="w-full flex gap-x-3 items-center justify-between bg-gray-200 py-2 px-2 rounded-md md:w-full ">
            <div className="w-full">
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="text-xl py-2 text-black font-bold flex justify-between items-center md:text-2xl lg:text-3xl">
                  Premium Membership
                </h1>
                {!loading.button2 ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("premium");
                    }}
                    className="px-4 py-1 bg-gray-500 rounded-full text-white text-lg font-sans"
                  >
                    10000
                  </button>
                ) : (
                  <div className="flex w-fit items-center justify-center ">
                    <Spinner
                      color="success"
                      aria-label="Success spinner example"
                      size="lg"
                    />
                  </div>
                )}
              </div>
              <div className="w-[80%]">
                <span className="text-sm leading-tight tracking-tight text-wrap text-black">
                  Unlock everything in the Basic plan, plus access to
                  instructor-led group classes like yoga, HIIT, and aerobics.
                  Stay consistent with guided motivation and more diverse
                  workout options.
                </span>
              </div>
            </div>
          </div>

          {/* VIP */}
          <div className="w-full flex gap-x-3 items-center justify-between bg-gray-200 py-2 px-2 rounded-md md:w-full ">
            <div className="w-full">
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className="text-xl py-2 text-black font-bold flex justify-between items-center md:text-2xl lg:text-3xl">
                  VIP Membership
                </h1>
                {!loading.button3 ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("vip");
                    }}
                    className="px-4 py-1 bg-gray-500 rounded-full text-white text-lg font-sans"
                  >
                    15000
                  </button>
                ) : (
                  <div className="flex w-fit items-center justify-center ">
                    <Spinner
                      color="success"
                      aria-label="Success spinner example"
                      size="lg"
                    />
                  </div>
                )}
              </div>
              <div className="w-[80%]">
                <span className="text-sm leading-tight tracking-tight text-wrap text-black">
                  Enjoy full access to all facilities, unlimited group classes,
                  personal training sessions, wellness consultations, and
                  exclusive perks. The VIP plan is built for serious
                  transformation.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* plans pic */}
        <div className="w-full md:w-[40%] h-[450px] lg:h-[450px]">
          <img
            src={image}
            className="object-cover w-full h-full rounded-sm"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
