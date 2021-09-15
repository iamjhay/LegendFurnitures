import React from "react";

const Info = () => {
  return (
    <div className="grid lg:place-items-center xl:min-h-screen py-10 md:py-20 lg:my-10 xl:py-0">
      <div className="px-8 xs:p-8 sm:py-0 md:py-0 max-w-7xl grid gap-0 gap-y-5 xs:gap-4 md:gap-x-10 xl:gap-x-28 md:grid-cols-2 items-center">
        <div className="relative feature flex w-full col-span-1 items-center self-center justify-self-center">
          <div className="relative left-0 right-auto z-10  w-[70%] mt-5 mr-auto ml-0 transition hover:z-30 feat-1a">
            <img
              src="./images/feat-1a.jpeg"
              alt="feat"
              className="h-full w-full object-center object-cover  hover:outline-primary transform scale-105 translate-y-2 hover:shadow-2xl feat-1a hover:p-2 transition ease-out duration-1000"
            />
          </div>
          <div className="absolute right-0 z-20 w-[56%] mt-32 mr-0 ml-auto shadow-md feat-1 outline-primary p-2 ">
            <img
              src="./images/feat-1.jpeg"
              alt="feat"
              className="h-full w-full object-center object-cover"
            />
          </div>
        </div>
        <div className="sm:px-2 space-y-3 self-end">
          <p className="dark:text-gray-400 text-black font-light text-xs">
            STYLISH & FLEXIBLE
          </p>
          <p className="dark:text-gray-50 text-black font-semibold text-3xl">
            A Perfect Art & Design Studio
          </p>
          <div className="my-2 bg-yellow-600 w-24 h-px"></div>
          <p className="text-sm dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            ducimus vel possimus omnis suscipit quisquam fuga eum, eveniet quo
            tempora distinctio, magnam, tempore atque porro.
          </p>
          <div className="btn-group">
            <button className="btn btn-secondary relative">
              request Quote
              <span class="flex h-3 w-3 absolute top-[-5px] right-[-6px]">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
