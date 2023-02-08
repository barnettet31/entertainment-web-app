import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
    getUser: protectedProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) =>{
        try{
            const user = await ctx.prisma.user.findUnique({
                where:{
                    id:input.id
                }
            });
            
            return user;
        }catch(error){
            console.log("error", error);
        }
    })
});