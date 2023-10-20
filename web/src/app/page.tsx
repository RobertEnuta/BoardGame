import Image from "next/image";
import Typebar from "~/components/Typebar";
import Sidebar from "~/components/Sidebar";
import Timeline from "~/components/Timeline";

export default function HomePage() {
  return (
    <main className=" flex h-fit w-full flex-row  ">
      <Sidebar />
      <div className="mx-2 flex-1 justify-center">
        <Typebar />
        <Timeline />
      </div>
    </main>
  );
}
