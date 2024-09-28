import React from "react";
import avatar from "../../../assets/Icon/avatar/johnWick.jpg";

const UserAvatar = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
    </div>
  );
};

export default UserAvatar;
