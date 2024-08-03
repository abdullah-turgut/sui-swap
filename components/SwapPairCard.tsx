import React, { useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import SelectToken from "./SelectToken";
import PairSelect from "./PairSelect";
import { UseFormReturn, useWatch } from "react-hook-form";
import { FormSchemaType, TokenSchemaType } from "@/schema/formSchema";
import { X } from "lucide-react";
import { getPrices } from "@/utils/getPrice";

export default function SwapPairCard({
  token,
  type,
  form,
  tokenList,
}: {
  token: TokenSchemaType;
  type: "Sell" | "Buy";
  form: UseFormReturn<FormSchemaType>;
  tokenList: TokenSchemaType[];
}) {
  const selectedToken = useWatch({
    control: form.control,
    name: type === "Sell" ? "sell_token" : "buy_token",
  });

  const swapAmount = useWatch({
    control: form.control,
    name: "swap_amount",
  });

  useEffect(() => {
    if (selectedToken?.extensions?.coingeckoId) {
      getPrices([selectedToken.extensions.coingeckoId]).then((data) => {
        form.setValue(
          type === "Sell" ? "sell_token.price" : "buy_token.price",
          data![0].current_price
        );
      });
    }
  }, [selectedToken, form, type]);

  const sellAmount = (form.watch("sell_token").amount || 0) * (swapAmount || 0);
  const buyAmount =
    (sellAmount * form.watch("sell_token").price!) / token.price!;

  return (
    <div className="w-full p-4 rounded-lg flex justify-between items-center bg-patara_gray_75 h-[120px] border border-patara_gray_50 hover:border-patara_blue transition">
      <Dialog>
        <DialogTrigger>
          <PairSelect
            token={
              type === "Sell"
                ? form.watch("sell_token")
                : form.watch("buy_token")
            }
            tokenList={tokenList}
          />
        </DialogTrigger>
        <DialogContent className="w-[480px] py-4 px-0">
          <DialogClose
            className="absolute top-4 right-4 flex items-center justify-center cursor-pointer"
            asChild
          >
            <X className="h-6 w-6" />
          </DialogClose>
          <DialogTitle hidden aria-describedby="SelectToken"></DialogTitle>
          <DialogDescription
            hidden
            aria-describedby="SelectToken"
          ></DialogDescription>
          <SelectToken type={type} tokenList={tokenList} form={form} />
        </DialogContent>
      </Dialog>
      <div className="flex flex-col gap-y-[10px] items-end">
        <p className="text-sm text-patara_gray_600 font-medium">{type}</p>
        {type === "Sell" && (
          <p className="text-2xl text-patara_black font-medium">
            {sellAmount.toFixed(2)}
          </p>
        )}
        {type === "Buy" && (
          <p className="text-2xl text-patara_black font-medium">
            {buyAmount.toFixed(2)}
          </p>
        )}
        <p className="text-sm text-patara_black font-medium">
          ${token.price ? token.price.toFixed(token.decimals) : "Loading..."}
        </p>
      </div>
    </div>
  );
}
