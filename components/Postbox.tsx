import { LinkIcon, PhotographIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import React from "react";
import Avatar from "./Avatar";
import { useForm } from "react-hook-form";

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subrredit: string;
};
function Postbox() {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <form className="sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2 ">
      <div className="flex items-center space-between-x-3">
        <Avatar />

        <input
          {...register("postTitle", { required: true })}
          disabled={!session}
          className="bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1"
          type="text"
          placeholder={
            session
              ? "Create a post by entering a title"
              : "You need to sign in to post"
          }
        />
        <PhotographIcon className={`h-6 text-gray-300 cursor-pointer`} />
        <LinkIcon className="h-6 text-gray-300" />
      </div>
    </form>
  );
}

export default Postbox;
