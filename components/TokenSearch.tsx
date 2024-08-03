import React from "react";
import { UseFormReturn } from "react-hook-form";
import Image from "next/image";
import { FormSchemaType, TokenSchemaType } from "@/schema/formSchema";

import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Search } from "lucide-react";

export default function TokenSearch({
  form,
  tokenList,
  type,
}: {
  form: UseFormReturn<FormSchemaType>;
  tokenList: TokenSchemaType[];
  type: "Sell" | "Buy";
}) {
  const { watch, setValue } = form;
  const field = type === "Sell" ? "sell_token" : "buy_token";
  return (
    <div className="px-4 flex gap-x-2 h-12">
      <div className="flex-1 relative">
        <Search className="absolute top-1/2 left-2 -translate-y-1/2 opacity-50" />
        <Input
          onChange={(e) => setValue("search_token", e.currentTarget.value)}
          className="w-full focus-visible:ring-transparent rounded-full h-full pl-10"
          placeholder="Search name or address"
        />
        {watch("search_token") && (
          <ScrollArea className="absolute -bottom-2 left-0 w-full h-[240px] z-50 bg-white rounded-lg border border-patara_gray_100">
            <div className="flex flex-col gap-y-2 p-1">
              {tokenList
                .filter((t: TokenSchemaType) =>
                  t.name
                    .toLowerCase()
                    .includes(watch("search_token").toLowerCase())
                )
                .map((t: TokenSchemaType) => (
                  <div
                    key={t.address}
                    className="flex h-12 gap-x-2 items-center hover:bg-patara_gray_50 transition rounded-lg px-2 cursor-pointer"
                    onClick={() => {
                      setValue(field, t);
                      setValue("search_token", "");
                    }}
                  >
                    <Image
                      src={t.logoURI}
                      width={32}
                      height={32}
                      alt={watch(field).name}
                      className="rounded-full"
                      onError={(e) =>
                        (e.currentTarget.srcset =
                          "https://raw.githubusercontent.com/sonarwatch/token-lists/main/images/common/SUI.png")
                      }
                    />
                    <p className="truncate select-none">{t.name}</p>
                  </div>
                ))}
              {tokenList.filter((t: TokenSchemaType) =>
                t.name
                  .toLowerCase()
                  .includes(watch("search_token").toLowerCase())
              ).length === 0 && <p className="p-2 mx-auto">No result found!</p>}
            </div>
          </ScrollArea>
        )}
      </div>
      <Select
        value={watch(field).symbol}
        onValueChange={(value) => {
          const token = tokenList.find((t) => t.symbol === value);
          setValue(field, token!);
        }}
      >
        <SelectTrigger className="w-20 h-12 rounded-[50px] bg-patara_gray_75 px-2">
          <Image
            src={
              tokenList.filter(
                (t: TokenSchemaType) => t.symbol === watch(field).symbol
              )[0]!.logoURI
            }
            width={32}
            height={32}
            alt={watch(field).name}
            className="rounded-full"
            onError={(e) =>
              (e.currentTarget.srcset =
                "https://raw.githubusercontent.com/sonarwatch/token-lists/main/images/common/SUI.png")
            }
          />
        </SelectTrigger>
        <SelectContent className="gap-y-1">
          {tokenList.map((token: TokenSchemaType) => (
            <SelectItem
              key={token.address}
              value={token.symbol}
              className="flex flex-row h-10"
            >
              <div className="flex items-center gap-x-2">
                <Image
                  src={token.logoURI}
                  width={24}
                  height={24}
                  alt={token.name}
                  className="rounded-full"
                  onError={(e) =>
                    (e.currentTarget.srcset =
                      "https://raw.githubusercontent.com/sonarwatch/token-lists/main/images/common/SUI.png")
                  }
                />
                <p>{token.symbol}</p>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
