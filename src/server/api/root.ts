import { createTRPCRouter } from "./trpc";
import { movieRouter } from "./routers/movie";
import { meRouter } from "./routers/me";
import { reviewRouters } from "./routers/reviews";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  movies:movieRouter,
  me:meRouter,
  reviews:reviewRouters
});


// export type definition of API
export type AppRouter = typeof appRouter;
