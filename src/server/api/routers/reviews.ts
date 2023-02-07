import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const reviewRouters = createTRPCRouter({
    getAverageReviews: protectedProcedure.input(z.object({
        movieId: z.string(),
    })).query(async ({ ctx, input }) =>
    {
        try
        {
            const myData = await ctx.prisma.review.findMany({
                where: {
                    id: input.movieId
                },
                select:{
                    rating: true,
                }
            });
            const myAverage = myData.reduce((a, b) => a + b.rating, 0) / myData.length;
            
            return isNaN(myAverage) ? 0 : Math.floor(myAverage);
        } catch (error)
        {
            console.log("error", error);
        }
    }),
    createReview: protectedProcedure.input(z.object({
        movieId: z.string(),
        rating: z.number(),
        comment: z.string(),

    })).mutation(async ({ ctx, input }) =>{
        try
        {
            const myData = await ctx.prisma.review.create({
                data: {
                    movieId: input.movieId,
                    rating: input.rating,
                    comment: input.comment,
                    userId: ctx.session.user.id,
                }
            });
            return myData;
        } catch (error)
        {
            console.log("error", error);
        }
    }),
    updateReview: protectedProcedure.input(z.object({
        id: z.string(),
        rating: z.number(),
        comment: z.string(),
        
    })).mutation(async ({ ctx, input }) => {
        try{
            const myData = await ctx.prisma.review.update({
                where: {
                    id: input.id,
                },
                data: {
                    rating: input.rating,
                    comment: input.comment,
                }
            });
            return myData;
        }catch(e){
            console.log("error", e);
        }
    })
});
