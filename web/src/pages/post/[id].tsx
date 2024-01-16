import Head from "next/head";
import Link from "next/link";
import Sidebar from "~/components/Sidebar";
import Image from "next/image";

export default function PostPage() {
  return (
    <>
      <Head>
        <title>Post by</title>
      </Head>
      <main className=" scrollbar-hide flex h-screen w-full flex-row overflow-hidden ">
        <Sidebar />
        <Link href="/" replace>
          <div className="max-w-screen mx-24 my-12 flex max-h-screen flex-col place-content-center content-around self-center rounded-md border-4 border-black bg-white p-12 ">
            <div className="self-center text-5xl font-bold">
              404! Post Unavailable!
            </div>
          </div>
        </Link>
      </main>
    </>
  );
}
