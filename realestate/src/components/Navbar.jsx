import React from 'react'
//import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobilemenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container  mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px32">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex text-gray-300 p-2 gap-9">
          <a href="#Header" className="cursor-pointer text-lg  hover:text-gray-500 ">
            Home
          </a>
          <a href="#About" className="cursor-pointer text-lg  hover:text-gray-500">
            About
          </a>
          <a href="#Projects" className="cursor-pointer text-lg  hover:text-gray-500">
            Projects
          </a>
          <a href="#Testimonials" className="cursor-pointer text-lg  hover:text-gray-500">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block  px-8 py-2 text-amber-50  bg-gray-600  rounded-full">
          Sign up
        </button>
        <img
          onClick={() => {
            setShowMobilemenu(true);
          }}
          src={assets.menu_icon}
          alt=""
          className="w-7 md:hidden cursor-pointer"
        />
      </div>
      <div
        className={` md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-center p-6 cursor-pointer">
          <img
            onClick={() => {
              setShowMobilemenu(false);
            }}
            src={assets.cross_icon}
            alt=""
            className="w-6"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => {
              setShowMobilemenu(false);
            }}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block "
          >
            Home
          </a>
          <a
            onClick={() => {
              setShowMobilemenu(false);
            }}
            href="#About"
            className="px-4 py-2 rounded-full inline-block "
          >
            About
          </a>
          <a
            onClick={() => {
              setShowMobilemenu(false);
            }}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block "
          >
            Projects
          </a>
          <a
            onClick={() => {
              setShowMobilemenu(false);
            } }
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block "
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
