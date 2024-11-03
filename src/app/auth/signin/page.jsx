"use client"
import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import dynamic from 'next/dynamic';

// Dynamically import SwiperItem to ensure it loads only on the client
const SwiperItem = dynamic(() => import("../../../components/WelcomePage/SwiperItem"), {
  ssr: false, // Disable SSR for SwiperItem
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/users/dashboard",
    });

    if (res?.ok) {
      router.push("/users/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleOAuthLogin = async (provider) => {
    await signIn(provider, { callbackUrl: "/users/dashboard" });
  };

  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-between items-center py-6 px-8">
        <div className="w-full md:w-1/2 text-left p-4">
          <a href="#" className="font-semibold text-[1.2rem] lg:text-4xl">
            Yuki<span className="text-color-accent">nime!</span>
          </a>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-4 py-2 my-2 font-semibold text-white outline-none glass-morphism transition duration-200"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 my-2 font-semibold text-white outline-none glass-morphism transition duration-200"
              required
            />
            <button type="submit" className="mt-5 py-2 w-full btn btn-action">
              Login
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
          <div className="flex text-sm mt-5 gap-x-2 justify-center">
            <p className="opacity-40">Don't have an account? </p>
            <a href="/auth/register" className="text-color-accent hover:underline">
              Create One
            </a>
          </div>
          <button
            onClick={() => handleOAuthLogin("github")}
            className="flex items-center justify-center gap-x-4 w-full py-2 my-2 font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-900 transition duration-200"
          >
            <FaGithub />
            <p>Login with Github</p>
          </button>
        </div>

        <div className="w-full md:h-full flex justify-center items-center">
          <Suspense fallback={<div>Loading...</div>}>
            <SwiperItem />
          </Suspense>
        </div>
      </section>
    </>
  );
}
