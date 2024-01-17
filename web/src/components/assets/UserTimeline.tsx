import React from "react";
import Post from "../Post";
import { RouterOutputs, api } from "~/utils/api";
import { PageLoading } from "./Spinner";
import { NextPage } from "next/types";

export const UserTimeline: NextPage<{ userId: string }> = ({ userId }) => {
  type PostByUserId = RouterOutputs["post"]["getPostByUserId"][number];
  const PostView = (props: PostByUserId) => {
    return (
      <div className="w-full self-center py-2" key={props.post.postId}>
        {Post(props)}
      </div>
    );
  };

  const { data, isLoading } = api.post.getPostByUserId.useQuery({ userId });
  if (isLoading) return <PageLoading size={60} />;
  if (!data) return <div> Something went wrong! </div>;
  return (
    <div className="scrollbar-hide flex h-screen w-full flex-col content-center overflow-y-scroll pb-4">
      {data?.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.postId} />
      ))}
    </div>
  );
};
