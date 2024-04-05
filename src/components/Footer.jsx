import React from "react";
import apple from "../images/apple.png";
import google from "../images/google-play.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook-app-symbol.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex mb-10 md:flex-col-reverse">
        <div className="flex flex-col justify-between items-start h-auto  pl-10  mt-32 w-1/3 md:w-full ">
          <span className="text-blue-950 text-4xl font-extrabold  mb-3 md:text-center md:flex md:justify-center md:items-center md:ml-28">
            Easy
          </span>
          <span className="text-sky-600 text-4xl font-extrabold mb-9 md:text-center md:ml-24 ">
            ahead
          </span>
          <p className="text-blue-950  w-3/5 font-poppins mb-12 md:text-center md:w-4/5">
            We take the work out of connecting with others so you can accomplish
            more
          </p>
          <select
            name="Languages"
            className=" outline-none w-3/5  px-2 py-3 border-2  border-slate-200 rounded-lg mb-10 md:w-5/6"
          >
            <option value="English" className="px-2 py-3">
              English
            </option>
            <option value="Hindi">Hindi</option>
            <option value="Telugu">Telugu</option>
          </select>
          <div className="flex mb-20 md:flex-col  ">
            <div className="flex justify-center items-center w-1/2 text-white bg-black  rounded-md  mr-3 md:mb-7">
              <img
                src={apple}
                alt="apple store"
                className=" w-1/6 bg-white mr-4 "
              />
              <div>
                <p className="  text-xs pr-2">Download on the</p>
                <h1 className="text-lg font-semibold pr-2">App Store</h1>
              </div>
            </div>
            <div className="flex justify-center items-center w-1/2 text-white bg-black  rounded-md">
              <img src={google} alt="google store" className=" w-1/6  mr-2" />
              <div>
                <p className="  text-xs pr-2 text-center">Get it on</p>
                <h1 className="text-lg font-semibold pr-2">Google Play</h1>
              </div>
            </div>
          </div>
          <div className="flex   sm:justify-center sm:items-center sm:flex-col ">
            <a
              href="https://twitter.com/calendly"
              className="mr-14  w-8 sm:mb-8 "
            >
              <img src={twitter} alt="twitter" className=" w-full" />
            </a>

            <a
              href="https://www.facebook.com/calendly"
              className=" w-8 mr-14 sm:mb-8 "
            >
              <img src={facebook} alt="facebook" className=" w-full" />
            </a>
            <a
              href="https://www.instagram.com/calendly/"
              className=" mr-14 w-8 sm:mb-8 "
            >
              <img src={instagram} alt="instagram" className=" w-full" />
            </a>
            <a
              href="https://www.linkedin.com/company/calendly/life/lifeatcalendly/"
              className=" mr-14 w-8 sm:mb-8 "
            >
              <img src={linkedin} alt="linkedin" className=" w-full" />
            </a>
            <a
              href="https://www.youtube.com/c/Calendly"
              className=" mr-14 w-8 sm:mb-8 "
            >
              <img src={youtube} alt="youtube" className=" w-full" />
            </a>
          </div>
        </div>
        <div className="w-2/3 flex-col justify-between items-start md:w-full">
          <div className="flex justify-evenly items-start mt-32 mb-6  md:flex-col md:items-center ">
            <div className=" mr-9 md:mb-24">
              <ul className="text-blue-950 font-poppins leading-10 md:text-center">
                <li>
                  <h1 className="text-blue-950 text-2xl font-extrabold md:text-center">
                    About
                  </h1>
                </li>
                <li>About Calendly</li>
                <li>Contact Sales</li>
                <li>Newsroom</li>
                <li>Careers</li>
                <li>Security</li>
              </ul>
            </div>
            <div className=" mr-9 md:mb-24">
              <ul className="text-blue-950 font-poppins leading-10 md:text-center">
                <li>
                  <h1 className="text-blue-950 text-2xl font-extrabold md:text-center">
                    Solutions
                  </h1>
                </li>
                <li>Customer Success</li>
                <li>Sales</li>
                <li>Recruiting</li>
                <li>Information Technology</li>
                <li>Marketing</li>
              </ul>
            </div>
            <div className=" mr-9 md:mb-24">
              <ul className="text-blue-950 font-poppins leading-10 md:text-center">
                <li>
                  <h1 className="text-blue-950 text-2xl font-extrabold md:text-center">
                    Popular Features
                  </h1>
                </li>
                <li>Embed Calendly</li>
                <li>Availability</li>
                <li>Sending Notifications</li>
                <li>Using Calendly Mobile</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-evenly items-start md:ml-10 md:flex-col md:items-center mr-20 md:mr-0">
            <div className=" mr-9 md:mb-24">
              <ul className="text-blue-950 font-poppins leading-10 md:text-center">
                <li>
                  <h1 className="text-blue-950 text-2xl font-extrabold md:text-center">
                    Support
                  </h1>
                </li>
                <li>Help Center</li>
                <li>Video Tutorials</li>
                <li>Cookie Settings</li>
              </ul>
            </div>
            <div className=" mr-9 md:mb-24">
              <ul className="text-blue-950 font-poppins leading-10 md:text-center">
                <li>
                  <h1 className="text-blue-950 text-2xl font-extrabold md:text-center">
                    Add-Ons
                  </h1>
                </li>
                <li>Download for Chrome</li>
                <li>Download for Firefox</li>
              </ul>
            </div>
            <div className=" mr-9 md:mb-24">
              <ul className="text-blue-950 font-poppins leading-10 md:text-center">
                <li>
                  <h1 className="text-blue-950 text-2xl font-extrabold md:text-center">
                    Developers
                  </h1>
                </li>
                <li>Developer Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pb-7">
        <div className="flex justify-start">
          <h1 className=" text-slate-400 ml-6 text-sm">
            Copyright Calendly 2022
          </h1>
        </div>
        <div className="flex justify-end">
          <h1 className="text-slate-400 mr-6  text-sm">
            Privacy / Terms and Conditions
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
