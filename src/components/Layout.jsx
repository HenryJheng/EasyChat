import SideBarHeader from "./SideBarHeader";
import UserList from "./UserList";
import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindow from "./ChatWindow";

function Layout() {
  return (
    <>
      <div>
        <SideBarHeader />
        <UserList />
      </div>
      <div>
        <ChatWindowHeader />
        <ChatWindow />
      </div>
    </>
  );
}

export default Layout;
