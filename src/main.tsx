import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App.tsx";
import { CurrencyOptionsProvider } from "./context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CurrencyOptionsProvider>
      <App />
    </CurrencyOptionsProvider>
  </StrictMode>
);
