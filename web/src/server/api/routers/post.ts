import { clerkClient } from "@clerk/nextjs/server";
import { User } from "@clerk/nextjs/api";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const filterUserForClient = (user: User) => {
  return { id: user.id, username: user.username, imageUrl: user.imageUrl };
};

export const postRouter = createTRPCRouter({
  getAllPosts: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({ take: 25 });

    const users = await clerkClient.users.getUserList({
      userId: posts.map((post) => post.userId),
      limit: 25,
    });

    console.log(users);

    return posts;
  }),
});
