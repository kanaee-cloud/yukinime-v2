import React from "react";
import { authUserSession } from "../../app/libs/auth-libs";
import { BsListNested } from "react-icons/bs";

const Header = ({ user }) => {
  

  return (
    <div className="flex justify-end md:justify-end py-3 px-3 mb-3">
      
      <div className="flex items-center gap-4">
        <div className="text-right">
          <h1 className="font-semibold text-md">{user.name}</h1>
          <p className="text-xs opacity-50">Membership</p>
        </div>
        <img
          src={user.image}
          alt="User Image"
          className="w-12 h-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
