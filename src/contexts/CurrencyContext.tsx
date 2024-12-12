import React, { createContext, useContext, useState } from "react";

type Currency = "USD" | "INR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (price: number | string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Conversion rate (1 USD = ~83 INR as of 2024)
const INR_RATE = 83;

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>("USD");

  const formatPrice = (price: number | string) => {
    const numericPrice = typeof price === "string" ? parseFloat(price.replace(/[^0-9.]/g, "")) : price;
    
    if (currency === "INR") {
      return `₹${Math.round(numericPrice * INR_RATE)}`;
    }
    return `$${numericPrice}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};