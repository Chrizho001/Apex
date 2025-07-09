import image from "../assets/pricing.jpg";

const Pricing = () => {
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
                <button className="px-4 py-1 bg-orange-500 rounded-full text-white text-lg font-sans">
                  5000
                </button>
              </div>
              <div className="w-[80%]">
                <span className="text-sm leading-tight tracking-tight text-wrap text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  architecto non fugiat quisquam, vero,
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
                <button className="px-4 py-1 bg-gray-500 rounded-full text-white text-lg font-sans">
                  10,000
                </button>
              </div>
              <div className="w-[80%]">
                <span className="text-sm leading-tight tracking-tight text-wrap text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  architecto non fugiat quisquam, vero,
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
                <button className="px-4 py-1 bg-gray-500 rounded-full text-white text-lg font-sans">
                  15,000
                </button>
              </div>
              <div className="w-[80%]">
                <span className="text-sm leading-tight tracking-tight text-wrap text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  architecto non fugiat quisquam, vero,
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
