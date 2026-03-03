import z from "zod";

export const postSchema = z.object({
  id: z.number().int().positive(),
  title: z.string(),
  body: z.string(),
  userId: z.number().int().positive(),
});

export const postsSchema = z.array(postSchema);

export type Post = z.infer<typeof postSchema>;
export type Posts = z.infer<typeof postsSchema>;
