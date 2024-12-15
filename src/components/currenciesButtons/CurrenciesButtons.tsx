import { MouseEvent, useState } from "react";
import { CurrenciesButtonsProps, CurrencyType } from "../../types";
import "./currenciesButtons.css";
import { useCurrencyOptions } from "../../hooks";

export const CurrenciesButtons = ({ handleCurrencyButton, handleExchangeCurrencyButton }: CurrenciesButtonsProps): JSX.Element => {
  const [exchangeCurrencyButtonToggle, setExchangeCurrencyButtonToggle] = useState<boolean>(false);
  const { cryptoCurrencies, fiatCurrencies, cryptoCurrencySelected, fiatCurrencySelected } = useCurrencyOptions();

  const onClickExchangeCurrencyButton = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setExchangeCurrencyButtonToggle(!exchangeCurrencyButtonToggle);
    handleExchangeCurrencyButton(exchangeCurrencyButtonToggle);
  };
  
  const onClickCryptoCurrencyButton = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    handleCurrencyButton(CurrencyType.Cripto);
  };
  
  const onClickFiatCurrencyButton = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    handleCurrencyButton(CurrencyType.FIAT);
  };

  const cryptoOption = Object.assign({}, ...cryptoCurrencies.filter(({ currency }) => currency === cryptoCurrencySelected));
  const fiatOption = Object.assign({}, ...fiatCurrencies.filter(({ currency }) => currency === fiatCurrencySelected));

  return (
    <div className="currencies-buttons">
      <button className={`currency-button ${exchangeCurrencyButtonToggle ? "third-button" : "first-button"}`} onClick={onClickCryptoCurrencyButton}>
        <img src={cryptoOption.logo || "/assets/cripto_currencies/TATUM-TRON-USDT.png"} className="currency-button-logo" />
        <p className="currency-button-name">{cryptoOption.currency || "USDT"}</p>
        <img src="/assets/icons/arrow-down.svg" className="currency-button-icon" />
      </button>

      <button className="exchange-currency-button second-button" onClick={onClickExchangeCurrencyButton}>
        <img src="/assets/icons/arrows-right-left.svg" className="exchange-currency-button-icon" />
      </button>

      <button className={`currency-button ${exchangeCurrencyButtonToggle ? "first-button" : "third-button"}`} onClick={onClickFiatCurrencyButton}>
        <img src={fiatOption.logo || "/assets/fiat_currencies/VES.png"} className="currency-button-logo" />
        <p className="currency-button-text">{ fiatOption.currency || "VES" }</p>
        <img src="/assets/icons/arrow-down.svg" className="currency-button-icon" />
      </button>
    </div>
  );
};
