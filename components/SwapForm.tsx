"use client";

import { RotateCw, Settings } from "lucide-react";

export default function SwapForm() {
  return (
    <form className="relative">
      <div className="w-[480px] p-4 flex flex-col gap-y-4 bg-patara_gray_50 rounded-xl text-patara_black">
        <div className="flex items-center justify-between">
          <p className="font-medium text-sm">Balance: 21312312312 SUI</p>
        </div>
      </div>
      <div className="absolute top-0 -right-2 translate-x-full flex flex-col gap-y-2">
        <Settings />
        <RotateCw />
      </div>
    </form>
  );
}
