import React from "react";

const Message = () => {
  return (
    <div className="w-full px-4 py-2 flex space-x-2 items-center">
      <img
        className="rounded-full h-7 w-7 sm:h-10 sm:w-10 "
        src="https://scontent.fsyd4-1.fna.fbcdn.net/v/t1.6435-9/83894034_10221598637493735_4119387795988938752_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pV5suvVUGJ8AX8e183V&_nc_ht=scontent.fsyd4-1.fna&oh=a4e22d068835be1975c25b0818507e82&oe=616D8169"
        alt=""
      />
      <div className="bg-gray-100 p-4 rounded-2xl font-semibold">
        some message over here
      </div>
    </div>
  );
};

export default Message;
