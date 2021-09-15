import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="py-40">
      <div className="flex flex-col items-center justify-center ">
        <div className="max-w-3xl ">
          <p className="dark:text-gray-400 text-black font-medium text-xs tracking-widest text-center">
            LET'S CREATE SOMETHING GREAT!
          </p>
          <p className="sm:px-10 lg:p-0 dark:text-gray-50 text-black font-normal md:font-medium sm:text-base lg:text-2xl mt-5 mb-10 text-center">
            <span className="text-yellow-500">Have a project in mind?</span>{" "}
            Tell us more about it by filling that simple form and we will
            contact you shortly
          </p>
          <div className="my-2 bg-yellow-500 w-24 h-px mx-auto"></div>

          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
