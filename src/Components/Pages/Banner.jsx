import React from "react";
import Gedung from "../../assets/gedung-spiral.svg";
import { IoLocationOutline } from "react-icons/io5";
import Datetime from "../Elements/Datetime";
import Time from "../Elements/Time";


const Banner = () => {
  return (
    <div>
      <div className="flex mx-8 sm:mx-10 md:mx-12">
        <img src={Gedung} alt="Gedung Spiral" />
        <div className="absolute p-4 sm:p-6">
          <div className="bg-white rounded-xl flex p-3 shadow-lg hover:bg-black hover:text-white">
            <a href="https://maps.app.goo.gl/J23cqQjTZPdiZ4rA6" className="flex">
              <IoLocationOutline />
              <p className="font-manrope font-semibold text-sm px-2">
                UNJ Spiral Parking
              </p>
            </a>
          </div>
        </div>
        <div className="absolute right-20 top-12">
            <div className="bg-white hidden sm:flex items-center rounded-xl pl-4 pr-4 sm:pr-0 shadow-[rgba(0,0,10,0.5)_2px_2px_10px_0px]">
                <Datetime />
                <Time />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
