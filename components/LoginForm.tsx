"use client";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
type LoginFormProps = {
  session: Session | null;
};

export default function LoginForm({ session }: LoginFormProps) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirectTo: "/userProfile",
    });
  };
  const handleGoogleLoginSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    await signIn("google", {
      redirectTo: "/userProfile",
    });
  };
  const handleFacebookLoginSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    await signIn("facebook", {
      redirectTo: "/userProfile",
    });
  };
  useEffect(() => {
    if (session !== null) {
      router.push("/userProfile");
    }
  }, [session]);
  if (session === null) {
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
          {/* -------------------- SUBMIT CREDENTIALS BUTTON -------------------- */}
          <button type="submit" className="w-full py-3">
            <p className="rounded text-white py-3 bg-[#c8003d]">Login</p>
          </button>
          {/* -------------------- SIGN IN WITH GOOGLE BUTTON -------------------- */}
          <button
            type="button"
            onClick={handleGoogleLoginSubmit}
            className="flex justify-center items-center w-full py-3 border-2 border-[#181818] rounded-full"
          >
            <FcGoogle />
            Signin with Google
          </button>
          {/* -------------------- SIGN IN WITH FACEBOOK BUTTON -------------------- */}
          <button
            type="button"
            onClick={handleFacebookLoginSubmit}
            className="flex justify-center items-center w-full py-3 mt-1 border-2 border-[#181818] rounded-full"
          >
            <FaFacebook fill="#316FF6" />
            Signin with Facebook
          </button>
        </fieldset>
      </form>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <h2 className="font-semibold text-fuchsia-500">
          You are signed in as {session.user?.name}
        </h2>
      </div>
    );
  }
}
