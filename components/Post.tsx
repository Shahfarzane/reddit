import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/solid";
import React from "react";
import Avatar from "./Avatar";
import TimeAgo from "react-timeago";
import Image from "next/image";
import Link from "next/link";
import { Jelly } from "@uiball/loaders";

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  if (!post)
    return (
      <div className="flex w-full items-center justify-center p-10 text-xl">
        <Jelly size={50} color="#FF4501" />
      </div>
    );
  return (
    <Link href={`/post/${post.id}`}>
      <div className="post flex cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm hover:border hover:border-gray-600 mt-3">
        {/* Left */}
        <div className="postLeft flex flex-col items-center justify-start space-y-1 rounded-md bg-gray-50 text-gray-400">
          <ArrowUpIcon className="voteButton hover:text-red-400 cursor-pointer" />
          <p className="text-black font-bold text-xs">0</p>
          <ArrowDownIcon className="voteButton hover:text-blue-400 cursor-pointer" />
        </div>
        <div className="postContent p-3">
          {/* Header */}
          <div className="header flex items-center space-x-2">
            <Avatar seed={post.subreddit[0]?.topic} />
            <p className="text-xs text-gray-500">
              <Link href={`/subreddit/${post.subreddit[0]?.topic}`}>
                <span className="font-bold text-black hover:text-blue-400 hover:underline">
                  r/{post.subreddit[0]?.topic}
                </span>
              </Link>{" "}
              Posted by {post.username} {""}
              <TimeAgo date={post.created_at} />
            </p>
          </div>
          {/* Body */}
          <div className="postContent py-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm font-light">{post.body}</p>

            {/* Image */}
            {post.image && post.image !== "" && (
              <img className="w-full" src={post.image} alt={post.title} />
            )}
          </div>
          {/* Footer */}
          <div className="footer flex space-x-4 text-gray-400">
            <div className="postButton">
              <ChatIcon className="h-6 w-6" />
            </div>
            <div className="postButton">
              <GiftIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Award</p>
            </div>
            <div className="postButton">
              <ShareIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Share</p>
            </div>
            <div className="postButton">
              <BookmarkIcon className="h-6 w-6" />
              <p className="hidden sm:inline">Save</p>
            </div>
            <div className="postButton">
              <DotsHorizontalIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
