import { useCurrencyOptions } from "../../hooks";
import CurrencyOption from "./CurrencyOption";

export const FiatCurrenciesOptions = (): JSX.Element => {
  const { fiatCurrencies } = useCurrencyOptions();
  
  return (
    <>
      {
        fiatCurrencies.map((currency) => (
          <CurrencyOption key={currency.currency} {...currency} />
        ))
      }
    </>
  );
};
