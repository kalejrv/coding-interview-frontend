import "./exchangeCurrenciesDetail.css";

export const ExchangeCurrenciesDetail = (): JSX.Element => {
  return (
    <div className="exchange-currencies-detail">
      <p>
        <span className="text">Tasa estimada</span>
        <span className="value"> = 25.00 VES</span>
      </p>
      <p>
        <span className="text">Recibirás</span>
        <span className="value"> = 125.00 VES</span>
      </p>
      <p>
        <span className="text">Tiempo estimado</span>
        <span className="value"> = 10 Min</span>
      </p>
    </div>
  );
};
