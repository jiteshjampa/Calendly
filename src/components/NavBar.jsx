import React, { useState, useEffect } from "react";
import navbar from "../images/navbar.png";
const NavBar = () => {
  const [displays, UpdateDisplay] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 988) {
        UpdateDisplay(true); // For larger screens, always display the menu
      } else {
        UpdateDisplay(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nav = () => {
    const l1 = document.querySelector("ul");
    if (displays) {
      l1.style.display = "flex";
      UpdateDisplay(false);
    } else {
      l1.style.display = "none";
      UpdateDisplay(true);
    }
  };

  return (
    <div className="fixed  top-0  w-full h-auto bg-white  z-50">
      <div id="nav" className="  bg-white h-8 md:block  hidden">
        <button onClick={nav} className=" absolute top-1 right-1">
          <img src={navbar} alt="navbar" className=" w-10 pb-10" />
        </button>
        <div className="md:absolute md:top-1 md:left-1 hidden">
          <span className="text-sky-600 text-2xl flex font-poppins">
            <div className="rounded-full w-5 h-5 bg-sky-600 flex items-center justify-center">
              <span className="text-white drop-shadow-4xl">C</span>
            </div>
            Calendly
          </span>
        </div>
      </div>

      <ul
        className="flex justify-evenly items-center pt-8 pb-8 md:flex-col md:justify-start md:leading-10 md:hidden -z-50"
        style={{ display: displays ? "flex" : "none" }}
      >
        <li className="md:absolute md:top-1 md:left-1">
          <span className="text-sky-600 text-2xl flex font-poppins">
            <div className="rounded-full w-5 h-5 bg-sky-600 flex items-center justify-center">
              <span className="text-white drop-shadow-4xl">C</span>
            </div>
            Calendly
          </span>
        </li>

        <li className="ml-6 font-poppins font-extrabold  ">
          <a href="">Individuals</a>
        </li>
        <li className="ml-6 font-poppins font-extrabold">
          <a href="">Teams</a>
        </li>
        <li className="ml-6 font-poppins font-extrabold">
          <a href="">Enterprise</a>
        </li>
        <li className="ml-6 font-poppins font-extrabold">
          <select name="" id="products" className="text-center outline-none">
            <option value="Products">Products</option>
            <option value="Items">Facebook</option>
          </select>
        </li>
        <li className="ml-6 font-poppins font-extrabold">
          <a href="">Pricing</a>
        </li>
        <li className="ml-6 font-poppins font-extrabold">
          <select name="" id="resources" className="outline-none">
            <option value="Resources">Resources</option>
            <option value="Items">Facebook</option>
          </select>
        </li>

        <div className="flex items-center md:flex-col md:leading-10 md:ml-6">
          <li className="font-poppins font-extrabold">
            <button className="mr-3">Log In</button>
          </li>
          <li className="font-poppins font-extrabold">
            <button className="px-5 py-3 bg-blue-600 border-none rounded-3xl text-white">
              Get started
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
