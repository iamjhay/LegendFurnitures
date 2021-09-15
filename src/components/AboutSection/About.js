import React from "react";

const About = () => {
  return (
    <div className="grid place-items-center py-5 sm:py-10">
      <p className="dark:text-gray-400 text-black font-semibold text-sm mb-5 xs:hidden">
        Our Works & Services
      </p>
      <div className="px-8 xs:p-8 md:py-0 max-w-7xl grid gap-5 xs:gap-4 xs:grid-cols-2 md:grid-cols-4">
        <h1 className="text-4xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3">
          <span className="md:col-span-2 md:self-center dark:text-white dark:bg-transparent xs:dark:bg-black bg-yellow-200">
            Lengendary Designs
          </span>
        </h1>
        <p className="dark:text-white xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ad
          architecto sit inventore velit temporibus iusto excepturi beatae?
          Totam, non?
        </p>
        <div className="img__card">
          <img
            src="./images/sofa-5.jfif"
            alt="sofa"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="img__card">
          <img
            src="./images/house-4.jpg"
            alt="house"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="img__card">
          <img
            src="./images/work-3.jpeg"
            alt="sofa"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="img__card md:col-start-2">
          <img
            src="./images/work-4.jpeg"
            alt="sofa"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="img__card">
          <img
            src="./images/sofa-3.jpeg"
            alt="sofa"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="img__card">
          <img
            src="./images/img-1.jpeg"
            alt="sofa"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="img__card">
          <img
            src="./images/work-5.jpg"
            alt="sofa"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="h-16 xs:h-64 bg-gray-600 xs:w-full w-max self-center justify-self-center xs:bg-primary ">
          <img
            src="./images/white-logo.png"
            alt="sofa"
            className="object-contain object-center w-full h-full"
          />
        </div>
        <p className="self-center md:text-lg md:col-span-2 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ad
          architecto sit inventore velit temporibus iusto excepturi beatae?
          Totam, non?
        </p>
      </div>
    </div>
  );
};

export default About;
