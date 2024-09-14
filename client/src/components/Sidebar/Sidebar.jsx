import React from "react";
import SidebarHeader from "./SideBarHeader";
import FunctionIcon from "./FunctionIcon";
import FriendsIcon from "../../assets/Icon/friendsIcon.png";
import GroupsIcon from "../../assets/Icon/groupIcon.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <SidebarHeader />
      <FunctionIcon src={FriendsIcon} />
      <FunctionIcon src={GroupsIcon} />
    </div>
  );
};

export default Sidebar;
