import React from "react";
import { getProfileSrc } from "./User";

import Image from "next/image";

const Log = () => {
  console.log("clicked");
};

function Typebar() {
  return (
    <div className="sticky top-2 flex flex-row items-center justify-center pb-2">
      <Image
        src={getProfileSrc()}
        className="h-12 w-12 rounded-full border border-black bg-white"
        alt="pfp"
        width={48}
        height={48}
      />
      <div className="m-2 flex grow items-center rounded-xl border border-t-0 bg-white px-2 py-4 text-slate-900 ">
        <input
          placeholder="Start typing here!"
          className="grow bg-transparent outline-none"
        />
        <button onClick={Log}>
          <Image
            src="/send.png"
            className="m-2 h-6 w-6 self-end"
            alt="arrow"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}

export default Typebar;
