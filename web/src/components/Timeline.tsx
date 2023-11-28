import React from "react";
import Post from "./Post";
import { api } from "~/utils/api";

export default function Timeline() {
  const { data, isLoading } = api.post.getAllPosts.useQuery();
  if (isLoading) return <div>Loading page...</div>;
  if (!data) return <div> Something went wrong! </div>;
  return (
    <div className="scrollbar-hide flex h-screen w-full flex-col items-center overflow-auto">
      {data?.map((post) => (
        <div className="py-4" key={post.postId}>
          {Post(post.body, post.body)}
        </div>
      ))}
    </div>
  );
}
