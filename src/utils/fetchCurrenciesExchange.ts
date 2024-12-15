import { APIResponse, fetchCurrenciesExchangeType } from "../types";

export const fetchCurrenciesExchange = async ({ type, cryptoCurrencyId, fiatCurrencyId = "VES", amount, amountCurrencyId }: fetchCurrenciesExchangeType): Promise<APIResponse> => {
  if (!cryptoCurrencyId || (cryptoCurrencyId === "USDT")) cryptoCurrencyId = "TATUM-TRON-USDT";
  if (!fiatCurrencyId) fiatCurrencyId = "VES";
  if (amountCurrencyId === "USDT") amountCurrencyId = "TATUM-TRON-USDT";

  let apiResponse;

  const url = `https://74j6q7lg6a.execute-api.eu-west-1.amazonaws.com/stage/orderbook/public/recommendations?type=${type}&cryptoCurrencyId=${cryptoCurrencyId}&fiatCurrencyId=${fiatCurrencyId}&amount=${amount}&amountCurrencyId=${amountCurrencyId}`;

  try {
    const response = await fetch(url);
    const { data: { byPrice } } = await response.json();
    
    if (type === 1 || cryptoCurrencyId === "USDC") {
      return apiResponse = "No response";
    };

    apiResponse = +byPrice.fiatToCryptoExchangeRate;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
  };

  return apiResponse;
};
