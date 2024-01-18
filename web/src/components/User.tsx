import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

function GetUser() {
  // withServerSideAuth;
  const { isSignedIn, user, isLoaded } = useUser();

  return { isSignedIn, user, isLoaded };
}

let url = "/user.png/";
export function getPFP() {
  if (GetUser()?.isSignedIn) {
    url = String(GetUser()?.user?.imageUrl);
  } else {
    url = "/user.png/";
  }
  return <img className="h-8 w-8" src={url} />;
}

export function getProfileSrc() {
  if (GetUser()?.isSignedIn) {
    url = String(GetUser()?.user?.imageUrl);
  } else {
    url = "/user.png/";
  }
  return url;
}

export default function User() {
  return useUser();
}
