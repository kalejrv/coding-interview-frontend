import { useContext } from "react";
import { CurrencyOptionsContext } from "../context";

export const useCurrencyOptions = () => {
  const context = useContext(CurrencyOptionsContext);

  if (!context) {
    throw new Error("useCurrencyOptions should be used inside a provider.");
  };

  return context;
};
