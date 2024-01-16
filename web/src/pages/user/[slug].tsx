import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { GetStaticProps, NextPage } from "next/types";
import Sidebar from "~/components/Sidebar";
import Timeline from "~/components/Timeline";
import Typebar from "~/components/Typebar";
import { Spinner } from "~/components/assets/Spinner";
import { generateSSGHelper } from "~/server/comps/ssgHelper";
import { api } from "~/utils/api";

const ProfilePage: NextPage<{ username: string }> = ({ username }) => {
  const { data, isLoading } = api.profile.getUserByUsername.useQuery({
    username,
  });
  if (isLoading) {
    <Spinner></Spinner>;
  }
  if (!data)
    return (
      <main className=" scrollbar-hide flex h-screen w-full flex-row overflow-hidden ">
        <Sidebar />
        <Link href="/" replace>
          <div className="max-w-screen mx-24 my-12 flex max-h-screen flex-col place-content-center content-around self-center rounded-md border-4 border-black bg-white p-12 backdrop-blur-3xl">
            <Image
              src="/question.png"
              alt="not found"
              className="h-20 w-20 grow self-center rounded-full"
              width={80}
              height={80}
            />
            <div className="self-center text-5xl font-bold">
              404! User not found!
            </div>
          </div>
        </Link>
      </main>
    );

  return (
    <>
      <Head>
        <title>@{data.username}</title>
      </Head>
      <main className=" scrollbar-hide flex h-screen w-full flex-row overflow-hidden ">
        <Sidebar />
        <div className="mx-2 flex-auto justify-center self-center">
          <div className="max-w-screen mx-24 my-12 flex max-h-screen flex-col place-content-center content-around self-center rounded-md border-4 border-black bg-slate-100 px-2 pt-6 backdrop-blur-3xl">
            <Image
              src={data.imageUrl}
              alt="not found"
              className="h-20 w-20 grow self-center rounded-full"
              width={80}
              height={80}
            />
            <div className="self-center pb-2 text-5xl font-bold ">
              @{data.username}
            </div>
            <Timeline />
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const slug = context.params?.slug;

  if (typeof slug !== "string") throw new Error("no slug");

  const username = slug.replace("@", "");

  await ssg.profile.getUserByUsername.prefetch({ username });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      username,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default ProfilePage;
