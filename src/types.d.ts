/// <reference types="vite/client" />

type Currency = string;

export interface CurrenciesButtonsProps {
  handleHaveCurrencyButton: (currency: Currency) => void;
  handleWantCurrencyButton: (currency: Currency) => void;
  handleExchangeCurrencyButton: (state: boolean) => void;
};

export interface CurrenciesOptionsProps {
  isActive: boolean;
  currency: Currency | null;
};

export interface CurrencyOptionProps {
  logo: string;
  currency: Currency;
  description: string;
};
