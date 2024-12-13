import { CurrencyOption } from "./CurrencyOption";

export const CriptoCurrenciesOptions = (): JSX.Element => {
  return (
    <>
      <CurrencyOption
        logo="/assets/cripto_currencies/TATUM-TRON-USDT.png"
        currency="USDT"
        description="Tether (USDT)"
      />
      
      <CurrencyOption
        logo="/assets/cripto_currencies/usdc.png"
        currency="USDC"
        description="USD Coin (USDC)"
      />
    </>
  );
};
