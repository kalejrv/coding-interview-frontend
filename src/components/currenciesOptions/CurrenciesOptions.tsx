import { CurrenciesOptionsProps, CurrencyType } from "../../types"
import { CryptoCurrenciesOptions } from "./CryptoCurrenciesOptions";
import { FiatCurrenciesOptions } from "./FiatCurrenciesOptions";
import "./currenciesOptions.css";

export const CurrenciesOptions = ({ isActive, currencyType }: CurrenciesOptionsProps): JSX.Element => {  
  return (
    <section className={`currencies-options ${isActive ? "isActive" : "isNotActive"}`}>
      <div className="currencies-options-wrapper">
        <h2>{currencyType}</h2>
        
        { (currencyType === CurrencyType.Cripto) && <CryptoCurrenciesOptions /> }
        { (currencyType === CurrencyType.FIAT) && <FiatCurrenciesOptions /> }
      </div>
    </section>
  );
};
