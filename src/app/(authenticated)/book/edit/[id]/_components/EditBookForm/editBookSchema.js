import { z } from "zod";

export const editBookSchema = z.object({
  title: z
    .string({ required_error: "Title is mandatory" })
    .min(1, "Title is mandatory"),
  sysnopsis: z
    .string({ required_error: "Synopsis is mandatory" })
    .min(1, "Synopsis is mandatory"),
  author: z
    .string({ required_error: "Author is mandatory" })
    .min(1, "Author is mandatory"),
});
