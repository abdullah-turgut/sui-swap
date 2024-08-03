import { z } from "zod";

export const tokenSchema = () => {
  return z.object({
    chainId: z.string(),
    address: z.string(),
    decimals: z.number().int(),
    name: z.string(),
    symbol: z.string(),
    logoURI: z.string(),
    tags: z.array(z.string()).optional(),
    extensions: z
      .object({
        coingeckoId: z.string(),
      })
      .optional(),
    amount: z.number().optional(),
    price: z.number().optional(),
  });
};

const settingsSchema = () => {
  return z.object({
    slippage_mode: z.enum(["auto", "fixed"]),
    slippage_rate: z.number(),
    direct_route: z.boolean(),
  });
};

export const userSchema = () => {
  return z.object({
    balances: z.array(tokenSchema()),
    recent: z.array(tokenSchema()),
    settings: settingsSchema(),
  });
};

export const formSchema = () => {
  return z.object({
    sell_token: tokenSchema(),
    buy_token: tokenSchema(),
    search_token: z.string(),
    user: userSchema(),
  });
};

export type FormSchemaType = z.infer<ReturnType<typeof formSchema>>;
export type TokenSchemaType = z.infer<ReturnType<typeof tokenSchema>>;
export type UserSchemaType = z.infer<ReturnType<typeof userSchema>>;
