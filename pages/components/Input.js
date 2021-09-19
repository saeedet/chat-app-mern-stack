import React from "react";
import { EmojiHappyIcon, PaperClipIcon } from "@heroicons/react/outline";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";

const Input = () => {
  return (
    <div className="flex items-center space-x-2 lg:space-x-4 px-4 bg-gray-200 h-16">
      <EmojiHappyIcon className="h-8 text-gray-600  cursor-pointer" />
      <PaperClipIcon className="h-8 text-gray-600  cursor-pointer" />
      <div className="flex-grow bg-white rounded-full py-2 px-4 flex items-center">
        <input
          type="text"
          placeholder="Type a message"
          className="bg-transparent w-full outline-none"
        />
      </div>
      <ArrowCircleRightIcon className="h-8 text-gray-600 cursor-pointer" />
    </div>
  );
};

export default Input;
