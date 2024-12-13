import { useCurrencyOptions } from "../../hooks";
import CurrencyOption from "./CurrencyOption";

export const CryptoCurrenciesOptions = (): JSX.Element => {
  const { cryptoCurrencies } = useCurrencyOptions();
  
  return (
    <>
      {
        cryptoCurrencies.map((currency) => (
          <CurrencyOption key={currency.currency} {...currency} />
        ))
      }
    </>
  );
};
