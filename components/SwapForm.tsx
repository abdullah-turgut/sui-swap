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

export default function SwapForm({
  tokenList,
}: {
  tokenList: TokenSchemaType[];
}) {
  const form: UseFormReturn<FormSchemaType> = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema()),
    defaultValues: {
      sell_token: userData.balances[0],
      buy_token: userData.balances[1],
      swap_amount: 0,
      user: userData,
    },
  });

  function onSubmit(values: FormSchemaType) {
    console.log(values);
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
        <Button type="submit">Swap</Button>
      </div>
    </form>
  );
}
