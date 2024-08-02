import React from "react";
import TokenSearch from "./TokenSearch";
import RecentTokens from "./RecentTokens";
import SelectTokenList from "./SelectTokenList";

export default function SelectToken({ type }: { type: "Sell" | "Buy" }) {
  return (
    <div className="flex flex-col">
      <h2 className="mx-auto text-patara_black text-lg font-semibold h-10 flex items-center justify-center mb-5">
        Select Token
      </h2>
      <div className="flex flex-col gap-y-4 border-b border-patara_gray_100 pb-4">
        <TokenSearch />
        <RecentTokens />
      </div>
      <SelectTokenList />
    </div>
  );
}
