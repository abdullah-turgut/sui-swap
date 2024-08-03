import React, { useEffect } from "react";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";
import { FormSchemaType, TokenSchemaType } from "@/schema/formSchema";
import { UseFormReturn, useWatch } from "react-hook-form";
import { CoinGeckoTokenData, getPrices } from "@/utils/getPrice";
import { Skeleton } from "./ui/skeleton";

export default function SelectTokenList({
  type,
  form,
}: {
  type: "Sell" | "Buy";
  form: UseFormReturn<FormSchemaType>;
}) {
  const name = type === "Sell" ? "sell_token" : "buy_token";
  const balances = useWatch({
    control: form.control,
    name: "user.balances",
  });

  useEffect(() => {
    const fetchPrices = async () => {
      const ids = balances.map(
        (token: TokenSchemaType) => token.extensions!.coingeckoId!
      );

      if (ids.length > 0) {
        try {
          const prices = await getPrices(ids);

          balances.forEach((b: TokenSchemaType) => {
            b.price = prices?.filter(
              (p: CoinGeckoTokenData) => b.extensions?.coingeckoId === p.id
            )[0].current_price;
          });

          form.setValue("user.balances", balances);
        } catch (error) {
          console.error("Failed to fetch prices", error);
        }
      }
    };

    fetchPrices();
  }, [form.formState.dirtyFields]);

  return (
    <div className="pt-4 flex flex-col gap-y-4">
      <div className="px-9 flex items-center justify-between text-patara_gray_600 h-6">
        <p>Token</p>
        <p>Balance</p>
      </div>
      <ScrollArea className="h-[405px]">
        <div className="px-4 flex flex-col gap-y-1">
          {balances.map((token: TokenSchemaType) => (
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
                <p className="text-sm font-medium">{token.amount}</p>
                {token.price ? (
                  <p className="text-xs">
                    ${(token.amount! * token.price).toFixed(2)}
                  </p>
                ) : (
                  <Skeleton className="h-3 w-[75px] rounded-lg" />
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
