import React from "react";

function Typebar() {
  return (
    <div className="sticky top-2 flex flex-row items-center justify-center">
      <img
        src="/user.png"
        className="m-2 h-12 w-12 rounded-full border bg-white"
      />
      <div className="  my-2 grid grow grid-cols-2 grid-rows-1 items-center rounded-xl border border-t-0 bg-white px-2 py-4 text-slate-900 ">
        Start typing here
        <div className="self-end justify-self-end rounded-full border pr-1 pt-1">
          <img src="/send.png" className="m-2 h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default Typebar;
