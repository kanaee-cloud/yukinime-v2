"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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

    if (res.ok) {
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
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <button
        onClick={() => handleOAuthLogin("github")}
        className="w-full py-2 my-2 font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-900 transition duration-200"
      >
        Login with GitHub
      </button>
    </>
  );
}
