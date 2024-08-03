import { UserSchemaType } from "@/schema/formSchema";

export const userData: UserSchemaType = {
  settings: {
    slippage_mode: "auto",
    slippage_rate: 0.1,
    direct_route: true,
  },
  balances: [
    {
      chainId: 1,
      address:
        "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI",
      decimals: 9,
      name: "Sui Coin",
      symbol: "SUI",
      logoURI:
        "https://raw.githubusercontent.com/sonarwatch/token-lists/main/images/common/SUI.png",
      tags: ["native"],
      extensions: {
        coingeckoId: "sui",
      },
      amount: 1240,
    },
    {
      chainId: 1,
      address:
        "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN",
      decimals: 6,
      name: "Tether USD (Wormhole from Ethereum)",
      symbol: "USDT",
      logoURI:
        "https://raw.githubusercontent.com/sonarwatch/token-lists/main/images/common/USDT.png",
      extensions: {
        coingeckoId: "tether-usd-wormhole-from-ethereum",
      },
      amount: 500,
    },
    {
      chainId: 1,
      address:
        "0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a::turbos::TURBOS",
      decimals: 9,
      name: "Turbos Finance",
      symbol: "TURBOS",
      logoURI:
        "https://raw.githubusercontent.com/sonarwatch/token-lists/main/images/sui/0x1d58e26e85fbf9ee8596872686da75544342487f95b1773be3c9a49ab1061b19_suia_token_SUIA_TOKEN.png",
      extensions: {
        coingeckoId: "turbos-finance",
      },
      amount: 759837,
    },
  ],
  recent: [
    {
      chainId: 1,
      address:
        "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI",
      decimals: 9,
      name: "Sui Coin",
      symbol: "SUI",
      logoURI:
        "https://raw.githubusercontent.com/sonarwatch/token-lists/main/images/common/SUI.png",
      tags: ["native"],
      extensions: {
        coingeckoId: "sui",
      },
    },
    {
      chainId: 1,
      address:
        "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN",
      decimals: 6,
      name: "Tether USD (Wormhole from Ethereum)",
      symbol: "USDT",
      logoURI:
        "https://raw.githubusercontent.com/sonarwatch/token-lists/main/images/common/USDT.png",
      extensions: {
        coingeckoId: "tether-usd-wormhole-from-ethereum",
      },
    },
    {
      chainId: 1,
      address:
        "0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a::turbos::TURBOS",
      decimals: 9,
      name: "Turbos Finance",
      symbol: "TURBOS",
      logoURI:
        "https://raw.githubusercontent.com/sonarwatch/token-lists/main/images/sui/0x1d58e26e85fbf9ee8596872686da75544342487f95b1773be3c9a49ab1061b19_suia_token_SUIA_TOKEN.png",
      extensions: {
        coingeckoId: "turbos-finance",
      },
    },
  ],
};
