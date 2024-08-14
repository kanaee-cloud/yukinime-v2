import Link from "next/link";
import { authUserSession } from "../../libs/auth-libs";
import Image from "next/image";
import Background from "../../../assets/profile-bg.jpg";

const Page = async () => {
  const user = await authUserSession();
  // if(!user) redirect("/")
  console.log(user);

  return (
    <>
      <section className="relative">
        <div className="relative w-full h-[30vh] lg:h-[50vh] md:h-[40vh]">
          <div className="relative w-full h-full">
            <Image
              src={Background}
              alt="Profile Background"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(153deg,rgba(0,0,0,0.83)_0%,rgba(0,0,0,0.41)_20%)] pointer-events-none">
            <div className="flex flex-row items-center  p-4 gap-x-4 h-full px-6 md:px-10">
              <img
                src={user.image}
                alt="User Image"
                className="w-32 h-32 md:w-44 md:h-44 rounded-full shadow-lg"
              />
              <div className="flex flex-col gap-y-2 md:gap-y-3 md:text-left">
                <p className="text-xs">Profile</p>
                <p className="text-3xl md:text-5xl font-bold">{user.name}</p>
                <p className="text-xs md:text-sm opacity-70">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end p-4">
          <Link href="/api/auth/signout">
            Logout
          </Link>
        </div>
        <div className="p-4 text-center">
          <p className="text-lg font-semibold">My Collection</p>
        </div>
      </section>
    </>
  );
};

export default Page;
