import { UserButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { GetStaticProps, NextPage } from "next/types";
import Sidebar from "~/components/Sidebar";
import { Spinner } from "~/components/assets/Spinner";
import { UserTimeline } from "~/components/assets/UserTimeline";
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

  const ProfileFeed = (props: { userId: string }) => {
    const { data, isLoading } = api.post.getPostByUserId.useQuery({
      userId: props.userId,
    });

    if (isLoading) return <Spinner />;

    if (!data || data.length === 0) return <div>no posts</div>;

    return (
      <div className="flex flex-col">
        <UserTimeline userId={props.userId} />
      </div>
    );
  };

  const { user } = useUser();
  console.log(user?.organizationMemberships[0]?.role);

  return (
    <>
      <Head>
        <title>@{data.username}</title>
      </Head>
      <main className=" scrollbar-hide flex h-screen w-full flex-row overflow-hidden ">
        <Sidebar />
        <div className="mx-2 flex-auto justify-center self-center">
          <div className="max-w-screen m-24 flex max-h-screen flex-col place-content-center content-around self-center rounded-md border-4 border-black bg-slate-100 px-2 pt-48 backdrop-blur-3xl">
            <Image
              src={data.imageUrl}
              alt="Profile Picture"
              className="h-20 w-20 grow self-center rounded-full "
              width={80}
              height={80}
            />
            {user?.username == data.username ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div> </div>
            )}
            <div className="self-center pb-2 text-5xl font-bold ">
              @{data.username}
            </div>

            <ProfileFeed userId={data.id} />
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
