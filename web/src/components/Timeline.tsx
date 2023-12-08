import React from "react";
import Post from "./Post";
import { RouterOutputs, api } from "~/utils/api";

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
  if (isLoading) return <div>Loading page...</div>;
  if (!data) return <div> Something went wrong! </div>;
  return (
    <div className="scrollbar-hide flex h-screen w-full flex-col content-center overflow-auto">
      {data?.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.postId} />
      ))}
    </div>
  );
}
