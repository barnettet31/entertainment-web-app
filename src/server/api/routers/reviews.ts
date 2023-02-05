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
            
            return isNaN(myAverage) ? 0 : myAverage;
        } catch (error)
        {
            console.log("error", error);
        }
    }),
});
