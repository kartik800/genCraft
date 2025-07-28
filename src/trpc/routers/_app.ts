import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      const a = {
        greeting: `hello ${opts.input.text}`,
      };
      return a;
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;