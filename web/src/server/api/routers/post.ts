import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";
import { TRPCClientError } from "@trpc/client";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { Redis } from "@upstash/redis"; // see below for cloudflare and fastly adapters
import { TRPCError } from "@trpc/server";
import { filterUserForClient } from "~/server/comps/filterUserForClient";
import type { Post } from "@prisma/client";

// Create a new ratelimiter, that allows 3 requests per 1 min
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "1 m"),
  analytics: true,
  /**
   * Optional prefix for the keys used in redis. This is useful if you want to share a redis
   * instance with other applications and want to avoid key collisions. The default prefix is
   * "@upstash/ratelimit"
   */
  prefix: "@upstash/ratelimit",
});

const addUsersToPosts = async (posts: Post[]) => {
  const users = (
    await clerkClient.users.getUserList({
      userId: posts.map((post) => post.userId),
      limit: 25,
    })
  ).map(filterUserForClient);

  return posts.map((post) => {
    const user = users.find((user) => user.id === post.userId);

    if (!user) {
      post.userId = "noSuchUser";
      throw new TRPCClientError("No User was found for this post");
    }

    return {
      post,
      user,
    };
  });
};

export const postRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ postId: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({
        where: { postId: input.postId },
      });

      if (!post)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No post was found!",
        });

      return (await addUsersToPosts([post]))[0];
    }),

  getAllPosts: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      where: { userId: { not: "" } },
      take: 25,
      orderBy: {
        createdAt: "desc",
      },
    });

    const allPosts = addUsersToPosts(posts);
    (await allPosts).filter(
      (obj) => obj.user !== null || obj.post.userId !== "noSuchUser",
    );
    return allPosts;
  }),

  create: privateProcedure
    .input(
      z.object({
        content: z.string().min(1).max(250),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId;

      const { success } = await ratelimit.limit(userId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

      const post = await ctx.db.post.create({
        data: {
          userId,
          body: input.content,
          likes: 0,
        },
      });

      return post;
    }),

  getPostByUserId: privateProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      const posts = await ctx.db.post.findMany({
        where: { userId: input.userId },
        take: 25,
        orderBy: {
          createdAt: "desc",
        },
      });
      return addUsersToPosts(posts);
    }),

  //>>> IDK <<<
  deletePost: privateProcedure
    .input(z.object({ postId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.db.post.delete({
        where: {
          postId: input.postId,
        },
      });
      return post;
    }),

  deletePostsByUserId: privateProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.db.post.deleteMany({
        where: {
          userId: input.userId,
        },
      });
      return post;
    }),
});
