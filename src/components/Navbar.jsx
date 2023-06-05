import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../assets/novi.png";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const openWhatsApp = () => {
    // Open WhatsApp app on phones
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.location.href = "whatsapp://send?text=Hello";
    } else {
      // Open WhatsApp Web on larger screens
      window.open("https://web.whatsapp.com/send?text=Hello", "_blank");
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  return (
    <div
      className={
        scrolled
          ? "h-[70px] z-50 shadowdown sticky top-0 bg-white"
          : "h-[70px] sticky top-0 z-50 bg-white"
      }
    >
      <div className=" flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 pt-2">
        <div className="h-14 w-14 shadowlogo rounded-full overflow-hidden">
          <img className="object-cover rounded-full" src={Logo} alt="/" />
        </div>
        <ul className="hidden md:flex">
          <li className="p-4 cursor-pointer hover:text-gray-400">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-gray-400">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-gray-400">
            <Link to="/">Titles</Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-gray-400">
            <Link to="/">Shop</Link>
          </li>
          <li className="p-4 cursor-pointer hover:text-gray-400">Contact</li>
        </ul>
        <div className="flex items-center h-14 max-w-xs">
          <div className="mr-2 cursor-pointer hover:bg-gradient-to-r from-[#833AB4] to-orange-500 bg-white rounded-full">
            <AiOutlineInstagram
              size={38}
              className={!nav ? "hidden" : "hover:text-white p-1.5"}
            />
          </div>
          <div className="mr-2 cursor-pointer bg-white rounded-full hover:bg-[#5285F2]">
            <FaFacebookF
              size={38}
              className={!nav ? "hidden" : "hover:text-white p-2"}
            />
          </div>
          <div
            className="mr-2 cursor-pointer bg-white rounded-full hover:bg-[#25D366]"
            onClick={openWhatsApp}
          >
            <AiOutlineWhatsApp
              size={38}
              className={!nav ? "hidden" : "hover:text-white p-1.5"}
            />
          </div>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#88b1ea] ease-in-out duration-700 z-50"
              : "fixed left-[-100%]"
          }
        >
          <div className="mt-2 ml-2 h-16 w-16 shadowlogo rounded-full overflow-hidden">
            <img className="object-cover rounded-full" src={Logo} alt="/" />
          </div>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-white">
              <Link to="/" onClick={handleNav}>
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-white">
              <Link to="/gallery" onClick={handleNav}>
                Gallery
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-white">
              <Link to="/" onClick={handleNav}>
                Titles
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-white">
              <Link to="/" onClick={handleNav}>
                Shop
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-white">
              <Link to="/" onClick={handleNav}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex justify-around h-16 max-w-64 ml-4 mr-4 pt-3">
            <div className="mr-2 cursor-pointer">
              <AiOutlineInstagram size={40} className="text-white" />
            </div>
            <div className="mr-2 cursor-pointer ">
              <SiFacebook size={35} className="text-white" />
            </div>
            <div className="mr-2 cursor-pointer">
              <AiOutlineWhatsApp size={38} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
