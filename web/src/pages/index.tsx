import { getBody } from "@trpc/client/dist/links/internals/httpUtils";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "~/components/Sidebar";
import Timeline from "~/components/Timeline";
import Typebar from "~/components/Typebar";

import { api } from "~/utils/api";

export default function Home() {
  const { data } = api.post.getAllPosts.useQuery();

  return (
    <>
      <Head>
        <title>GameBoard</title>
        <meta name="Messaging Board" content="GameBoard" />
        <link rel="icon" href="/games.ico" />
      </Head>
      <main className=" scrollbar-hide flex h-screen w-full flex-row overflow-hidden ">
        <Sidebar />
        <div className="mx-2 flex-1 justify-center">
          <Typebar />
          <Timeline />
        </div>
        <p className="text-2xl text-white">
          {data?.map((post) => <div key={post.postId}>{post.body}</div>)}
        </p>
      </main>
    </>
  );
}
