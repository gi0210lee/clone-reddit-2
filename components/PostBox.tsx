import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Avatar from "./Avatar";
import { LinkIcon, PhotographIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";

type FormData = {
  postTitle: String;
  postBody: String;
  postImage: String;
  subreddit: string;
};

function PostBox() {
  const { data: session } = useSession();
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      className={
        "sticky top-15 z-50 bg-white border rounded-md border-gray-300 p-2"
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center space-x-3">
        <Avatar />

        <input
          disabled={!session}
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          type=""
          placeholder={
            session ? "Create a post bu entering a title" : "Sign in to Post"
          }
          {...register("postTitle", { required: true })}
        />

        <PhotographIcon
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
          className={`h-6 text-gray-300 cursor-pointer ${
            imageBoxOpen && "text-blue-300"
          }`}
        />
        <LinkIcon className={`h-6 text-gray-300 `} />
      </div>

      {!!watch("postTitle") && (
        <div className="flex flex-col py-2">
          {/* Body */}
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              className="m-2 flex-1 p-2 outline-none bg-blue-50"
              type="text"
              placeholder="Text (optional)"
              {...register("postBody")}
            />
          </div>

          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit:</p>
            <input
              className="m-2 flex-1 p-2 outline-none bg-blue-50"
              type="text"
              placeholder="i.e reactjs"
              {...register("subreddit")}
            />
          </div>
        </div>
      )}
    </form>
  );
}

export default PostBox;
