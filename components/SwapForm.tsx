"use client";

import { ArrowDown, RotateCw, Settings } from "lucide-react";
import SwapPairCard from "./SwapPairCard";
import { Button } from "./ui/button";
import GeneralSettings from "./GeneralSettings";

export default function SwapForm() {
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
          <SwapPairCard token="test" type="Sell" />
          <SwapPairCard token="test" type="Buy" />
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-[3px] border-patara_gray_50 bg-patara_gray_100 flex items-center justify-center">
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>
        <Button>Swap</Button>
      </div>
    </form>
  );
}
