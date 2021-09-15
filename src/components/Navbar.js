import React from "react";
import Brightness3OutlinedIcon from "@material-ui/icons/Brightness3Outlined";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import useDarkMode from "../hook/useDarkMode";

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="fixed top-0 w-full bg-primary p-4 transition duration-900 border-b border-gray-200 border-opacity-20 z-50 flex items-center">
      <p className="tracking-widest text-lg font-bold uppercase pl-3 text-gray-100">
        Legend
      </p>
      <span
        onClick={() => setTheme(colorTheme)}
        className="w-10 h-10 bg-indigo-500 rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center ml-auto"
      >
        {colorTheme === "light" ? (
          <Brightness3OutlinedIcon />
        ) : (
          <WbSunnyOutlinedIcon />
        )}
      </span>
    </div>
  );
};

export default Navbar;
