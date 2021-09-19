import React from "react";
import {
  ChatAltIcon,
  SearchIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className="border-r h-screen bg-gray-50 w-1/3">
      <div className="flex items-center justify-between py-2 h-16 px-2 sm:px-4 bg-gray-100">
        <img
          className="rounded-full h-10 w-10 cursor-pointer hover:ring-4 ring-red-400 active:ring-2  "
          src="https://scontent.fsyd4-1.fna.fbcdn.net/v/t1.6435-9/83894034_10221598637493735_4119387795988938752_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pV5suvVUGJ8AX8e183V&_nc_ht=scontent.fsyd4-1.fna&oh=a4e22d068835be1975c25b0818507e82&oe=616D8169"
          alt="username"
        />

        <div className="flex space-x-4">
          <ChatAltIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
          <DotsVerticalIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
        </div>
      </div>
      <div className="border-b">
        <div className="flex h-7 px-2 mx-4 my-2  bg-white flex-grow space-x-2 items-center justify-center rounded-full">
          <SearchIcon className="h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent outline-none "
          />
        </div>
      </div>
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
    </div>
  );
};

export default Sidebar;
