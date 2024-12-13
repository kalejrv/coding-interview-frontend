import { CurrenciesOptionsProps } from "../../types"
import { CriptoCurrenciesOptions } from "./CriptoCurrenciesOptions";
import "./currenciesOptions.css";
import { FiatCurrenciesOptions } from "./FiatCurrenciesOptions";

export const CurrenciesOptions = ({ isActive, currency }: CurrenciesOptionsProps): JSX.Element => {  
  return (
    <section className={`currencies-options ${isActive ? "isActive" : "isNotActive"}`}>
      <div className="currencies-options-wrapper">
        <h2>{currency}</h2>
        
        { (currency === "Cripto") && <CriptoCurrenciesOptions /> }
        { (currency === "FIAT") && <FiatCurrenciesOptions /> }
      </div>
    </section>
  );
};
