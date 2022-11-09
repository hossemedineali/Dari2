import { router } from "../trpc";
import { adduser } from "./adduser";
import { authRouter } from "./auth";
import { verifyEmail } from "./auth/verifyemail";

export const appRouter = router({
  auth: authRouter,
  adduser:adduser,
  verfy:verifyEmail
});

// export type definition of API
export type AppRouter = typeof appRouter;
