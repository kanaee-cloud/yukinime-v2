import Link from "next/link";
import { redirect } from "next/navigation";
import { authUserSession } from "../../libs/auth-libs";
import Image from "next/image";
import Background from "../../../../public/assets/profile-bg.jpg";
import NoProfile from "../../../../public/assets/no-profile.jpg";
import prisma from "../../libs/prisma";
import CollectionCard from "../../../components/AnimeList/CollectionCard";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  console.log(user);

  if (!user) {
    redirect("/auth/signin");
  }

  // const handleImageUpload = async (e) => {
  //   const formData = new FormData()
  //   formData.append('profileImage', e.target.files[0])
  //   formData.append('userId', user.id)

  //   const res = await fetch('/api/upload', {
  //     method: 'POST',
  //     body: formData
  //   })

  //   if(res.ok){
  //     alert('upload berhasil')
  //   } else {
  //     alert('upload gagal')
  //   }
  // }

  return (
    <main className="relative h-screen w-full container mx-auto rounded-lg">
      <div className="relative w-full h-[30vh] lg:h-[40vh] md:h-[40vh]">
        <Image
          src="/assets/profile-bg.jpg"
          alt="Profile Background"
          layout="fill"
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(153deg,rgba(0,0,0,0.83)_0%,rgba(0,0,0,0.41)_20%)] pointer-events-none">
          <div className="flex flex-row items-center p-4 gap-x-4 h-full px-6 md:px-10">
            {/* Profile Image */}
            <div className="relative w-32 h-32 md:w-44 md:h-44">
              <img
                src={user.image ? user.image : NoProfile}
                alt="User Image"
                className="rounded-full shadow-lg object-cover"
                layout="fill"
              />
            </div>
            {/* User Info */}
            <div className="flex flex-col gap-y-2 md:gap-y-3 md:text-left">
              <p className="text-xs text-white">Profile</p>
              <p className="text-3xl md:text-5xl font-bold text-white">
                {user.name}
              </p>
              <p className="text-xs md:text-sm text-white opacity-70">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <ImageUpload userId={user.id}/> */}
      <div className="mt-10">
        <h1>Favorite Anime</h1>
      <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-6 mt-5">
        {collection.slice(0, 5).map((collect, index) => {
          return (
            <CollectionCard
              key={index}
              collect={collect}
              userEmail={user.email}
            />
          );
        })}
      </div>
      </div>
    </main>
  );
};

export default Page;
