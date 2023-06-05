import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
const About = () => {
  return (
    <div className="h-screen mt-16 ">
      <section className="flex flex-col lg:flex-row lg:justify-around lg:space-x-4 items-center justify-center h-full bg-gray-200">
        {/* levo */}
        <div id="about" className="h-max max-w-xl rounded-md">
          <div className="p-2 my-8">
            <h5 className="font-light-200 text-sm">About us</h5>
            <hr className="h-0.5 w-6 bg-[#5285F2] " />
          </div>
          <div className="p-2">
            <h1 className="text-xl font-semibold">
              We love what we do and our clients needs are primary.
            </h1>
          </div>
          <p className="font-light p-2 text-lg lg:leading-8">
            With more than 10 years of experience in the dog-breed field,
            Diamond House Stojicevic team has been able to please every pug
            enthusiast who has reached us. Because we meticulously assess each
            pug and their daily requirements, our care is impeccable.
          </p>
        </div>

        <div className="h-72 mt-6 p-2">
          <h1 className="text-xl font-semibold ">
            Have a question or need more information? Deliver a message
          </h1>
          <nav className="flex flex-row items-center justify-center space-x-2  h-8 my-6">
            <BsTelephoneFill
              size={20}
              className="text-[#5285F2] cursor-pointer"
            />
            <div className="cursor-pointer p-1 hover:font-light">
              {" "}
              + 381 - 414 - 321{" "}
            </div>
          </nav>
          <div className="flex items-center justify-center p-2 my-2 relative h-10">
            <hr className="h-0.5 w-full bg-[#5285F2] z-0" />
            <div className="pl-1.5 my-2 uppercase flex items-center  font-light h-10 w-10 rounded-full border-[#5285F2] border-2 absolute  bg-gray-200">
              or
            </div>
          </div>
          <nav className="p-2 text-lg flex items-center justify-center mt-6">
            Send us an email
            <button className="mx-4 flex flex-row items-center justify-center space-x-4 h-10 w-1/3 rounded-full bg-[#5285F2] p-4 hover:brightness-110">
              <nav className="text-white">Contact</nav>{" "}
              <div>
                <IoMailOutline size={25} className="text-white" />
              </div>{" "}
            </button>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default About;
