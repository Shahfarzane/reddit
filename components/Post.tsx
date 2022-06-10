import React from "react";
import {
  ArrowDownIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
  ArrowUpIcon,
} from "@heroicons/react/outline";

type Props = {
  post: Post;
};
function Post({ post }: Props) {
  return (
    <div>
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon className="voteButton hover:text-red-400" />
        <p className="text-xs font-bold text-black">0</p>
        <ArrowDownIcon className="voteButton hover:text-blue-400" />
      </div>
      <div>
        <div>votes</div>
      </div>
    </div>
  );
}

export default Post;
