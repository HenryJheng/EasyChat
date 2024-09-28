import React from "react";
import logo from "../../../assets/Icon/logo/logo.png";

const Brand = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-8">
      <img src={logo} alt="Logo" className="w-10 h-10" />
    </div>
  );
};

export default Brand;
