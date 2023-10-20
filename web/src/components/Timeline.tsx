import React from "react";
import Post from "./Post";

// contains all of the posts retrieved for the user
const POST = [
  {
    user: "test",
    post: (
      <div className="py-4">
        <Post />
      </div>
    ),
  },
  {
    user: "test",
    post: (
      <div className="py-4">
        <Post />
      </div>
    ),
  },
  {
    user: "test",
    post: (
      <div className="py-4">
        <Post />
      </div>
    ),
  },
  {
    user: "test",
    post: (
      <div className="py-4">
        <Post />
      </div>
    ),
  },
  {
    user: "test",
    post: (
      <div className="py-4">
        <Post />
      </div>
    ),
  },
  {
    user: "test",
    post: (
      <div className="py-4">
        <Post />
      </div>
    ),
  },
];

export default function Timeline() {
  return (
    <div className="flex h-screen w-full flex-col items-center">
      {POST.map((postItem) => (
        <div>{postItem.post}</div>
      ))}
    </div>
  );
}
