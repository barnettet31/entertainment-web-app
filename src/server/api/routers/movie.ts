/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Movie } from "@prisma/client";
import { createTRPCRouter,  protectedProcedure } from "../trpc";

export const movieRouter = createTRPCRouter({
  getTrendingMovies: protectedProcedure.query(async ({ ctx }) => {
    try {
        const myData = await ctx.prisma.movie.findMany({
          where:{
            isTrending:true
          }
        });
      return myData;
    } catch (error) {
      console.log("error", error);
    }
  }),
  getNonTrendingMovies: protectedProcedure.query(async({ctx})=>{
    try
    {
      const myData = await ctx.prisma.movie.findMany({
        where: {
          isTrending: false
        }
      });
      return myData;
    } catch (error)
    {
      console.log("error", error);
    }
  })
});
