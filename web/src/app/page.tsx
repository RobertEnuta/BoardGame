import Image from "next/image";
import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";
import Timeline from "~/components/Timeline";

export default function HomePage() {
  return (
    <main className="flex h-fit w-full place-items-stretch justify-between">
      <Sidebar />
      <div className=" w-full justify-center md:max-w-2xl">
        <Navbar />
        <div className="flex h-screen justify-center">
          {/* <div key={post.id}>Post</div> */}
          <Timeline />
        </div>
      </div>
      <div></div>
    </main>
  );
}
