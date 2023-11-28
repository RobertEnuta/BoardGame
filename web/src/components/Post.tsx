import React from "react";

export default function Post(user: string, body: string) {
  return (
    <div className="POST flex max-w-post items-stretch gap-2 rounded-lg border border-black bg-white p-2">
      <div className="POSTER flex h-full flex-col place-content-center content-around self-center">
        <img
          src="/user.png"
          alt="pfp"
          className="min-w-12 max-w-32 min-h-12 max-h-32 grow rounded-full"
        />
        <div>{user}</div>
      </div>
      <div className="TEXT grow self-center">{body}</div>
      <div className="INTERACTIONS grid h-32 grid-flow-row place-content-center content-around self-center">
        <div className=" self-center">
          200
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
        <div>
          <div className="content-center justify-center justify-items-center self-center align-middle">
            2
          </div>
          <p>
            <svg
              className="hover:fill-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}
