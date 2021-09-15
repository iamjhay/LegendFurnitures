import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import React from "react";

const Form = () => {
  return (
    <form className="w-full mt-10">
      <div className="form-items">
        <label htmlFor="Name" className="labelfield">
          My name is
        </label>
        <input placeholder="name" type="name" class="textfield" />
      </div>
      <div className="form-items">
        <label htmlFor="Email" className="labelfield">
          My email address is
        </label>
        <input placeholder="email" type="email" class="textfield" />
      </div>
      <div className="form-items">
        <label htmlFor="text" className="labelfield">
          I need help with
        </label>
        <input
          placeholder="interior, landscape, etc"
          type="text"
          class="textfield"
        />
      </div>
      <div className="form-items">
        <label htmlFor="number" className="labelfield">
          My budget is
        </label>
        <input placeholder="$" type="number" class="textfield" />
      </div>
      <div className="form-items">
        <label htmlFor="text" className="labelfield">
          I need the project ready within
        </label>
        <input placeholder="Date & month" type="name" class="textfield" />
      </div>
      <div className="form-items">
        <label
          htmlFor="Name"
          className="self-start text-left sm:text-right pr-4 w-[550px] dark:text-white dark:text-sm text-base font-normal dark:font-semibold pt-2"
        >
          Here is more info
        </label>
        <textarea
          name="text"
          className="w-full textfield outline-none"
          cols="30"
          rows="10"
          placeholder="about my project"
        ></textarea>
        {/* <input placeholder="text" type="name" class="textfield" /> */}
      </div>
      <div className="flex items-center justify-center dark:text-white">
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox classname="bg-white" size="small" />}
            label="Subscribe to our Newsletter"
          />
        </FormGroup>
      </div>
      <div className="flex items-center justify-center dark:text-white">
        <button class="mt-5 btn btn-primary">Submit message</button>
      </div>
    </form>
  );
};

export default Form;
