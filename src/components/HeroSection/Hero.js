import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-4 w-full xl:min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center px-8 lg:px-12 pt-24 sm:py-6 md:py-24 xl:py-12 mx-auto max-w-full xl:mr-0 items-start">
        <div className="flex flex-col sm:w-1/2 xl:w-1/4 w-full dark:text-white space-y-5">
          <p className="dark:text-gray-400 text-black font-medium text-xs">
            LEGENDARY DESIGNS
          </p>
          <p className="dark:text-gray-50 text-black font-semibold text-3xl">
            We create mind-blowing{" "}
            <span className="text-yellow-600">Architectural design</span> for
            creative people
          </p>
          <div className="block">
            <div className="flex items-center cta py-2 transition-all ease-linear">
              <span className="span w-10 h-10 text-yellow-600 font-xs border border-gray-400 border-opacity-20 flex items-center justify-center transition-all ease-linear shadow-md cursor-pointer">
                <AddOutlinedIcon />
              </span>
              <p className="text-sm dark:text-gray-200 ml-3 tracking-wider transition-all cursor-pointer">
                Our Services
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-8 sm:mt-0">
          <div className="h-64 sm:h-screen md:h-auto xl:h-screen grid grid-cols-3 sm:grid-cols-1 xl:grid-cols-3 sm:items-center sm:justify-center sm:gap-5 lg:p-10 p-0">
            <div className="card h-3/4 md:h-full xl:h-3/4 shadow-md">
              <img
                src="./images/sofa-3.jpeg"
                alt="sofa"
                className="h-full object-cover object-center"
              />
            </div>
            <div className="card h-3/4 shadow-md sm:hidden xl:block">
              <img
                src="./images/sofa-2.jpeg"
                alt="sofa"
                className="h-full object-cover object-center"
              />
            </div>
            <div className="card h-3/4 shadow-md sm:hidden xl:block">
              <img
                src="./images/sofa-1.jpeg"
                alt="sofa"
                className="h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
