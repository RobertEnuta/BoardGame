import { getBody } from "@trpc/client/dist/links/internals/httpUtils";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "~/components/Sidebar";
import Timeline from "~/components/Timeline";
import Typebar from "~/components/Typebar";

//trpc
import { api } from "~/utils/api";

export default function Home() {
  // //trpc
  // const { data, isLoading } = api.post.getAllPosts.useQuery();
  // if (isLoading) return <div>Loading page...</div>;
  // if (!data) return <div> Something went wrong! </div>;

  return (
    <>
      <Head>
        <title>GameBoard</title>
        <meta name="Messaging Board" content="GameBoard" />
        <link rel="icon" href="/games.ico" />
      </Head>
      <main className=" scrollbar-hide flex h-screen w-full flex-row overflow-hidden ">
        <Sidebar />
        <div className="mx-2 flex-auto justify-center">
          <Typebar />
          <div className="mx-2 flex-auto justify-center self-center">
            <Timeline />
          </div>
        </div>
      </main>
    </>
  );
}
