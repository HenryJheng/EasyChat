import React from "react";

const AddUser = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Username" name="usename" />
        <button>Search</button>
      </form>
      <div>
        <div>
          <img src="./avatar.png" alt="" />
          <span>Henry Jheng</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
