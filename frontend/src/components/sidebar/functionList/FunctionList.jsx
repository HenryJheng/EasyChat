import React from "react";
import friendsIcon from "../../../assets/Icon/functionListIcon/friendsIcon.png";
import groupIcon from "../../../assets/Icon/functionListIcon/groupIcon.png";

const FunctionList = () => {
  return (
    <div className="flex flex-[6] flex-col  items-center">
      <div className="flex flex-col justify-center items-center mb-4 cursor-pointer hover:brightness-125 transition-all duration-200 text-[#787878]">
        <img src={friendsIcon} alt="Friends" className="w-8 h-8" />
        <p>Friends</p>
      </div>
      <div className="flex flex-col justify-center items-center cursor-pointer hover:brightness-125 transition-all duration-200 text-[#787878]">
        <img
          src={groupIcon}
          alt="Group"
          className="w-8 h-8 cursor-pointer hover:brightness-125 transition-all duration-200"
        />
        <p>Group</p>
      </div>
    </div>
  );
};

export default FunctionList;
