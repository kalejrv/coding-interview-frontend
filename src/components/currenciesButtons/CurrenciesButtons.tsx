import { MouseEvent, useState } from "react";
import { CurrenciesButtonsProps } from "../../types";
import { CryptoCurrencyButton } from "./CryptoCurrencyButton";
import { FiatCurrencyButton } from "./FiatCurrencyButton";
import "./currenciesButtons.css";

export const CurrenciesButtons = ({ handleHaveCurrencyButton, handleWantCurrencyButton, handleExchangeCurrencyButton }: CurrenciesButtonsProps): JSX.Element => {
  const [exchangeCurrencyButtonToggle, setExchangeCurrencyButtonToggle] = useState<boolean>(false);
  
  const onClickExchangeCurrencyButton = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setExchangeCurrencyButtonToggle(!exchangeCurrencyButtonToggle);
    handleExchangeCurrencyButton(exchangeCurrencyButtonToggle);
  };
  
  const onClickHaveCurrencyButton = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    handleHaveCurrencyButton(!exchangeCurrencyButtonToggle ? "Cripto" : "FIAT");
  };
  
  const onClickWantCurrencyButton = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    handleWantCurrencyButton(!exchangeCurrencyButtonToggle ? "FIAT" : "Cripto");
  };
  
  return (
    <div className="currencies-buttons">
      <button className="currency-button first-button" onClick={onClickHaveCurrencyButton}>
        { !exchangeCurrencyButtonToggle ? <CryptoCurrencyButton /> : <FiatCurrencyButton /> }
      </button>

      <button className="exchange-currency-button second-button" onClick={onClickExchangeCurrencyButton}>
        <img src="/assets/icons/arrows-right-left.svg" className="exchange-currency-button-icon" />
      </button>

      <button className="currency-button third-button" onClick={onClickWantCurrencyButton}>
        { !exchangeCurrencyButtonToggle ? <FiatCurrencyButton /> : <CryptoCurrencyButton />}
      </button>
    </div>
  );
};
