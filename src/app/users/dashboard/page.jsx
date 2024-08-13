import { authUserSession } from "../../libs/auth-libs"

const Page = async () => {
    const user = await authUserSession()
    console.log(user)

  return (
    <>
        <div>
            <h1>Dashboard</h1>
            <div>
                <p>Welcome, {user.name}</p>
                
            </div>
        </div>
    </>
  )
}

export default Page