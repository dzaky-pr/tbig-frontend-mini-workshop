import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email must be filled" })
    .email("Email format is invalid"),
  password: z
    .string({ required_error: "Password must be filled" })
    .min(8, "Password must have atleast 8 character"),
});
