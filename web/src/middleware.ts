import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: ["/", "/api/trpc/post.getAllPosts"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
