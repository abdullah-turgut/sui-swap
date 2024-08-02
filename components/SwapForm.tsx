"use client";

import { z } from "zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ITokenListResponse } from "@/utils/getTokenList";

import { ArrowDown } from "lucide-react";
import SwapPairCard from "./SwapPairCard";
import { Button } from "./ui/button";
import GeneralSettings from "./GeneralSettings";
import { formSchema, FormSchemaType } from "@/schema/formSchema";

export default function SwapForm({
  tokenList,
}: {
  tokenList: ITokenListResponse[];
}) {
  const form: UseFormReturn<FormSchemaType> = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema()),
    defaultValues: {
      sell_token: "SUI",
      buy_token: "USDT",
      search_token: "",
    },
  });

  console.log(form.getValues());
  return (
    <form className="relative">
      <div className="absolute top-0 -right-2 translate-x-full flex flex-col gap-y-2">
        <GeneralSettings />
      </div>
      <div className="w-[480px] p-4 flex flex-col gap-y-2 bg-patara_gray_50 rounded-xl text-patara_black">
        <div className="flex items-center justify-between h-8 mb-2">
          <p className="font-medium text-sm">Balance: 21312312312 SUI</p>
          <div className="flex gap-x-2">
            <Button type="button" variant="rate" size="rate">
              25%
            </Button>
            <Button type="button" variant="rate" size="rate">
              50%
            </Button>
            <Button type="button" variant="rate" size="rate">
              75%
            </Button>
            <Button type="button" variant="rate" size="rate">
              MAX
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 relative">
          <SwapPairCard
            token="test"
            type="Sell"
            tokenList={tokenList}
            form={form}
          />
          <SwapPairCard
            token="test"
            type="Buy"
            tokenList={tokenList}
            form={form}
          />
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-[3px] border-patara_gray_50 bg-patara_gray_100 flex items-center justify-center">
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>
        <Button>Swap</Button>
      </div>
    </form>
  );
}
