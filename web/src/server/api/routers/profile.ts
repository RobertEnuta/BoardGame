import { clerkClient } from "@clerk/nextjs/server";
import type { User } from "@clerk/nextjs/api";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { TRPCClientError } from "@trpc/client";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    imageUrl: user.imageUrl,
  };
};

export const profileRouter = createTRPCRouter({
  getUserByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
      const [user] = await clerkClient.users.getUserList({
        username: [input.username],
      });

      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "User was not found!",
        });
      }

      return filterUserForClient(user);
    }),
  getUserById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const [user] = await clerkClient.users.getUserList({
        userId: [input.id],
      });

      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "User was not found!",
        });
      }

      return filterUserForClient(user);
    }),
  /// >>>> IDK <<<<
  deleteUser: privateProcedure
    .input(
      z.object({
        adminId: z.string(),
        // adminRole: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const admin = await clerkClient.users.getUser(input.adminId);
      // if (input.adminRole !== "org:admin") {
      //   return;
      // }

      const user = await clerkClient.users.deleteUser(input.userId);
      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "User was not found!",
        });
      }
      return filterUserForClient(user);
    }),
});
