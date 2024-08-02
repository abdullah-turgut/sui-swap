import React from "react";
import { ScrollArea } from "./ui/scroll-area";

export default function SelectTokenList() {
  return (
    <div className="pt-4 flex flex-col gap-y-4">
      <div className="px-9 flex items-center justify-between text-patara_gray_600 h-6">
        <p>Token</p>
        <p>Balance</p>
      </div>
      <ScrollArea className=" h-[405px]">
        <div className="px-4 flex flex-col gap-y-1">
          <div className="w-full h-16 flex items-center justify-between px-5 py-3 bg-patara_gray_75 hover:bg-patara_gray_100 transition rounded-lg">
            <div className="flex items-center gap-x-2">
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm font-medium">SUI</p>
                <p className="text-xs">Sui</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm font-medium">789</p>
              <p className="text-xs">$567</p>
            </div>
          </div>
          <div className="w-full h-16 flex items-center justify-between px-5 py-3 bg-patara_gray_75 hover:bg-patara_gray_100 transition rounded-lg">
            <div className="flex items-center gap-x-2">
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm font-medium">SUI</p>
                <p className="text-xs">Sui</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm font-medium">789</p>
              <p className="text-xs">$567</p>
            </div>
          </div>
          <div className="w-full h-16 flex items-center justify-between px-5 py-3 bg-patara_gray_75 hover:bg-patara_gray_100 transition rounded-lg">
            <div className="flex items-center gap-x-2">
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm font-medium">SUI</p>
                <p className="text-xs">Sui</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm font-medium">789</p>
              <p className="text-xs">$567</p>
            </div>
          </div>
          <div className="w-full h-16 flex items-center justify-between px-5 py-3 bg-patara_gray_75 hover:bg-patara_gray_100 transition rounded-lg">
            <div className="flex items-center gap-x-2">
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm font-medium">SUI</p>
                <p className="text-xs">Sui</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm font-medium">789</p>
              <p className="text-xs">$567</p>
            </div>
          </div>
          <div className="w-full h-16 flex items-center justify-between px-5 py-3 bg-patara_gray_75 hover:bg-patara_gray_100 transition rounded-lg">
            <div className="flex items-center gap-x-2">
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm font-medium">SUI</p>
                <p className="text-xs">Sui</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm font-medium">789</p>
              <p className="text-xs">$567</p>
            </div>
          </div>
          <div className="w-full h-16 flex items-center justify-between px-5 py-3 bg-patara_gray_75 hover:bg-patara_gray_100 transition rounded-lg">
            <div className="flex items-center gap-x-2">
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="flex flex-col">
                <p className="text-sm font-medium">SUI</p>
                <p className="text-xs">Sui</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm font-medium">789</p>
              <p className="text-xs">$567</p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
