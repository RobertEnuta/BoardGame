import { User } from "@clerk/nextjs/dist/types/server";
import React from "react";
import { RouterOutputs } from "~/utils/api";
import Image from "next/image";

const ShortenLikes = (nr: number) => {
  if (nr > 999) {
    const n = (nr - (nr % 100)) / 1000;
    return `${n}k`;
  }
  return nr;
};

const Like = () => {
  console.log("liked");
};

type PostWithUser = RouterOutputs["post"]["getAllPosts"][number];
export default function Post(props: PostWithUser) {
  return (
    <div className="POST flex grow items-stretch gap-2 rounded-lg border border-black bg-white  p-2">
      <div className="POSTER flex h-full max-w-sm flex-col place-content-center content-around self-center">
        <Image
          src={props.user.imageUrl}
          alt="pfp"
          className="h-20 w-20 grow self-center rounded-full"
          width={80}
          height={80}
        />
        <div className="self-center">{props.user.username}</div>
      </div>
      <div className="TEXT w-full grow self-center">{props.post.body}</div>

      <div
        onClick={Like}
        className="INTERACTIONS grid h-32 grid-flow-row place-content-center content-around self-center"
      >
        <div className=" self-center">
          {ShortenLikes(props.post.likes)}
          <p>
            <svg
              className="hover:fill-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}
