// import { getServerSession } from "next-auth"
// import { authOption } from "../../app/api/auth/[...nextauth]/route"
// authUserSession
import Link from "next/link"
import { authUserSession } from "../../app/libs/auth-libs"
import { FiLogIn } from "react-icons/fi";


const UserAction = async () => {
    const user = await authUserSession()
    const actionLabel = 
      user ? (
        <img src={user.image} alt="" className="w-10 rounded-full"/>
      ) : (
        <>
        <div className="bg-[#f9d949] p-2 rounded-full text-[#0c0a24]">
          <FiLogIn />
        </div>
        </>
      )
    const actionURL = user ? "/users/dashboard" : "/api/auth/signin"
    // console.log(user.email)
  return (
    <div>
        <Link href={actionURL}>{actionLabel}</Link>
    </div>
  )
}

export default UserAction