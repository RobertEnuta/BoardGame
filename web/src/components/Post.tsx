import { User } from "@clerk/nextjs/dist/types/server";
import React from "react";
import { RouterOutputs } from "~/utils/api";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { LikesSVG } from "./assets/Likes";

dayjs.extend(relativeTime);

const ShortenLikes = (nr: number) => {
  if (nr > 999) {
    const n = (nr - (nr % 100)) / 1000;
    return `${n}k`;
  }
  return nr;
};

var liked = false;
const Like = () => {
  liked = !liked;
  console.log(liked);
};

type PostWithUser = RouterOutputs["post"]["getAllPosts"][number];
export default function Post(data: PostWithUser) {
  return (
    <div className="POST flex grow items-stretch gap-2 rounded-lg border border-black bg-white  p-2">
      <div className="POSTER flex h-full max-w-sm flex-col place-content-center content-around self-center">
        <Image
          src={data.user.imageUrl}
          alt="pfp"
          className="h-20 w-20 grow self-center rounded-full"
          width={80}
          height={80}
        />
        <div className="self-center font-medium">@{data.user.username}</div>
      </div>
      {/* body */}
      <div className="flex h-full w-full grow flex-col gap-2 self-center">
        <span className="flex grow-0 text-sm text-slate-500">
          {String(dayjs(data.post.createdAt).fromNow())}
        </span>
        <div className="TEXT w-full grow basis-20 self-center text-lg font-medium">
          {data.post.body}
        </div>
      </div>
      {/* interactions */}
      <div
        className="INTERACTIONS grid h-32 grid-flow-row place-content-center content-around self-center"
        onClick={Like}
      >
        <div className=" self-center">
          {ShortenLikes(data.post.likes)}
          <p>
            <LikesSVG liked={liked} />
          </p>
        </div>
      </div>
    </div>
  );
}
