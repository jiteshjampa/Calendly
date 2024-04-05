import React, { useEffect } from "react";
import img from "../images/img1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="w-full mt-0 overflow-x-hidden mb-40 sm:mt-0">
      <div>
        <div>
          <h1
            className="text-sky-700 flex justify-center items-center mt-28 mb-10 pt-8"
            data-aos="zoom-in"
          >
            ROUTING FORMS
          </h1>
        </div>

        <div className="mb-10" data-aos="fade-left">
          <h1 className="font-extrabold flex justify-center items-center text-blue-950 text-5xl pt-10 md:text-4xl md:text-center">
            Make higher quality connection
          </h1>
        </div>
        <div
          className="flex justify-center items-center mb-8"
          data-aos="fade-up"
        >
          <p className="flex justify-center items-center text-center w-6/12 md:w-4/5 font-poppins text-lg flex-col text-slate-500">
            Request information from website visitors or invitees and-based on
            their responses-route them to the right person or resource.
            <i>Available on Professional plans and up.</i>
          </p>
        </div>
        <div
          className="flex justify-center items-center sm:flex-col sm:mb-6"
          data-aos="fade-down"
        >
          <div className="mb-8">
            <button
              className="text-center bg-blue-700 text-white px-12 py-5 rounded-full font-poppins mr-6 hover:bg-blue-950"
              data-aos="fade-right"
            >
              start for free
            </button>
          </div>
          <div className="mb-8">
            <button
              className="border-4 border-black font-poppins px-12 py-5 rounded-full font-bold hover:bg-black hover:text-white"
              data-aos="fade-left"
            >
              Talk with sales
            </button>
          </div>
        </div>
      </div>
      <div className="mt-36 flex justify-evenly items-center md:flex-col-reverse">
        <div className="flex flex-col justify-start w-full md:w-4/5 m-10 md:text-center">
          <h1
            className="text-sky-400 text-lg font-bold mb-8"
            data-aos="fade-up"
          >
            BETTER CONVERSIONS
          </h1>
          <h1
            className="text-blue-950 text-4xl font-bold mb-6"
            data-aos="fade-right"
          >
            Screen and quality website visitors or invitees
          </h1>
          <p className="text-slate-500 text-lg" data-aos="fade-left">
            Prioritize scheduling with high-value leads based on industry,
            company size and other requirements. Send people who aren't a fit to
            a referral page or other resource
          </p>
        </div>
        <div className="w-full md:w-3/5 flex justify-center items-center">
          <img src={img} alt="" className="w-4/5" data-aos="fade-left" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
