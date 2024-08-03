import { TokenSchemaType } from "@/schema/formSchema";

export const getTokenList = async (): Promise<TokenSchemaType[] | null> => {
  try {
    const res = await fetch(
      "https://cdn.jsdelivr.net/npm/@sonarwatch/token-lists/build/sonarwatch.sui.tokenlist.json"
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const { tokens: list } = await res.json();
    return await list;
  } catch (error) {
    console.error("Failed to fetch token list:", error);
    return null;
  }
};
