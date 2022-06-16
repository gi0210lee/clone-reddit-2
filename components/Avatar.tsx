import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

type Props = {
  seed?: string;
  large?: boolean;
};

function Avatar({ seed, large }: Props) {
  const { data: session } = useSession();
  return (
    <div
      className={`relative h-10 w-10 overflow-hidden rounded-full border-gray-300 bg-white ${
        large && "h-20 w-20"
      }`}
    >
      {seed ? (
        <Image
          src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
          layout="fill"
          alt=""
        />
      ) : (
        <Image
          src={`https://avatars.dicebear.com/api/avataaars/${
            session?.user?.name || "placeholder"
          }.svg`}
          layout="fill"
          alt=""
        />
      )}
    </div>
  );
}

export default Avatar;
