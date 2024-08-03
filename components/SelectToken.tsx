import React from "react";
import TokenSearch from "./TokenSearch";
import RecentTokens from "./RecentTokens";
import SelectTokenList from "./SelectTokenList";
import { UseFormReturn } from "react-hook-form";
import { FormSchemaType, TokenSchemaType } from "@/schema/formSchema";

export default function SelectToken({
  type,
  tokenList,
  form,
}: {
  type: "Sell" | "Buy";
  tokenList: TokenSchemaType[];
  form: UseFormReturn<FormSchemaType>;
}) {
  return (
    <div className="flex flex-col">
      <h2 className="mx-auto text-patara_black text-lg font-semibold h-10 flex items-center justify-center mb-5">
        Select Token
      </h2>
      <div className="flex flex-col gap-y-4 border-b border-patara_gray_100 pb-4">
        <TokenSearch tokenList={tokenList} form={form} type={type} />
        <RecentTokens form={form} type={type} />
      </div>
      <SelectTokenList form={form} type={type} />
    </div>
  );
}
