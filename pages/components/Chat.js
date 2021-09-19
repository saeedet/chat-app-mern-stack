import { DotsVerticalIcon, SearchIcon } from "@heroicons/react/outline";
import React from "react";
import Input from "./Input";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="h-screen w-2/3 flex flex-col">
      <header className="w-full bg-gray-100 h-16 mb-2 border-b flex justify-between items-center px-4">
        <h1 className="font-bold cursor-pointer">Channel title</h1>
        <div className="flex space-x-3">
          <SearchIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
          <DotsVerticalIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
        </div>
      </header>
      <div className="flex-grow overflow-y-scroll scrollbar-hide">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <Input />
    </div>
  );
};

export default Chat;
