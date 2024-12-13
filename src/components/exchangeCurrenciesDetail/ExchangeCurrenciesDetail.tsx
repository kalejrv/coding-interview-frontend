import { ExchangeCurrenciesDetailProps } from "../../types";
import "./exchangeCurrenciesDetail.css";

export const ExchangeCurrenciesDetail = ({ currencySelected, stimatedRate, youWillReceive }: ExchangeCurrenciesDetailProps): JSX.Element => {
  return (
    <div className="exchange-currencies-detail">
      <p>
        <span className="text">Tasa estimada</span>
        <span className="value"> =
          {" "}
          {stimatedRate}.00 {currencySelected || "VES"}
        </span>
      </p>
      <p>
        <span className="text">Recibirás</span>
        <span className="value"> = 
          {" "}
          {!stimatedRate ? "0.00": youWillReceive || "0.00"}
          {currencySelected || " VES"}
        </span>
      </p>
      <p>
        <span className="text">Tiempo estimado</span>
        <span className="value"> = 10 Min</span>
      </p>
    </div>
  );
};
