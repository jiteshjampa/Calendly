import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import img from "../images/carousel1.jpg";
import img1 from "../images/carousel2.jpg";
import img2 from "../images/carousel3.png";
import left from "../images/arrow-left.png";
import right from "../images/arrow-right.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Carousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 2000, once: true, mirror: false, delay: 600 });
  }, []);
  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden bg-indigo-100">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {data.map((d, i) => (
          <div key={i} className="w-full flex-row flex-shrink-0 bg-indigo-100 ">
            <div className="relative flex justify-center items-center p-5 md:flex-col md:mb-5">
              <img
                src={(() => {
                  switch (i) {
                    case 1:
                      return img1;
                    case 2:
                      return img2;
                    default:
                      return img;
                  }
                })()}
                alt="Slide"
                className="  w-96 h-auto rounded-lg  mr-32 md:w-3/5 md:flex md:ml-28"
                data-aos="fade-right"
              />
              <div className="flex flex-col justify-start   bg-opacity-50  text-white w-2/4 p-5 md:w-5/6 sm:w-full">
                <p
                  className="text-2xl  font-bold text-blue-950  mb-10 md:text-center  sm:text-sm"
                  data-aos="fade-up"
                >
                  "{d.description}"
                </p>
                <h1
                  className="text-xl font-bold mb-2  text-blue-900 md:text-center"
                  data-aos="fade-right"
                >
                  {d.name}
                </h1>
                <h2
                  className="text-lg font-semibold text-gray-400 md:text-center"
                  data-aos="fade-left"
                >
                  {d.role}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center p-10">
        <button
          className="px-4 py-2 bg-indigo-100 text-white rounded-lg "
          onClick={prevSlide}
        >
          <img src={left} alt="" className=" w-11" />
        </button>
        <button
          className="px-4 py-2 bg-indigo-100  text-white rounded-lg"
          onClick={nextSlide}
        >
          <img src={right} alt="" className="w-11" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
