import { clerkClient } from "@clerk/nextjs/server";
import type { User } from "@clerk/nextjs/api";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCClientError } from "@trpc/client";

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    imageUrl: user.imageUrl,
    role: user.gender,
  };
};

export const postRouter = createTRPCRouter({
  getAllPosts: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({ take: 25 });

    const users = (
      await clerkClient.users.getUserList({
        userId: posts.map((post) => post.userId),
        limit: 25,
      })
    ).map(filterUserForClient);

    return posts.map((post) => {
      const user = users.find((user) => user.id === post.userId);

      if (!user) throw new TRPCClientError("No User was found for this post");

      return {
        post,
        user,
      };
    });

    // return posts;
  }),
});
