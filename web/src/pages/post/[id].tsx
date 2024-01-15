import Head from "next/head";
import Sidebar from "~/components/Sidebar";
import Timeline from "~/components/Timeline";
import Typebar from "~/components/Typebar";

export default function PostPage() {
  return (
    <>
      <Head>
        <title>Post by</title>
      </Head>
      <main className=" scrollbar-hide flex h-screen w-full flex-row overflow-hidden ">
        <div className="mx-2 flex-auto justify-center self-center">
          <Timeline />
        </div>
      </main>
    </>
  );
}
