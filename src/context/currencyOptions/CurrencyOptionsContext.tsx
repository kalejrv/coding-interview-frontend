import { createContext } from "react";
import { CurrencyOptionsContextType } from "../../types";

export const CurrencyOptionsContext = createContext<CurrencyOptionsContextType | undefined>(undefined);
