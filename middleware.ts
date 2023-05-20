import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/(api|trpc)(.*)", "/docs(.*)"],
});

export const config = {
  matcher: ["/((?!\\/docs\\/).*)", "/", "/dashboard/:path*", "/((?!docs.*)),"],
};
