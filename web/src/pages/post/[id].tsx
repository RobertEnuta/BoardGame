import Head from "next/head";
import Link from "next/link";
import Sidebar from "~/components/Sidebar";
import Image from "next/image";
import { GetStaticProps, NextPage } from "next";
import { api } from "~/utils/api";
import Post from "~/components/Post";
import { generateSSGHelper } from "~/server/comps/ssgHelper";
import { Spinner } from "~/components/assets/Spinner";

const PostPage: NextPage<{ postId: string }> = ({ postId }) => {
  postId = postId.slice(0, postId.length - 1);
  const { data, isLoading } = api.post.getById.useQuery({
    postId,
  });
  if (isLoading) {
    return <Spinner />;
  }
  if (!data)
    return (
      <Link href="/" replace>
        <div className="max-w-screen mx-24 my-12 flex max-h-screen flex-col place-content-center content-around self-center rounded-md border-4 border-black bg-white p-12 ">
          <div className="self-center text-5xl font-bold">
            404! Post Unavailable!
          </div>
        </div>
      </Link>
    );

  return (
    <>
      <Head>
        <title>{`@${data.user.username}'s post`}</title>
      </Head>
      <Post {...data} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const postId = context.params?.id;

  if (typeof postId !== "string") throw new Error("no id");

  await ssg.post.getById.prefetch({ postId });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      postId,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default PostPage;
