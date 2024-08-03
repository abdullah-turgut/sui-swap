export interface CoinGeckoTokenData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": process.env.NEXT_PUBLIC_COINGECKO_API!,
  },
};

export const getPrices = async (
  ids: string[]
): Promise<CoinGeckoTokenData[] | null> => {
  const idQuery = ids.join("%2C");
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" +
        idQuery,
      options
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch token data: ${res.statusText}`);
    }

    const data = await res.json();
    return data as CoinGeckoTokenData[];
  } catch (error) {
    console.error("Error fetching token price:", error);
    return null;
  }
};
