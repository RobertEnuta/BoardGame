import { SignInButton, SignOutButton, useUser as UseUser } from "@clerk/nextjs";

function GetUser() {
  // withServerSideAuth;
  const { isSignedIn, user, isLoaded } = UseUser();

  return { isSignedIn, user, isLoaded };
}

var url: string = "/user.png/";
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
  return UseUser();
}
