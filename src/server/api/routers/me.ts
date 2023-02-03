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
});
