import React from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { TokenSchemaType } from "@/schema/formSchema";

export default function PairSelect({
  token,
  tokenList,
}: {
  token: TokenSchemaType;
  tokenList: TokenSchemaType[];
}) {
  return (
    <div className="p-1 flex items-center justify-start h-fit rounded-full bg-patara_gray_50 leading-none gap-x-2 border border-patara_gray_100 hover:border-patara_gray_200">
      <Image
        src={
          tokenList.filter(
            (t: TokenSchemaType) => t.symbol === token.symbol
          )[0]!.logoURI
        }
        width={32}
        height={32}
        alt={token.name}
        className="rounded-full"
        onError={(e) =>
          (e.currentTarget.srcset =
            "https://raw.githubusercontent.com/sonarwatch/token-lists/main/images/common/SUI.png")
        }
      />
      <p className="font-medium">{token.symbol}</p>
      <ChevronDown className="w-5 h-5 mr-2" />
    </div>
  );
}
