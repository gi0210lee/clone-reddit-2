import {
  BeakerIcon,
  ChevronDownIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Sign() {
  const { data: session } = useSession();
  return session ? (
    <div
      onClick={() => signOut()}
      className="hidden lg:flex items-center border-gray-100 p-2 cursor-pointer space-x-2 border"
    >
      <div className="relative h-5 w-5 flex-shrink-0">
        <Image
          objectFit="contain"
          src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
          alt=""
          layout="fill"
        />
      </div>
      <div className="flex-1 text-xs">
        <p>{session?.user?.name}</p>
        <p className="text-gray-400">1 Karma</p>
      </div>

      <ChevronDownIcon className="h-5 flex-shrink-0 text-gray" />
    </div>
  ) : (
    <div
      onClick={() => signIn()}
      className="hidden lg:flex items-center border-gray-100 p-2 cursor-pointer space-x-2 border"
    >
      <div className="relative h-5 w-5 flex-shrink-0">
        <Image
          objectFit="contain"
          src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
          alt=""
          layout="fill"
        />
      </div>
      <div className="text-gray-400">
        <p>Sign In</p>
      </div>
    </div>
  );
}

export default Sign;
