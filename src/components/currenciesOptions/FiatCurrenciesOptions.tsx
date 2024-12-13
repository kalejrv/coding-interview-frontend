import { CurrencyOption } from "./CurrencyOption";

export const FiatCurrenciesOptions = (): JSX.Element => {
  return (
    <>
      <CurrencyOption
        logo="/assets/fiat_currencies/VES.png"
        currency="VES"
        description="Bolívares (Bs)"
      />

      <CurrencyOption
        logo="/assets/fiat_currencies/COP.png"
        currency="COP"
        description="Pesos Colombianos (COL$)"
      />
      
      <CurrencyOption
        logo="/assets/fiat_currencies/PEN.png"
        currency="PEN"
        description="Soles Peruanos (S/)"
      />
      
      <CurrencyOption
        logo="/assets/fiat_currencies/BRL.png"
        currency="BRL"
        description="Real Braliseño (R$)"
      />
    </>
  );
};
