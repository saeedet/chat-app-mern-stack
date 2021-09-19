import React from "react";

const SidebarRow = () => {
  return (
    <div className="border-b px-2 sm:px-4 py-4 flex items-center space-x-2 w-full cursor-pointer hover:bg-gray-100 active:bg-gray-200">
      <img
        className="rounded-full h-7 w-7 sm:h-10 sm:w-10 "
        src="https://scontent.fsyd4-1.fna.fbcdn.net/v/t1.6435-9/83894034_10221598637493735_4119387795988938752_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pV5suvVUGJ8AX8e183V&_nc_ht=scontent.fsyd4-1.fna&oh=a4e22d068835be1975c25b0818507e82&oe=616D8169"
        alt=""
      />
      <div className="flex-grow truncate">
        <h4 className="font-bold text-sm sm:text-xl">conversation</h4>
        <p className="text-sm">last message</p>
      </div>
      <p className="self-start mt-1 hidden md:inline-flex">timestamp</p>
    </div>
  );
};

export default SidebarRow;
