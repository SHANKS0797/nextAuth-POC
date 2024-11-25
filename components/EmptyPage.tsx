import Image from "next/image";
import AccessDenied from "@/public/accessDenied.png";

export default function EmptyPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full py-80">
      <Image src={AccessDenied} alt="access-denied" height={200} width={200} />
      <p className="text-lg text-amber-400 font-semibold">
        Sorry! You&apos;re not authorised to view this
      </p>
    </div>
  );
}
