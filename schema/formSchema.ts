import { z } from "zod";

export const formSchema = () => {
  return z.object({
    sell_token: z.string(),
    buy_token: z.string(),
    search_token: z.string(),
  });
};

export type FormSchemaType = z.infer<ReturnType<typeof formSchema>>;
