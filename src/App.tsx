import { useEffect, useState } from "react";
import { CurrenciesButtons, CurrenciesOptions, ExchangeCurrenciesDetail } from "./components";

function App(): JSX.Element {
  const [activeHaveCurrencyButton, setActiveHaveCurrencyButton] = useState<boolean>(false);
  const [activeWantCurrencyButton, setActiveWantCurrencyButton] = useState<boolean>(false);
  const [activeExchangeCurrencyButton, setActiveExchangeCurrencyButton] = useState<boolean>(false);
  const [currency, setCurrency] = useState<string | null>(null);
  
  const handleHaveCurrencyButton = (currency: string): void => {
    setActiveHaveCurrencyButton(!activeHaveCurrencyButton);
    setActiveWantCurrencyButton(false);
    setCurrency(currency);
  };
  
  const handleWantCurrencyButton = (currency: string): void => {
    setActiveWantCurrencyButton(!activeWantCurrencyButton);
    setActiveHaveCurrencyButton(false);
    setCurrency(currency);
  };

  const handleExchangeCurrencyButton = (state: boolean): void => {
    setActiveExchangeCurrencyButton(!state);
  };

  useEffect(() => {
    setActiveHaveCurrencyButton(false);
    setActiveWantCurrencyButton(false);
  }, [activeExchangeCurrencyButton]);

  return (
    <main className="calculator">
      <form className="form">
        <CurrenciesButtons
          handleHaveCurrencyButton={handleHaveCurrencyButton}
          handleWantCurrencyButton={handleWantCurrencyButton}
          handleExchangeCurrencyButton={handleExchangeCurrencyButton}
        />

        <div className="currency-amount">
          <input type="number" className="currency-amount-input"/>
          <span className="currency-amount-text">USDT</span>
        </div>

        <ExchangeCurrenciesDetail />

        <input type="submit" value="Cambiar" className="change-currency-button"/>
      </form>

      { (activeHaveCurrencyButton) && <CurrenciesOptions isActive={activeHaveCurrencyButton} currency={currency}/> }
      { (activeWantCurrencyButton) && <CurrenciesOptions isActive={activeWantCurrencyButton} currency={currency}/> }      
    </main>
  );
};

export default App;
