import React from "react";

const UserItem = () => {
  return (
    <div className="flex items-center gap-5 sm:px-3 py-3">
      <div className="w-10 h-10 rounded-full bg-lightest-gray/10 animate-pulse" />
      <span className="w-1/2 text-sm bg-lightest-gray/10 animate-pulse p-2"></span>
    </div>
  );
};

const UserLoader = () => {
  return (
    <div className="flex flex-col gap-2">
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </div>
  );
};

export default UserLoader;
