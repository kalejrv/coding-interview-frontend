/// <reference types="vite/client" />

import { Dispatch, ReactNode, SetStateAction } from "react";

type Currency = string;

export enum CurrencyType {
  Cripto = "Cripto",
  FIAT = "FIAT",
};

export interface CurrenciesButtonsProps {
  handleCurrencyButton: (currencyType: CurrencyType) => void;
  handleExchangeCurrencyButton: (state: boolean) => void;
};

export interface CurrenciesOptionsProps {
  isActive: boolean;
  currencyType: CurrencyType | null;
};

export interface CurrencyOptionProps {
  logo: string;
  currency: Currency;
  description: string;
};

export interface CurrencyOptionType extends CurrencyOptionProps {}

export interface CurrencyOptionsContextType {
  cryptoCurrencies: CurrencyOptionType[];
  fiatCurrencies: CurrencyOptionType[];
  activeCurrenciesOptions: boolean;
  setActiveCurrenciesOptions: Dispatch<SetStateAction<boolean>>;
  cryptoCurrencySelected: Currency | null;
  setCryptoCurrencySelected: Dispatch<SetStateAction<Currency | null>>;
  fiatCurrencySelected: Currency | null;
  setFiatCurrencySelected: Dispatch<SetStateAction<Currency | null>>;
};
export interface CurrencyOptionsProviderType {
  children: ReactNode;
};

enum FetchCurrencyType {
  CryptoToFiat,
  FiatToCrypto,
}

export interface fetchCurrenciesExchangeType {
  type: FetchCurrencyType;
  cryptoCurrencyId: Currency | null;
  fiatCurrencyId: Currency | null;
  amount: number;
  amountCurrencyId: Currency | null;
};

export type APIResponse = number | string | undefined;

export interface ExchangeCurrenciesDetailProps {
  currencySelected: Currency | null;
  stimatedRate: number;
  youWillReceive: number | string | undefined;
};
