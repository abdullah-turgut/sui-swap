import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";
import { FormSchemaType, TokenSchemaType } from "@/schema/formSchema";
import { UseFormReturn } from "react-hook-form";

export default function SelectTokenList({
  type,
  form,
}: {
  type: "Sell" | "Buy";
  form: UseFormReturn<FormSchemaType>;
}) {
  const name = type === "Sell" ? "sell_token" : "buy_token";
  return (
    <div className="pt-4 flex flex-col gap-y-4">
      <div className="px-9 flex items-center justify-between text-patara_gray_600 h-6">
        <p>Token</p>
        <p>Balance</p>
      </div>
      <ScrollArea className="h-[405px]">
        <div className="px-4 flex flex-col gap-y-1">
          {form.watch("user.balances").map((token: TokenSchemaType) => (
            <div
              key={token.address}
              className="w-full h-16 flex items-center justify-between px-5 py-3 bg-patara_gray_75 hover:bg-patara_gray_100 transition rounded-lg cursor-pointer"
              onClick={() => form.setValue(name, token)}
            >
              <div className="flex items-center gap-x-2">
                <Image
                  src={token.logoURI}
                  width={40}
                  height={40}
                  alt={token.name}
                  className="rounded-full"
                  onError={(e) =>
                    (e.currentTarget.srcset =
                      "https://raw.githubusercontent.com/sonarwatch/token-lists/main/images/common/SUI.png")
                  }
                />
                <div className="flex flex-col">
                  <p className="text-sm font-medium">{token.symbol}</p>
                  <p className="text-xs">{token.name}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm font-medium">789</p>
                <p className="text-xs">$567</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
