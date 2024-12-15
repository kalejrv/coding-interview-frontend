import { useState, FC } from "react";
import { CurrencyOptionsContext } from "../";
import { CurrencyOptionsProviderType, CurrencyOptionType } from "../../types";

const cryptoCurrencies: CurrencyOptionType[] = [
  {
    logo: "/assets/cripto_currencies/TATUM-TRON-USDT.png",
    currency: "USDT",
    description: "Tether (USDT)",
  },
  {
    logo: "/assets/cripto_currencies/usdc.png",
    currency: "USDC",
    description: "USD Coin (USDC)",
  },
];

const fiatCurrencies: CurrencyOptionType[] = [
  {
    logo: "/assets/fiat_currencies/VES.png",
    currency: "VES",
    description: "Bolívares (Bs)",
  },
  {
    logo: "/assets/fiat_currencies/COP.png",
    currency: "COP",
    description: "Pesos Colombianos (COL$)",
  },
  {
    logo: "/assets/fiat_currencies/PEN.png",
    currency: "PEN",
    description: "Soles Peruanos (S/)",
  },
  {
    logo: "/assets/fiat_currencies/BRL.png",
    currency: "BRL",
    description: "Real Braliseño (R$)",
  },
];

export const CurrencyOptionsProvider: FC<CurrencyOptionsProviderType> = ({ children }) => {
  const [activeCurrenciesOptions, setActiveCurrenciesOptions] = useState<boolean>(false);
  const [cryptoCurrencySelected, setCryptoCurrencySelected] = useState<string | null>(null)
  const [fiatCurrencySelected, setFiatCurrencySelected] = useState<string | null>(null);

  return (
    <CurrencyOptionsContext.Provider value={{
      cryptoCurrencies,
      fiatCurrencies,
      activeCurrenciesOptions,
      setActiveCurrenciesOptions,
      cryptoCurrencySelected,
      setCryptoCurrencySelected,
      fiatCurrencySelected,
      setFiatCurrencySelected
    }}>
      {children}
    </CurrencyOptionsContext.Provider>
  );
};
