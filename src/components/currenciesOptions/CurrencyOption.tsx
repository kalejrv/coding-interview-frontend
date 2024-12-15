import { useRef } from "react";
import { CurrencyOptionProps } from "../../types";
import { useCurrencyOptions } from "../../hooks";
import "./currencyOption.css";

const CurrencyOption = ({ logo, currency, description }: CurrencyOptionProps): JSX.Element => {
  const currencyRadioInputRef = useRef<HTMLInputElement | null>(null);
  const { cryptoCurrencies, setCryptoCurrencySelected, fiatCurrencies, setFiatCurrencySelected, setActiveCurrenciesOptions } = useCurrencyOptions();


  const IsCurrencySelectedACrypto = (currencySelected: string): boolean => {
    let isACrypto: boolean = false;

    const cryptoCurrencySelected = cryptoCurrencies.find(({currency}) => currency === currencySelected);

    cryptoCurrencies.forEach(curr => {
      Object.values(curr).forEach((value) => {
        if (value === cryptoCurrencySelected?.currency) {
          isACrypto = true;
        };
      });
    });

    return isACrypto;
  };

  const isCurrencySelectedAFiat = (currencySelected: string): boolean => {
    let isAFiat: boolean = false;

    const fiatCurrencySelected = fiatCurrencies.find(({currency}) => currency === currencySelected);
  
    fiatCurrencies.forEach(curr => {
      Object.values(curr).forEach((value) => {
        if (value === fiatCurrencySelected?.currency) {
          isAFiat = true;
        };
      });
    });

    return isAFiat;
  };

  const onClickCurrencyOption = (): void => {
    const currencyOption = currencyRadioInputRef.current;

    if (currencyOption) {
      currencyOption.checked = true;

      if (IsCurrencySelectedACrypto(currencyOption.value)) {
        setCryptoCurrencySelected(currencyOption.value);
      };

      if (isCurrencySelectedAFiat(currencyOption.value)) {
        setFiatCurrencySelected(currencyOption.value);
      };

      setActiveCurrenciesOptions(false);
    };
  };

  return (
    <div className="currency-option" onClick={onClickCurrencyOption}>
      <img src={logo} className="currency-option-logo"/>

      <div>
        <h3 className="currency-option-text">{currency}</h3>
        <span className="currency-option-description">{description}</span>
      </div>

      <input ref={currencyRadioInputRef} type="radio" name="option" value={currency}/>
    </div>
  );
};

export default CurrencyOption;
