import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Sign() {
  const { data: session } = useSession();
  return (
    <div className="hidden lg:flex items-center border-gray-100 p-2 cursor-pointer space-x-2 border">
      <div className="relative h-5 w-5 flex-shrink-0">
        <Image
          objectFit="contain"
          src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
          alt=""
          layout="fill"
        />
      </div>
      <div className="text-gray-400">
        {session ? (
          <p onClick={() => signOut()}>Sign Out</p>
        ) : (
          <p onClick={() => signIn()}>Sign In</p>
        )}
      </div>
    </div>
  );
}

export default Sign;
