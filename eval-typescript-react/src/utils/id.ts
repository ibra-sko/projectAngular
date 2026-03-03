import z from "zod";

export const positiveIntIdSchema = z.coerce.number().int().positive();
