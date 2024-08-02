import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import SelectToken from "./SelectToken";
import PairSelect from "./PairSelect";

export default function SwapPairCard({
  token,
  type,
}: {
  token: string;
  type: "Sell" | "Buy";
}) {
  return (
    <div className="w-full p-4 rounded-lg flex justify-between items-center bg-patara_gray_75 h-[120px] border border-patara_gray_50 hover:border-patara_blue transition">
      <Dialog>
        <DialogTrigger>
          <PairSelect token="test" />
        </DialogTrigger>
        <DialogContent className="w-[480px] py-4 px-0">
          <SelectToken type={type} />
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
