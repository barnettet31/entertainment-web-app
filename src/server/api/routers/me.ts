import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const meRouter = createTRPCRouter({
    getProfileData: protectedProcedure.query(async ({ ctx }) =>
    {
        try
        {
            const myData = await ctx.prisma.user.findUnique({
                where:{
                    id:ctx.session.user.id
                },
                select:{
                    name:true,
                    image:true,

                }
            })
            return myData;
        } catch (error)
        {
            console.log("error", error);
        }
    }),
    isBookMarked: protectedProcedure.input(z.object({id:z.string()})).query(async ({ ctx, input }) =>{
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
            const isBookmarked = myData ? myData.bookmarks.some((item) => item.movieId === input.id) :false;
            return isBookmarked;
        } catch (error)
        {
            console.log("error", error);
        }
    }), 
    setNewBookMark: protectedProcedure.input(z.object({ movieId: z.string(), title:z.string() })).mutation(async ({ ctx, input }) =>{
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
            const newBookMark = await ctx.prisma.bookmark.create({
                data: {
                    movieId: input.movieId,
                    userId: ctx.session.user.id,
                    movieTitle: input.title,
                }
            });
            const alreadyBookmarked = myData ? myData.bookmarks.some((item) => item.movieId === input.movieId) : false;
            if (alreadyBookmarked) return;
            const updatedBookMarks = myData ? [...myData.bookmarks, newBookMark] : [newBookMark];
            const data = await ctx.prisma.user.update({
                where: {
                    id: ctx.session.user.id
                },
                data:{
                    bookmarks: {
                        set: updatedBookMarks
                    }
                }
            }); 
            console.log(data);


        } catch (error)
        {
            console.log("error", error);
        }
    }),
    removeBookMark: protectedProcedure.input(z.object({ movieId: z.string() })).mutation(async ({ ctx, input }) =>{
        try{
            const user = await ctx.prisma.user.findUnique({
                where:{id:ctx.session.user.id
                }, 
                select:{
                    bookmarks:true
                }
            });
            const bookMarkToDelete = user?.bookmarks.find((item) => item.movieId === input.movieId);
            const updatedBookMarks = user ? user.bookmarks.filter((item) => item.movieId !== input.movieId) : [];

            const deletedBookMark = await ctx.prisma.bookmark.delete({
                where:{
                    id:bookMarkToDelete?.id
                }
            });
            await ctx.prisma.user.update({
                where: {
                    id: ctx.session.user.id
                },
                data: {
                    bookmarks: {
                        set: updatedBookMarks
                    }
                }
            })
        }catch(e){
            console.log("error", e);
        }
    }),
    getBookMarkedMovies: protectedProcedure.query(async ({ ctx }) =>{
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
            return bookMarkedMovies;
        } catch (error)
        {
            console.log("error", error);
        }
    })
});
