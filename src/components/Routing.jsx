import React from "react";

const Routing = () => {
  return (
    <div className="bg-blue-950 flex justify-center items-center flex-col  w-full">
      <h1 className=" text-3xl text-white text-center font-bold  font-poppins  pt-20 mb-5 md:text-2xl">
        Win more business with less work
      </h1>
      <p className="flex w-1/2 justify-center items-center text-white text-center mb-6 font-poppins md:text-sm md:w-full">
        Routing forms help you screen and qualify the website visitors ,
        automate scheduling, and offer a seamless customer experience
      </p>
      <div className="m-5 sm:flex sm:justify-center sm:items-center sm:flex-col">
        <button className=" px-12 py-5 bg-sky-600 rounded-full mr-5 mb-14 text-white font-semibold hover:bg-sky-400">
          Start for free
        </button>
        <button className="px-12 py-5  border-2 border-white  font-semibold rounded-full text-white hover:text-black hover:bg-white hover:font-semibold">
          Talk to Sales
        </button>
      </div>
    </div>
  );
};

export default Routing;
