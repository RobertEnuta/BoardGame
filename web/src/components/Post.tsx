import React from "react";

export default function Post() {
  return (
    <div className="POST max-w-post flex items-stretch gap-2 rounded-lg border border-black bg-white p-2">
      <div className="POSTER flex h-full flex-col place-content-center content-around self-center">
        <img
          src="/user.png"
          alt="pfp"
          className="min-w-12 max-w-32 min-h-12 max-h-32 grow rounded-full"
        />
        <div>@UserWITH REALLY LONG NAME</div>
      </div>
      <div className="TEXT grow self-center">
        ahsjkdahksj hdas asssssssssssssssssssssPost ahsjkdahksj hdas //
        asssssssssssssssssssssPost ahsjkdahksj hdas asssssssssssssssssssssPost
        // ahsjkda
      </div>
      <div className="INTERACTIONS grid h-32 grid-flow-row place-content-center content-around self-center">
        <div>1222</div>
        <div>2</div>
      </div>
    </div>
  );
}
