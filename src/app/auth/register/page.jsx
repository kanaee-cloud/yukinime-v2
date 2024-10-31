"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Img from "../../../../public/assets/welcome-image.jpg";
import SwiperItem from "../../../components/WelcomePage/SwiperItem";

export default function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      if (res.ok) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          router.push("/auth/signin");
        }, 2000);
      } else {
        const data = await res.json();
        setError(data.message || "Error registering");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-between items-center py-6">
        <div className="w-full md:w-1/2 text-left p-4 px-8">
          <a href="#" className="font-semibold  text-[1.2rem] lg:text-4xl">
            Yuki<span className="text-color-accent">nime!</span>
          </a>
          <form onSubmit={handleSubmit} className="">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-4 py-2 my-2 font-semibold text-white outline-none glass-morphism transition duration-200"
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Username"
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
              Register
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
          </form>
          <div className="flex text-sm mt-5 gap-x-2 justify-center">
            <p className="opacity-40">Already have an account? </p>
            <a href="/auth/signin" className="text-color-accent hover:underline">
              Sign In
            </a>
          </div>
        </div>

        <div className="w-full md:h-full flex justify-center items-center">
          <SwiperItem />
        </div>
      </section>
    </>
  );
}
