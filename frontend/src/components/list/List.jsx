import React from "react";
import NameSearch from "./nameSearch/NameSearch";
import FriendsList from "./friendsList/FriendsList";

const List = () => {
  return (
    <div className="flex flex-col flex-[2] item-center p-4 border-l-2 border-solid border-[#dddddd35]">
      <NameSearch />
      <FriendsList />
    </div>
  );
};

export default List;
