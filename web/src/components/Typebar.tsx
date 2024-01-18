import React, { useState } from "react";
import { getProfileSrc } from "./User";
import Image from "next/image";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";
import toast from "react-hot-toast";
import { Spinner } from "./assets/Spinner";

const Typebar = () => {
  const user = useUser();

  const [input, setInput] = useState("");

  const ctx = api.useContext();

  const btnStyle = {
    color: "#fff",
  };

  const { mutate, isLoading: isPosting } = api.post.create.useMutation({
    onSuccess: () => {
      setInput("");
      void ctx.post.getAllPosts.invalidate();
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      if (errorMessage) {
        if (errorMessage[0]) {
          toast.error(errorMessage[0]);
        }
      } else {
        toast.error("Something went wrong! Try again later :c");
      }
    },
  });

  if (!user) return null;

  /// clear the typebar when clicked
  return (
    <div className="sticky top-2 flex flex-row items-center justify-center pb-2">
      {!user.isSignedIn && (
        <div>
          <SignInButton>
            <Image
              src="/user.png"
              className="h-12 w-12 rounded-full border border-black bg-white"
              alt="pfp"
              width={48}
              height={48}
            ></Image>
          </SignInButton>
        </div>
      )}
      <div className="m-2 flex grow items-center rounded-xl border border-t-0 bg-white px-2 py-4 text-slate-900 ">
        <input
          placeholder="Start typing here!"
          className="grow bg-transparent outline-none"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              e.preventDefault();
              if (input !== "") {
                mutate({ content: input });
              }
            }
          }}
          disabled={isPosting}
        />

        {/* change button to loading while the post is being created */}
        {input !== "" && !isPosting && (
          <button
            onClick={() => mutate({ content: input })}
            disabled={isPosting}
          >
            <Image
              src="/send.png"
              className="m-2 h-6 w-6 self-end"
              alt="arrow"
              width={24}
              height={24}
            />
          </button>
        )}
        {isPosting && (
          <div className="flex items-center justify-center">
            {" "}
            <Spinner size={40} />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Typebar;
