
import Link from "next/link";
import { redirect } from "next/navigation";
import { authUserSession } from "../../libs/auth-libs";
import Image from "next/image";
import Background from "../../../../public/assets/profile-bg.jpg";
import NoProfile from "../../../../public/assets/no-profile.jpg"; 
import Collection from "../../../../public/assets/collection.jpg";
import ImageUpload from "../../../components/ImagesUpload";

const Page = async () => {
  const user = await authUserSession();

  console.log(user)

  if (!user) {
    redirect("/auth/signin"); 
  }

  const handleImageUpload = async (e) => {
    const formData = new FormData()
    formData.append('profileImage', e.target.files[0])
    formData.append('userId', user.id)

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    if(res.ok){
      alert('upload berhasil')
    } else {
      alert('upload gagal')
    }
  }

  return (
    <section className="relative container mx-auto rounded-lg">
      {/* Background Image */}
      <div className="relative w-full h-[30vh] lg:h-[50vh] md:h-[40vh]">
        <Image
          src={Background}
          alt="Profile Background"
          layout="fill"
          className="object-cover rounded-lg"
          priority // Tambahkan ini agar gambar di-load lebih awal
        />
        <div className="absolute inset-0 bg-[linear-gradient(153deg,rgba(0,0,0,0.83)_0%,rgba(0,0,0,0.41)_20%)] pointer-events-none">
          <div className="flex flex-row items-center p-4 gap-x-4 h-full px-6 md:px-10">
            {/* Profile Image */}
            <div className="relative w-32 h-32 md:w-44 md:h-44">
              <Image
                src={user.image ? user.image : NoProfile} // Gunakan user.image jika ada, jika tidak pakai NoProfile
                alt="User Image"
                className="rounded-full shadow-lg object-cover"
                layout="fill"
              />
            </div>
            {/* User Info */}
            <div className="flex flex-col gap-y-2 md:gap-y-3 md:text-left">
              <p className="text-xs text-white">Profile</p>
              <p className="text-3xl md:text-5xl font-bold text-white">{user.name}</p>
              <p className="text-xs md:text-sm text-white opacity-70">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

     {/* <ImageUpload userId={user.id}/> */}
      
      {/* Logout Button */}
      <div className="flex justify-end p-4">
        <Link href="/api/auth/signout">
          <p className="text-red-600 hover:underline">Logout</p>
        </Link>
      </div>

      {/* Collection Section */}
      <div className="p-8 flex items-center">
        <Link href="/users/dashboard/collection">
          <div className="flex flex-col gap-y-2 bg-transparent hover:bg-gray-700 transition-colors duration-300 p-4 rounded-lg">
            {/* Collection Image */}
            <div className="relative w-44 h-44">
              <Image
                src={Collection}
                alt="Collection"
                className="rounded-lg"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="text-sm text-white">My Collection</h1>
            <p className="text-xs text-white opacity-30">by {user.name}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
