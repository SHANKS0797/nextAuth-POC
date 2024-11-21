"use client";
import { NewUserCredentials, signUp } from "@/app/actions/auth";
import { FormEvent, useState } from "react";

export default function RegisterForm() {
  const [credentials, setCredentials] = useState<NewUserCredentials>({
    fname: "",
    lname: "",
    email: "",
    mobNo: "",
    password: "",
    confPassword: "",
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await signUp(
      credentials,
      `${window.innerWidth} ${window.innerHeight}`
    );
    console.log("User registered successfully", user);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-full min-h-screen"
    >
      <fieldset className="w-full lg:w-1/3 border-2 border-[#3D3D3D] px-3 py-4">
        {/* -------------------- NAME CONTAINER -------------------- */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-start lg:items-center w-full gap-2">
          {/* -------------------- FIRST NAME CONTAINER -------------------- */}
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              placeholder="eg: John"
              value={credentials.fname}
              onChange={(e) =>
                setCredentials({ ...credentials, fname: e.target.value })
              }
              className="w-full border-2 border-[#464646] outline-none focus-within:outline-none focus-within:border-[#97003c] px-2 py-1.5"
            />
          </div>
          {/* -------------------- LAST NAME CONTAINER -------------------- */}
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              placeholder="eg: Doe"
              value={credentials.lname}
              onChange={(e) =>
                setCredentials({ ...credentials, lname: e.target.value })
              }
              className="w-full border-2 border-[#464646] outline-none focus-within:outline-none focus-within:border-[#97003c] px-2 py-1.5"
            />
          </div>
        </div>
        {/* -------------------- CONTACT CONTAINER -------------------- */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-start lg:items-center w-full gap-2">
          {/* -------------------- MOBILE NUMBER CONTAINER -------------------- */}
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <label htmlFor="mobNo">Mobile Number</label>
            <input
              type="text"
              id="mobNo"
              placeholder="eg: 8888568456"
              value={credentials.mobNo}
              onChange={(e) =>
                setCredentials({ ...credentials, mobNo: e.target.value })
              }
              className="w-full border-2 border-[#464646] outline-none focus-within:outline-none focus-within:border-[#97003c] px-2 py-1.5"
            />
          </div>
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
        </div>
        {/* -------------------- PASSWORD CONTAINER -------------------- */}
        <div className="flex flex-col justify-start items-start w-full gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="w-full border-2 border-[#464646] outline-none focus-within:outline-none focus-within:border-[#97003c] px-2 py-1.5"
          />
        </div>
        {/* -------------------- CONFIRM PASSWORD CONTAINER -------------------- */}
        <div className="flex flex-col justify-start items-start w-full gap-1">
          <label htmlFor="confPassword">Confirm Password</label>
          <input
            type="password"
            id="confPassword"
            placeholder="Confirm Password"
            value={credentials.confPassword}
            onChange={(e) =>
              setCredentials({ ...credentials, confPassword: e.target.value })
            }
            className="w-full border-2 border-[#464646] outline-none focus-within:outline-none focus-within:border-[#97003c] px-2 py-1.5"
          />
        </div>
        {/* -------------------- SUBMIT BUTTON -------------------- */}
        <button type="submit" className="w-full py-3">
          <p className="rounded text-white py-3 bg-[#c8003d]">
            Create an account
          </p>
        </button>
      </fieldset>
    </form>
  );
}
