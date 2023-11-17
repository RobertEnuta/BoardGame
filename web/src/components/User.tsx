import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

function getUser() {
  const { isSignedIn, user, isLoaded } = useUser();

  return { isSignedIn, user, isLoaded };
}

var url: string = "/user.png/";
export function getPFP() {
  if (getUser()?.isSignedIn) {
    url = String(getUser()?.user?.imageUrl);
  } else {
    url = "/user.png/";
  }
  return <img className="h-8 w-8" src={url} />;
}

export function getProfileSrc() {
  if (getUser()?.isSignedIn) {
    url = String(getUser()?.user?.imageUrl);
  } else {
    url = "/user.png/";
  }
  return url;
}

export default function User() {
  return useUser();
}
