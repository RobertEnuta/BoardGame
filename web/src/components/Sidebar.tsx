import Link from "next/link";
import React from "react";

import Image from "next/image";
import * as home from "./home.png";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { getPFP } from "./User";

const GetUser = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return { isSignedIn, user, isLoaded };
};
const NAVIGATION = [
  {
    name: "Home",
    icon: (
      <Image
        className="h-8 w-8"
        src="/home.png"
        alt="home"
        width={32}
        height={32}
      />
    ),
    url: "/",
  },
  {
    name: "Profile",
    icon: (
      <Image
        className="h-8 w-8"
        src="/user.png/"
        alt="pfp"
        width={32}
        height={32}
      />
    ),
    url: `/user`,
  },
];

function Sidebar() {
  return (
    <nav className="mr-2 flex max-w-bar content-around justify-center overflow-hidden text-slate-900">
      <div className=" mr-2 flex-1 justify-self-start rounded-r-md bg-slate-100 px-2 pt-2">
        <div className="self-center">
          {NAVIGATION.map((item) => (
            <Link
              href={
                item.name == "Profile"
                  ? `/user/@${GetUser().user?.username}`
                  : item.url
              }
              key={item.name}
            >
              <div className="m-2 grid auto-cols-max grid-flow-col place-content-evenly justify-center rounded-lg border bg-slate-50 p-1 pt-2 hover:bg-slate-400">
                {item.name == "Profile" ? getPFP() : item.icon}
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        {!GetUser().isSignedIn && (
          <button className="m-2 grow self-end justify-self-center rounded-lg border bg-amber-300 bg-opacity-40 px-4 py-2 font-bold hover:bg-opacity-80">
            <SignInButton />
          </button>
        )}
        {GetUser().isSignedIn && (
          <button className="m-2 grow self-end justify-self-center rounded-lg border bg-amber-300 bg-opacity-40 px-4 py-2 font-bold hover:bg-opacity-80">
            <SignOutButton />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Sidebar;
