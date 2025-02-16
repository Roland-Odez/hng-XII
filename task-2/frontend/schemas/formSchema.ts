import { z } from "zod";

export const formSchemaOne = z.object({
  ticketType: z.enum(["free", "vip", "vvip"]).refine((val) => ["free", "vip", "vvip"].includes(val), {message: "Invalid ticket type"}),
  numberOfTicket: z.number().int().positive(),
});

export const formSchemaTwo = z.object({
  imageUrl: z.string().min(8, {message: "image is required"}).regex(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i, {message: "Invalid image format"}),
  email: z.string().email(),
  username: z.string().min(3, {message: "username is required"}),
  request: z.string().min(3, {message: "make a special request"}),
});
