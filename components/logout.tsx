"use client";
import { HiMiniPower } from "react-icons/hi2";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        await signOut();
      }}
    >
      <button className="flex flex-row justify-start items-center gap-1 text-white">
        <HiMiniPower />
        <p>Logout</p>
      </button>
    </form>
  );
}
