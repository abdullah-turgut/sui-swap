import SwapForm from "@/components/SwapForm";
import { getTokenList } from "@/utils/getTokenList";
import { notFound } from "next/navigation";

export default async function Home() {
  const tokenList = await getTokenList();

  if (!tokenList) {
    return notFound();
  }

  return <SwapForm tokenList={tokenList ? tokenList : []} />;
}
