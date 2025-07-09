import React from "react";

const NewsLetter = () => {
  return (
    <section className="container mx-auto bg-gray-200 py-4 px-2 flex flex-col md:flex-row items-center justify-between rounded-md mt-12 md:px-12">
      <div className="w-full md:w-[300px]">
        <h1 className="text-3xl font-bold text-black">
          Subscribe To Our NewsLetter
        </h1>
      </div>
      {/* newsletter form */}
      <div className="w-full flex flex-col gap-y-3  md:w-[40%]">
        <h1 className="text-sm font-normal text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          blanditiis itaque,
        </h1>
        <div className="flex items-center bg-gray-300 rounded-full px-3 py-3">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 w-full "
            id=""
          />
          <button className="bg-orange-500 px-2 py-2 text-white text-sm rounded-full font-bold">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
