import React from "react";

const Footer = () => {
  return (
    <div className="py-20 bg-primary text-white grid sm:place-items-center border-t border-gray-100 border-opacity-20">
      <div className="px-8 xs:p-8 sm:py-0 md:py-0 max-w-5xl grid gap-5 sm:grid-cols-12">
        <div className="py-2 col-span-3 flex flex-col space-y-3 sm:space-y-0">
          <p className="inline-block tracking-widest text-xl sm:text-base sm:font-semibold font-extrabold sm:mb-6">
            LEGEND
          </p>
          <p className="inline-block font-base text-xs">
            challenge @ primetech integrated services.
          </p>
          <p className="inline-block font-base text-xs">+1 000 000-0000</p>
        </div>
        <div className="px-2 sm:flex flex-col col-start-5 col-span-full row-start-1 hidden">
          <div className="w-full space-y-5 sm:space-y-0 block sm:flex mb-4 pb-5 items-center border-b border-gray-100 border-opacity-20">
            <ul className="flex ">
              <li className="mr-3 text-sm border-gray-400">Home</li>
              <li className="mr-3 text-sm border-gray-400">PortFolio</li>
              <li className="mr-3 text-sm border-gray-400">About</li>
              <li className="mr-3 text-sm border-gray-400">Serices</li>
              <li className="mr-3 text-sm border-gray-400">Contact</li>
            </ul>
            <button className="ml-auto btn btn-secondary text-white">
              Hire Us
            </button>
          </div>
          <p>We create amazing Web Design templates for creative people</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
