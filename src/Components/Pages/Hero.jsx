import React from "react";
import Logo from "../../assets/satpam-logo.svg";
import Bike from "../../assets/bike.svg";
import Car from "../../assets/car.svg";
import Modal from "../Elements/Modal";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10 mx-8 sm:mx-10 md:mx-12">
      <div className="grid col-span-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-manrope font-bold">
          Smart <span className="text-[#2E4374]">Parking</span> Management
        </h1>
        <p className="text-xs sm:text-sm mb-10 font-manrope">
          SATPAM dirancang untuk memudahkan pengguna dalam mengelola parkir,
          baik untuk pemilik lahan parkir, pengelola parkir, maupun pengguna
          parkir. SATPAM juga berkomitmen untuk memberikan kenyamanan dan
          keamanan bagi pengguna parkir.
        </p>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-center justify-center gap-5">
        <div className="border-2 rounded-xl flex flex-col items-center py-4 px-10 w-80 h-80">
          <h2 className="font-bold font-manrope pb-8">Motor</h2>
          <img src={Bike} alt="Motor" className="w-[70%] pb-4 md:pb-9" />
          <div className="mr-12 sm:mr-0">
            <Modal />
          </div>
        </div>
        <div className="border-2 flex flex-col items-center rounded-xl py-4 px-10 w-80 h-80">
          <h2 className="font-bold font-manrope pb-8">Mobil</h2>
          <img
            src={Car}
            alt="Mobil"
            className="w-[70%] sm:w-[100%] ml-12 sm:ml-0 pb-9"
          />
          <div className="md:mt-4">
            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
