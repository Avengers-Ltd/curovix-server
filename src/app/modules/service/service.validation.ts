import { z } from "zod";

const createServiceSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required.",
    }),
    image: z.string({
      required_error: "SVG/Image is required.",
    }),
    description: z.string({
      required_error: "Description is required.",
    }),
  }),
});

const updateServiceSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const ServiceValidation = {
  createServiceSchema,
  updateServiceSchema,
};
