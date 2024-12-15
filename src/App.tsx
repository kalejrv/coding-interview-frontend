import { useEffect, useRef, useState } from "react";
import { CurrenciesButtons, CurrenciesOptions, ExchangeCurrenciesDetail } from "./components";
import { APIResponse, CurrencyType } from "./types";
import { useCurrencyOptions, useInputForm } from "./hooks";
import { fetchCurrenciesExchange } from "./utils";

function App(): JSX.Element {
  const { cryptoCurrencySelected, fiatCurrencySelected, activeCurrenciesOptions, setActiveCurrenciesOptions } = useCurrencyOptions();
  const { inputFormValue, handleInputFormChange, resetInputFormValue } = useInputForm();
  const [activeExchangeCurrencyButton, setActiveExchangeCurrencyButton] = useState<boolean>(false);
  const [currencyType, setCurrencyType] = useState<CurrencyType | null>(null);
  const currencyAmountRef = useRef<HTMLSpanElement | null>(null);
  const [amountCurrencyId, setamountCurrencyId] = useState<string | null>(cryptoCurrencySelected)
  const [apiResponse, setApiResponse] = useState<APIResponse>(undefined);

  const handleCurrencyButton = (currencyType: CurrencyType): void => {
    setCurrencyType(currencyType);

    if (currencyType === CurrencyType.Cripto || CurrencyType.FIAT) {
      setActiveCurrenciesOptions(true);
      return;
    };
  };

  const handleExchangeCurrencyButton = (state: boolean): void => {
    setActiveExchangeCurrencyButton(!state);
  };

  const handleSubmitExchangeCurrency = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!inputFormValue) {
      alert("Put a currency value.");
    };

    fetchCurrenciesExchange({
      type: +activeExchangeCurrencyButton,
      cryptoCurrencyId: cryptoCurrencySelected,
      fiatCurrencyId: fiatCurrencySelected,
      amount: Number(inputFormValue),
      amountCurrencyId: amountCurrencyId,
    })
      .then((data) => {
        if (data === "No response") {
          resetInputFormValue();
          return;
        };

        setApiResponse(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setActiveCurrenciesOptions(false);

    if (currencyAmountRef.current) {
      setamountCurrencyId(currencyAmountRef.current.textContent);
    };

  }, [activeExchangeCurrencyButton, cryptoCurrencySelected, fiatCurrencySelected]);

  return (
    <main className="currencies-calculator">
      <form className="form" onSubmit={handleSubmitExchangeCurrency}>
        <CurrenciesButtons
          handleCurrencyButton={handleCurrencyButton}
          handleExchangeCurrencyButton={handleExchangeCurrencyButton}
        />

        <div className="currency-amount">
          <span ref={currencyAmountRef} className="currency-amount-text">
            {(!activeExchangeCurrencyButton)
                ? cryptoCurrencySelected || "USDT"
                : fiatCurrencySelected || "VES"}
          </span>

          <input type="number" className="currency-amount-input" placeholder="E.g: 5.00" onChange={handleInputFormChange} value={inputFormValue}/>
        </div>

        <ExchangeCurrenciesDetail
          currencySelected={fiatCurrencySelected}
          stimatedRate={+inputFormValue}
          youWillReceive={apiResponse}
        />

        <input type="submit" value="Cambiar" className="change-currency-button"/>
      </form>

      { (activeCurrenciesOptions) && <CurrenciesOptions isActive={activeCurrenciesOptions} currencyType={currencyType}/> }      
    </main>
  );
};

export default App;
