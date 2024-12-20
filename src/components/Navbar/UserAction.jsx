// import { getServerSession } from "next-auth"
// import { authOption } from "../../app/api/auth/[...nextauth]/route"
// authUserSession

import Link from "next/link";
import { authUserSession } from "../../app/libs/auth-libs";
import { FiLogIn } from "react-icons/fi";
// import NoProfile from "../../assets/no-profile.jpg";

const UserAction =  ({ userData }) => {
  
  const actionLabel = userData ? (
    <>
    <div className="hover:bg-[#2c1f7f] p-1 rounded-full transition-all">
      <img 
        src={userData.image ? userData.image : "/assets/no-profile.jpg"} 
        alt="" 
        className="w-10 rounded-full" />
    </div>
    </>
  ) : (
    <>
      <div className="bg-[#f9d949] p-2 rounded-full text-[#0c0a24]">
        <FiLogIn />
      </div>
    </>
  );
  const actionURL = userData ? "/users/dashboard" : "/auth/signin";
  // console.log(user.email)
  return (
    <div>
      <Link href={actionURL}>{actionLabel}</Link>
    </div>
  );
};

export default UserAction;
