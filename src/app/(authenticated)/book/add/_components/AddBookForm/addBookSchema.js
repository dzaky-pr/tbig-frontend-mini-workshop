const { z } = require("zod");

export const addBookSchema = z.object({
  title: z
    .string({ required_error: "Title is mandatory" })
    .min(1, "Title is mandatory"),
  description: z
    .string({ required_error: "Description is mandatory" })
    .min(1, "Description is mandatory"),
  author: z
    .string({ required_error: "Author is mandatory" })
    .min(1, "Author is mandatory"),
});
