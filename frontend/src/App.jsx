// import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import List from "./components/list/List";
import ChatWindow from "./components/chatWindow/ChatWindow";
import UserStatus from "./components/userStatus/UserStatus";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";

function App() {
  const user = true;

  return (
    <div className="flex w-[100dvw] h-[100dvh]">
      {user ? (
        <>
          <Sidebar />
          <List />
          <ChatWindow />
          <UserStatus />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
}

export default App;
