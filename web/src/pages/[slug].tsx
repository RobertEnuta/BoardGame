import Head from "next/head";
import Sidebar from "~/components/Sidebar";
import Timeline from "~/components/Timeline";
import Typebar from "~/components/Typebar";

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>GameBoard</title>
        <meta name="Messaging Board" content="GameBoard" />
        <link rel="icon" href="/games.ico" />
      </Head>
      <main className=" scrollbar-hide flex h-screen w-full flex-row overflow-hidden ">
        {/* <Sidebar />
        <div className="mx-2 min-h-0 flex-auto justify-center">
          <Typebar />
          <div className="mx-2 flex-auto justify-center self-center">
            <Timeline />
          </div>
        </div> */}
        profile
      </main>
    </>
  );
}
