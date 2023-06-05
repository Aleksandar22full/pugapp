import React from "react";
import HeroIcon from "../assets/slika1.jpg";
import { RxDoubleArrowDown } from "react-icons/rx";
import { Link } from "react-scroll/modules";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between flex-col p-3 items-center lg:flex-row lg:justify-around mt-1 lg:py-36 ">
        <div className="max-w-2xl">
          <h1 className="p-2 font-bold text-4xl lg:text-7xl ">
            Discover your perfect pug puppy!
          </h1>
          <p className="font-light p-2 text-lg lg:text-3xl lg:mt-4 animate-fadeIn">
            Best destination for pug lovers searching for their new best friend.{" "}
            <br /> Every pug deserves a loving home.
          </p>
        </div>
        <div className="max-w-2xl lg:mt-4 p-4">
          <img
            className="object-cover rounded-xl  shadow-2xl shadow-zinc-900 hover:scale-105 transition transform ease-in duration-400"
            src={HeroIcon}
            alt="/"
          />
        </div>
      </div>
      <div className="flex items-center justify-center md:mt-[15%] lg:mt-0">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
        >
          <RxDoubleArrowDown
            size={35}
            className="animate-bounce cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
};

export default Hero;
