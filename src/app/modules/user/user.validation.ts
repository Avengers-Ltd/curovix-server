import { z } from "zod";

const createUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string({ message: "Please enter a valid phone number." }),
  }),
});

const updateUserSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string({ message: "Please enter a valid phone number." }),
  }),
});

export const userValidation = {
  createUserSchema,
  updateUserSchema,
};
