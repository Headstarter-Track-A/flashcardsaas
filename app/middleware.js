import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Configure your authentication options here
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};