"use client";

import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ArrowDown } from "lucide-react";
import SwapPairCard from "./SwapPairCard";
import { Button } from "./ui/button";
import GeneralSettings from "./GeneralSettings";
import {
  formSchema,
  FormSchemaType,
  SettingsSchemaType,
  TokenSchemaType,
} from "@/schema/formSchema";
import { userData } from "@/mocks/user";
import { useToast } from "./ui/use-toast";
import { getPrices } from "@/utils/getPrice";

export default function SwapForm({
  tokenList,
}: {
  tokenList: TokenSchemaType[];
}) {
  const { toast } = useToast();
  const form: UseFormReturn<FormSchemaType> = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema()),
    defaultValues: {
      sell_token: userData.balances[0],
      buy_token: userData.balances[1],
      swap_amount: 0,
      user: userData,
    },
  });

  async function onSubmit(values: FormSchemaType) {
    try {
      if (values.sell_token.amount === 0 || values.swap_amount === 0) {
        throw new Error("You can't sell any token without having balance!");
      }

      if (!values.user.settings.direct_route) {
        throw new Error("There is only direct swap between those token pairs!");
      }

      const initialPrice = values.sell_token.price!;
      const newPrice = await getPrices([
        values.sell_token.extensions?.coingeckoId!,
      ]);

      if (newPrice!.length === 0) {
        throw new Error("Failed to fetch prices for the selected token!");
      }
      const lastPrice = newPrice![0]?.current_price;

      const priceDifference =
        Math.abs((lastPrice - initialPrice) / initialPrice) * 100;

      if (priceDifference > values.user.settings.slippage_rate) {
        throw new Error(
          `The price difference is too high, exceeding slippage rate of ${values.user.settings.slippage_rate}%. Your swap process has been cancelled!`
        );
      }

      const sellAmount =
        values.sell_token.amount! * values.swap_amount * lastPrice;

      const buyAmount = sellAmount / values.buy_token.price!;

      const updatedBalances = [...values.user.balances];
      const sellTokenIndex = updatedBalances.findIndex(
        (token) => token.address === values.sell_token.address
      );

      if (sellTokenIndex !== -1) {
        if (
          updatedBalances[sellTokenIndex].amount! * (1 - values.swap_amount) ===
          0
        ) {
          updatedBalances.splice(sellTokenIndex, 1);
        } else {
          updatedBalances[sellTokenIndex] = {
            ...updatedBalances[sellTokenIndex],
            amount:
              updatedBalances[sellTokenIndex].amount! *
              (1 - values.swap_amount),
          };
        }
      }

      const buyTokenIndex = updatedBalances.findIndex(
        (token) => token.address === values.buy_token.address
      );

      if (buyTokenIndex !== -1) {
        updatedBalances[buyTokenIndex] = {
          ...updatedBalances[buyTokenIndex],
          amount: updatedBalances[buyTokenIndex].amount! + buyAmount,
        };
      } else {
        updatedBalances.push({
          ...values.buy_token,
          amount: buyAmount,
        });
      }

      form.setValue("user.balances", updatedBalances);
      form.setValue(
        "sell_token.amount",
        values.sell_token.amount! * (1 - values.swap_amount)
      );
      form.setValue("buy_token.amount", buyAmount);
      form.setValue("swap_amount", 0);

      toast({
        variant: "default",
        description: `Successfully swapped ${
          values.sell_token.amount! * values.swap_amount
        } ${values.sell_token.symbol} for ${buyAmount} ${
          values.buy_token.symbol
        }!`,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";

      toast({
        variant: "destructive",
        description: errorMessage,
      });
    }
  }

  return (
    <form className="relative" onSubmit={form.handleSubmit(onSubmit)}>
      <div className="absolute top-0 -right-2 translate-x-full flex flex-col gap-y-2">
        <GeneralSettings form={form} />
      </div>
      <div className="w-[480px] p-4 flex flex-col gap-y-2 bg-patara_gray_50 rounded-xl text-patara_black">
        <div className="flex items-center justify-between h-8 mb-2">
          <p className="font-medium text-sm">
            Balance:{" "}
            {form.watch("sell_token").amount
              ? form.watch("sell_token").amount
              : 0}{" "}
            {form.watch("sell_token").symbol}
          </p>
          <div className="flex gap-x-2">
            <Button
              type="button"
              variant="rate"
              size="rate"
              onClick={() => form.setValue("swap_amount", 0.25)}
            >
              25%
            </Button>
            <Button
              type="button"
              variant="rate"
              size="rate"
              onClick={() => form.setValue("swap_amount", 0.5)}
            >
              50%
            </Button>
            <Button
              type="button"
              variant="rate"
              size="rate"
              onClick={() => form.setValue("swap_amount", 0.75)}
            >
              75%
            </Button>
            <Button
              type="button"
              variant="rate"
              size="rate"
              onClick={() => form.setValue("swap_amount", 1)}
            >
              MAX
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 relative">
          <SwapPairCard
            token={form.watch("sell_token")}
            type="Sell"
            tokenList={tokenList}
            form={form}
          />
          <SwapPairCard
            token={form.watch("buy_token")}
            type="Buy"
            tokenList={tokenList}
            form={form}
          />
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-[3px] border-patara_gray_50 bg-patara_gray_100 flex items-center justify-center">
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="disabled:bg-patara_gray_100"
        >
          Swap
        </Button>
      </div>
    </form>
  );
}
