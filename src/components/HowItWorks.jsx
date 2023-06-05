import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { BsClipboardCheck, BsChatSquareText } from "react-icons/bs";
import { MdOutlineCreditScore } from "react-icons/md";

const HowItWorks = () => {
  return (
    <div className="lg:h-screen h-full flex flex-col lg:flex-row  lg:justify-around lg:space-x-4 bg-gray-100 items-center justify-start mb-4">
      {/* left */}
      <div className="h-5/6 w-full max-w-xl flex flex-col relative space-y-1">
        <div className="absolute w-0.5 h-3/4 bg-[#5285F2] left-[11%] top-24"></div>
        <div className="p-2 my-8 h-10 w-full">
          <h5 className="font-light-200 text-sm">How it works</h5>
          <hr className="h-0.5 w-6 bg-[#5285F2] " />
        </div>

        <div className="h-1/4 w-full p-2">
          <div className="h-full flex flex-row items-center justify-start space-x-4">
            <div className="h-full w-1/4 flex items-center justify-center lg:items-start">
              <div className="h-20 w-20 bg-white drop-shadow-md flex items-center justify-center">
                <SlMagnifier size={20} />
              </div>
            </div>
            <div className="h-full w-full">
              <h3 className="h-1/4 w-full leading-5 text-xl font-semibold">
                Find your pug
              </h3>
              <p className="h-3/4 leading-5 font-light text-lg ">
                Select your favorite pug from our awesome photo collection or
                from our social media channels.
              </p>
            </div>
          </div>
        </div>
        <div className="h-1/4 w-full p-2">
          <div className="h-full flex flex-row items-center justify-start space-x-4">
            <div className="h-full w-1/4 flex items-center justify-center lg:items-start">
              <div className="h-20 w-20 bg-white drop-shadow-md flex items-center justify-center">
                <BsClipboardCheck size={23} />
              </div>
            </div>
            <div className="h-full w-full">
              <h3 className="h-1/4 w-full leading-5 text-xl font-semibold">
                Check Availability
              </h3>
              <p className="h-3/4 leading-5 font-light text-lg ">
                Get in touch with us so you can reserve your dog for yourself
                fast otherwise the pug you like might not be available right now
                or may have already been sold.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="h-1/4 w-full p-2">
          <div className="h-full flex flex-row items-center justify-start space-x-4">
            <div className="h-full w-1/4 flex items-center justify-center lg:items-start">
              <div className="h-20 w-20 bg-white drop-shadow-md flex items-center justify-center">
                <BsChatSquareText size={23} />
              </div>
            </div>
            <div className="h-full w-full">
              <h3 className="h-1/4 w-full leading-5 text-xl font-semibold">
                Connect with an expert from our team
              </h3>
              <p className="h-3/4 leading-5 font-light text-lg ">
                Ask any questions you may have after contacting us about the pug
                and other technical information such as pricing, delivery,
                vaccination and passport.
              </p>
            </div>
          </div>
        </div>
        <div className="h-1/4 w-full p-2">
          <div className="h-full flex flex-row items-center justify-start space-x-4">
            <div className="h-full w-1/4 flex items-center justify-center lg:items-start">
              <div className="h-20 w-20 bg-white drop-shadow-md flex items-center justify-center">
                <MdOutlineCreditScore size={25} />
              </div>
            </div>
            <div className="h-full w-full">
              <h3 className="h-1/4 w-full leading-5 text-xl font-semibold">
                Make a reservation
              </h3>
              <p className="h-3/4 leading-5 font-light text-lg ">
                A down payment of 30% of the initial cost is required to
                successfully reserve your pug and ensure that no one else can
                purchase it before you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[700px] bg-gray-100 w-full lg:max-w-[700px] mt-20 lg:mt-0">
        right
      </div>
    </div>
  );
};

export default HowItWorks;
