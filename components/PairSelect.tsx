import React from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export default function PairSelect({ token }: { token: string }) {
  return (
    <div className="p-1 flex items-center justify-start h-fit rounded-full bg-patara_gray_50 leading-none gap-x-2 border border-patara_gray_100 hover:border-patara_gray_200">
      <div className="w-8 h-8 bg-black rounded-full"></div>
      <p className="font-medium">USDC</p>
      <ChevronDown className="w-5 h-5 mr-2" />
    </div>
  );
}
