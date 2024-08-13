// import { getServerSession } from "next-auth"
// import { authOption } from "../../app/api/auth/[...nextauth]/route"
// authUserSession
import Link from "next/link"
import { authUserSession } from "../../app/libs/auth-libs"


const UserAction = async () => {
    const user = await authUserSession()
    const actionLabel = user ? (<img src={user.image} alt="" className="w-10 rounded-full"/>) : "Sign In"
    const actionURL = user ? "/users/dashboard" : "/api/auth/signin"
    // console.log(user.email)
  return (
    <div>
      
        <Link href={actionURL}>{actionLabel}</Link>
    </div>
  )
}

export default UserAction