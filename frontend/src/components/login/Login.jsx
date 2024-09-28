import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  // 待確認意思
  const handleAvatar = (e) => {
    setAvatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };

  const testLogin = (e) => {
    e.preventDefault();
    toast.error("Please, sign up first !!!");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Successful !!!");
  };

  return (
    <div className="flex felx-col justify-start items-center min-w-full font-extrabold">
      <div className="flex flex-1 flex-col justify-center items-center gap-24">
        <h2>Welcome back,</h2>
        <form
          onSubmit={testLogin}
          className="flex flex-col justify-center items-center gap-5"
        >
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="p-5 border-none outline-none bg-[#dddddd35] rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="p-5 border-none outline-none bg-[#dddddd35] rounded-md"
          />
          <button className="w-full p-5 border-none bg-black rounded-md cursor-pointer font-medium">
            Sign In
          </button>
        </form>
      </div>
      <div className="h-4/5 w-[2px] bg-[#dddddd35]"></div>
      <div className="flex flex-1 flex-col justify-center items-center gap-24">
        <h2>Create an Account</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center gap-5"
        >
          <label
            htmlFor="file"
            className="w-full flex items-center justify-between cursor-pointer underline"
          >
            <img
              src={avatar.url || "./avatar.png"}
              alt=""
              className="w-12 h-12 rounded-lg object-cover"
            />
            UPLOAD AM IMAGE
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
            className="p-5 border-none outline-none bg-[#dddddd35] rounded-md"
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="p-5 border-none outline-none bg-[#dddddd35] rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="p-5 border-none outline-none bg-[#dddddd35] rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="p-5 border-none outline-none bg-[#dddddd35] rounded-md"
          />
          <button className="w-full p-5 border-none bg-black rounded-md cursor-pointer font-medium z">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
