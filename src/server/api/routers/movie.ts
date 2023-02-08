import { z } from "zod";
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
  }),
  getBookMarked: protectedProcedure.query(async ({ ctx }) =>{
    try
    {
      const myData = await ctx.prisma.user.findUnique({
        where: {
          id: ctx.session.user.id
        },
        select: {
          bookmarks: true

        }
      });
      const bookMarkedMovieIds = myData ? myData.bookmarks.map((item) => item.movieId) : [];
      const bookMarkedMovies = await ctx.prisma.movie.findMany({
        where: {
          id: {
            in: bookMarkedMovieIds
          }
        }
      });
      return bookMarkedMovieIds;
    } catch (error)
    {
      console.log("error", error);
    }
  }),
  getAllMovies: protectedProcedure.query(async ({ ctx }) =>{
    try
    {
      const myData = await ctx.prisma.movie.findMany();
      return myData;
    } catch (error)
    {
      console.log("error", error);
    }
  }),
  getContentById: protectedProcedure.input(
    z.object({id:z.string()})
  ).query(async ({ ctx, input }) =>{
    try
    {
      const myData = await ctx.prisma.movie.findUnique({
        where: {
          id: input.id
        }
      });
      const myDataWithAverage = {...myData};
      return myDataWithAverage;
    } catch (error)
    {
      console.log("error", error);
    }
  })
});
