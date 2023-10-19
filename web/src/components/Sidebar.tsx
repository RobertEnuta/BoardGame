import Link from "next/link";
import React from "react";

import * as home from "./home.png";

const NAVIGATION = [
  {
    name: "Home",
    icon: <img className="h-40 w-40" src="/home.png" />,
  },
  {
    name: "Profile",
    icon: <img className="image h-40 w-40" src="./../icons/home.png/" />,
  },
];

function Sidebar() {
  return (
    <nav className="mr-2 flex flex-col justify-start pl-2 pt-2 text-slate-900">
      <button className="max-h-8 max-w-sm rounded-lg border bg-amber-300 bg-opacity-60 px-2 py-2 text-xs hover:bg-transparent">
        Login
      </button>
      {NAVIGATION.map((item) => (
        <Link href={`/${item.name.toLowerCase()}`} key={item.name}>
          {/* <img
            className="h-40 w-40"
            src="https://preview.redd.it/irwglgf0t3vb1.jpg?width=640&crop=smart&auto=webp&s=f377ed9dd37b525643d3bc79ee93cad473c4df04"
            alt={`${item.name}`}
          ></img> */}
          <div>{item.icon}</div>
          <div>{item.name}</div>
        </Link>
      ))}
    </nav>
  );
}

export default Sidebar;
