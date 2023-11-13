import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1),
  contact: z.string().min(1),
  textArea: z.string().min(1),
});

export type User = z.infer<typeof contactFormSchema>;
