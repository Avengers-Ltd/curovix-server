import { z } from "zod";

const createWorkSchema = z.object({
  body: z.object({
    image: z.string({
      required_error: "Image is required.",
    }),
    title: z.string({
      required_error: "Title is required.",
    }),
    tags: z.array(z.string()).min(1, {
      message: "At least one tag is required.",
    }),
  }),
});

const updateWorkSchema = z.object({
  body: z.object({
    image: z.string().optional(),
    title: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const WorkValidation = {
  createWorkSchema,
  updateWorkSchema,
};
