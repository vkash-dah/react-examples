import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  bio: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  gender: z.string().min(1, "Please select your gender"),
  skills: z.array(z.string()).min(1, "Pick at least one skill"),
  file: z
    .any()
    .refine((file) => file?.length > 0, "File is required"),
  agreed: z.boolean().refine((val) => val === true, "You must accept terms"),
});

export type SignupFormData = z.infer<typeof signupSchema>;