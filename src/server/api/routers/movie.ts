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
  }),
  getMovies: protectedProcedure.query(async ({ ctx }) =>
  {
    try
    {
      const myData = await ctx.prisma.movie.findMany({
        where: {
          category: "Movie"
        }
      });
      return myData;
    } catch (error)
    {
      console.log("error", error);
    }
  }),
  getShows: protectedProcedure.query(async ({ ctx }) =>
  {
    try
    {
      const myData = await ctx.prisma.movie.findMany({
        where: {
          category: "TV Series"
        }
      });
      return myData;
    } catch (error)
    {
      console.log("error", error);
    }
  })
});
