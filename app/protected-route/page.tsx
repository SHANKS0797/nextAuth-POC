import { auth } from "@/auth";
import AccessDenied from "../../public/accessDenied.png";
import Image from "next/image";
import { toSentenceCase } from "@/utils";
export default async function ProtectedPage() {
  const session = await auth();
  if (!session) {
    return (
      <div className="flex flex-col lg:flex-row justify-center items-center w-full py-80">
        <Image
          src={AccessDenied}
          alt="access-denied"
          height={200}
          width={200}
        />
        <p className="text-lg text-amber-400 font-semibold">
          Sorry! You&apos;re not authorised to view this
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col lg:flex-row justify-center items-center w-full py-80">
        <p className="text-green-400">
          Hello, {toSentenceCase(session.user?.name || "")}
        </p>
      </div>
    );
  }
}
