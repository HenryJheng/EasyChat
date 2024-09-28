import React from "react";
import searchIcon from "../../../assets/Icon/functionListIcon/searchIcon.png";
import addIcon from "../../../assets/Icon/functionListIcon/addIcon.png";

const NameSearch = () => {
  return (
    <div className="flex items-center w-full">
      <div className="flex items-center bg-[#4a4a4a] rounded-[10px] pl-4 h-12 mr-2">
        <img src={searchIcon} alt="searchIcon" className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent flex-1 border-none outline-none text-white ml-4"
        />
      </div>
      <img src={addIcon} alt="add" className="w-4 h-4 cursor-pointer" />
    </div>
  );
};

export default NameSearch;
