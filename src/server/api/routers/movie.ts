import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const movieRouter = createTRPCRouter({
    postMessage: publicProcedure
        .input(
            z.object({
                title: z.string(),
                thumbnail: z.array(z.string()),
                year: z.number(),
                category: z.string(),
                rating: z.string(),
                isTrending: z.boolean(),
            })
        )
        .mutation(async ({ ctx, input }) =>
        {
            try
            {
                await ctx.prisma.movie.create({
                    data: {
                        title: input.title,
                        thumbnails: input.thumbnail,
                        year: input.year,
                        category: input.category,
                        rating: input.rating,
                        isTrending: input.isTrending,
                    },
                })
            } catch (error)
            {
                console.log(error);
            }
        }),
});