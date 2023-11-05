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
    id: 0,
  },
  {
    user: "test",
    post: (
      <div className="py-4">
        <Post />
      </div>
    ),
    id: 1,
  },
  {
    user: "test",
    post: (
      <div className="py-4">
        <Post />
      </div>
    ),
    id: 2,
  },
  {
    user: "test",
    post: (
      <div className="py-4">
        <Post />
      </div>
    ),
    id: 3,
  },
  {
    user: "test",
    post: (
      <div className="py-4">
        <Post />
      </div>
    ),
    id: 4,
  },
  {
    user: "test",
    post: (
      <div className="py-4">
        <Post />
      </div>
    ),
    id: 5,
  },
];

export default function Timeline() {
  return (
    <div className="scrollbar-hide flex h-screen w-full flex-col items-center overflow-auto">
      {POST.map((postItem) => (
        <div key={postItem.id}>{postItem.post}</div>
      ))}
    </div>
  );
}
