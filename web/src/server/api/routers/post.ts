import { clerkClient } from "@clerk/nextjs/server";
import type { User } from "@clerk/nextjs/api";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { TRPCClientError } from "@trpc/client";
import { z } from "zod";

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
    const posts = await ctx.db.post.findMany({
      take: 25,
      orderBy: {
        createdAt: "desc",
      },
    });

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

  create: privateProcedure
    .input(
      z.object({
        content: z.string().min(1).max(250),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId;

      const post = await ctx.db.post.create({
        data: {
          userId,
          body: input.content,
          likes: 0,
        },
      });

      return post;
    }),
});
