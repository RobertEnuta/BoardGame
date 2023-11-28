import Link from "next/link";
import React from "react";

import * as home from "./home.png";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { getPFP } from "./User";

function getUser() {
  const { isSignedIn, user, isLoaded } = useUser();

  return { isSignedIn, user, isLoaded };
}
const NAVIGATION = [
  {
    name: "Home",
    icon: <img className="h-8 w-8" src="/home.png" />,
    url: "",
  },
  {
    name: "Profile",
    icon: <img className="h-8 w-8" src="/user.png/" />,
    url: "profile",
  },
  // {
  //   name: "Search",
  //   icon: <img className="h-8 w-8" src="/search.png/" />,
  //   url: "search",
  // },
];

function Sidebar() {
  return (
    <nav className="mr-2 flex max-w-bar content-around justify-center overflow-hidden text-slate-900">
      <div className=" mr-2 flex-1 justify-self-start rounded-r-md bg-white px-2 pt-2">
        <div className="self-center">
          {NAVIGATION.map((item) => (
            <Link href={`/${item.url}`} key={item.name}>
              <div className="m-2 grid auto-cols-max grid-flow-col place-content-evenly justify-center rounded-lg border bg-slate-50 p-1 pt-2 hover:bg-slate-400">
                {item.name == "Profile" ? getPFP() : item.icon}
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        {!getUser().isSignedIn && (
          <button className="m-2 grow self-end justify-self-center rounded-lg border bg-amber-300 bg-opacity-40 px-4 py-2 font-bold hover:bg-opacity-80">
            <SignInButton />
          </button>
        )}
        {getUser().isSignedIn && (
          <button className="m-2 grow self-end justify-self-center rounded-lg border bg-amber-300 bg-opacity-40 px-4 py-2 font-bold hover:bg-opacity-80">
            <SignOutButton />
          </button>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}

export default Sidebar;
