import { CurrencyOptionProps } from "../../types";
import "./currencyOption.css";

export const CurrencyOption = ({ logo, currency, description }: CurrencyOptionProps): JSX.Element => {
  return (
    <div className="currency-option">
      <img src={logo} className="currency-option-logo"/>

      <div>
        <h3 className="currency-option-text">{currency}</h3>
        <span className="currency-option-description">{description}</span>
      </div>

      <input type="checkbox" className="currency-option-input" name="" id="" />
    </div>
  );
};
