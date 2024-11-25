import { auth } from "@/auth";
import { toSentenceCase } from "@/utils";
import Link from "next/link";
import LogoutButton from "./logout";

export default async function Header() {
  const session = await auth();
  return (
    <nav className="sticky top-0 inset-x-0 flex flex-row justify-betwen items-center w-full px-5 py-3 bg-primary text-white">
      <header className="flex w-full text-base md:text-lg font-semibold">
        <Link href="/">I am being tested</Link>
      </header>
      {/* -------------------- NAVIGATION LINKS -------------------- */}
      <div className="flex flex-row justify-end items-center w-full gap-3 text-sm md:text-base font-medium">
        {!session ? (
          <Link href="/signin">Sign In</Link>
        ) : (
          <p>{toSentenceCase(session.user?.name || "")}</p>
        )}
        {!session && <Link href="/signup">Sign Up</Link>}
        <Link href="/userProfile">User Profile</Link>
        <Link href="/cart">Cart</Link>
        {session && <LogoutButton />}
      </div>
    </nav>
  );
}
