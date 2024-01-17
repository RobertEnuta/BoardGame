import React from "react";
import Post from "./Post";
import { RouterOutputs, api } from "~/utils/api";
import { PageLoading } from "./assets/Spinner";

export function UserTimeline() {
  return <div></div>;
}

export default function Timeline() {
  type PostWithUser = RouterOutputs["post"]["getAllPosts"][number];
  const PostView = (props: PostWithUser) => {
    // const { post, user } = props;
    return (
      <div className="w-full self-center py-2" key={props.post.postId}>
        {Post(props)}
      </div>
    );
  };

  const { data, isLoading } = api.post.getAllPosts.useQuery();
  if (isLoading) return <PageLoading size={60} />;
  if (!data) return <div> Something went wrong! </div>;
  return (
    <div className="scrollbar-hide flex h-screen w-full flex-col content-center overflow-y-scroll pb-24">
      {data?.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.postId} />
      ))}
    </div>
  );
}
