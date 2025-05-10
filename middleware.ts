// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: ['/api/:path']
// });

// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up", "/api/public", "/api/:path*"], // adjust to your app,
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // exclude static files like .ico, .png, etc.
    "/",                          // include homepage
    "/(api|trpc)(.*)",            // include API and tRPC routes
  ],
};
