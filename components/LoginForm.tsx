"use client";``
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

export default function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-full min-h-screen"
    >
      <fieldset className="w-full lg:w-1/3 border-2 border-[#3D3D3D] px-3 py-4">
        {/* -------------------- EMAIL CONTAINER -------------------- */}
        <div className="flex flex-col justify-start items-start w-full gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="eg: johndoe@gmail.com"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            className="w-full border-2 border-[#464646] outline-none focus-within:outline-none focus-within:border-[#97003c] px-2 py-1.5"
          />
        </div>
        {/* -------------------- PASSWORD CONTAINER -------------------- */}
        <div className="flex flex-col justify-start items-start w-full gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="w-full border-2 border-[#464646] outline-none focus-within:outline-none focus-within:border-[#97003c] px-2 py-1.5"
          />
        </div>
        {/* -------------------- SUBMIT BUTTON -------------------- */}
        <button type="submit" className="w-full py-3">
          <p className="rounded text-white py-3 bg-[#c8003d]">Login</p>
        </button>
      </fieldset>
    </form>
  );
}
