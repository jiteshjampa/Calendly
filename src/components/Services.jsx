import React, { useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import img from "../images/service1.png";
import img1 from "../images/service2.png";
import img2 from "../images/service3.png";
import AOS from "aos";
import "aos/dist/aos.css";
const VIDEO_PATH = "https://youtu.be/I6XDYAvrZbM?si=HXiITQK1Y9JCjs7f";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  const playerRef = useRef(null);
  return (
    <div className="overflow-x-hidden">
      <div className="bg-cover  w-full bg-gradient-to-t from-blue-950 to-blue-950">
        <div className="flex justify-center items-center  h-1/2">
          <h1
            className=" font-poppins text-3xl font-extrabold  text-center  mt-10 text-white p-20  pb-64 md:text-xl"
            data-aos="flip-right"
          >
            See what you can do with routing forms
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center  pt-48 relative   bottom-80   drop-shadow-2xl ">
        <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      </div>
      <div className="flex justify-evenly items-center md:flex-col">
        <div className="  w-3/5 flex justify-center items-center">
          <img
            src={img}
            alt=""
            className="  w-3/5 md:w-full"
            data-aos="fade-left"
          />
        </div>
        <div className="flex flex-col justify-start w-1/3 m-10 md:w-4/5 md:text-center">
          <h1
            className=" text-sky-400 text-lg font-bold mb-8"
            data-aos="fade-right"
          >
            AUTOMATED EXPERIENCE
          </h1>
          <h1
            className=" text-blue-950 text-4xl font-bold mb-6 sm:text-2xl"
            data-aos="fade-left"
          >
            Schedule efficiently and save everyone time
          </h1>
          <p className="text-slate-500 text-lg sm:text-base" data-aos="fade-up">
            The faster you connect clients, students, or customers to the right
            people and resources, the more time everyone gets back.
          </p>
        </div>
      </div>
      <div className="flex justify-evenly items-center  mt-48 md:flex-col-reverse">
        <div className="flex flex-col justify-start w-1/3 m-10 md:w-4/5 md:text-center">
          <h1
            className=" text-sky-400 text-lg font-bold mb-8"
            data-aos="fade-right"
          >
            SIMPLE AND INTUITIVE
          </h1>
          <h1
            className=" text-blue-950 text-4xl font-bold mb-6 sm:text-2xl"
            data-aos="fade-left"
          >
            Build and publish a form in minutes
          </h1>
          <p className="text-slate-500 text-lg sm:text-base" data-aos="fade-up">
            Quickly get started with a straightforward form building experience,
            which Calendly admins create and managefor teams. Share via link or
            embed on your website
          </p>
        </div>
        <div className="  w-3/5 flex justify-center items-center">
          <img
            src={img1}
            alt=""
            className="  w-3/5 md:w-full"
            data-aos="fade-left"
          />
        </div>
      </div>
      <div className="flex justify-evenly items-center  mt-48 mb-48 md:flex-col">
        <div className="  w-3/5 flex justify-center items-center">
          <img
            src={img2}
            alt=""
            className="  w-3/5 md:w-full"
            data-aos="fade-right"
          />
        </div>
        <div className="flex flex-col justify-start w-1/3 m-10 md:w-4/5 md:text-center">
          <h1
            className=" text-sky-400 text-lg font-bold mb-8"
            data-aos="fade-left"
          >
            FASTER CONNECTIONS
          </h1>
          <h1
            className=" text-blue-950 text-4xl font-bold mb-6 sm:text-2xl"
            data-aos="fade-right"
          >
            No more missed opportunities
          </h1>
          <p className="text-slate-500 text-lg sm:text-base" data-aos="fade-up">
            Embed routing forms to your website and eliminate the booking delays
            and customer drop off typically caused by manual follow up.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
