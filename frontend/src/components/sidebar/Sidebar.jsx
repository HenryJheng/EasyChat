import React from "react";
import Brand from "./brand/Brand";
import UserAvatar from "./userAvatar/UserAvatar";
import FunctionList from "./functionList/FunctionList";

const Sidebar = () => {
  return (
    <div className="flex flex-col flex-[0.5] justify-center items-center bg-[#3b3b3b] ">
      <Brand />
      <UserAvatar />
      <FunctionList />
    </div>
  );
};

export default Sidebar;
