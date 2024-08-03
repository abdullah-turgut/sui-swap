import { FormSchemaType, TokenSchemaType } from "@/schema/formSchema";
import Image from "next/image";
import { UseFormReturn } from "react-hook-form";

export default function RecentTokens({
  type,
  form,
}: {
  type: "Sell" | "Buy";
  form: UseFormReturn<FormSchemaType>;
}) {
  const name = type === "Sell" ? "sell_token" : "buy_token";
  return (
    <div className="px-4 flex flex-wrap gap-4 max-h-28 overflow-hidden">
      {form.watch("user.recent").map((token: TokenSchemaType) => (
        <div
          key={token.address}
          className="flex items-center gap-x-2 px-2 h-12 bg-patara_gray_75 border border-patara_gray_100 rounded-full hover:bg-patara_gray_200 transition cursor-pointer"
          onClick={() =>
            form.setValue(
              name,
              form
                .watch("user.balances")
                .some((b: TokenSchemaType) => b.address === token.address)
                ? form
                    .watch("user.balances")
                    .filter(
                      (b: TokenSchemaType) => b.address === token.address
                    )[0]
                : token
            )
          }
        >
          <Image
            src={token.logoURI}
            width={32}
            height={32}
            alt={token.name}
            className="rounded-full"
            onError={(e) =>
              (e.currentTarget.srcset =
                "https://raw.githubusercontent.com/sonarwatch/token-lists/main/images/common/SUI.png")
            }
          />
          <p className="mr-2">{token.symbol}</p>
        </div>
      ))}
    </div>
  );
}
