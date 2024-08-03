import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import SelectToken from "./SelectToken";
import PairSelect from "./PairSelect";
import { UseFormReturn } from "react-hook-form";
import { FormSchemaType, TokenSchemaType } from "@/schema/formSchema";
import { X } from "lucide-react";

export default function SwapPairCard({
  token,
  type,
  form,
  tokenList,
}: {
  token: string;
  type: "Sell" | "Buy";
  form: UseFormReturn<FormSchemaType>;
  tokenList: TokenSchemaType[];
}) {
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
        <p className="text-2xl text-patara_black font-medium">12321312</p>
        <p className="text-sm text-patara_black font-medium">$1.08213</p>
      </div>
    </div>
  );
}
