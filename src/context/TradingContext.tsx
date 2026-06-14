import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface TradingContextType {
  accountType: "demo" | "real";
  setAccountType: (
    value: "demo" | "real"
  ) => void;

  selectedAsset: string;
  setSelectedAsset: (
    value: string
  ) => void;
}

const TradingContext =
  createContext<
    TradingContextType | undefined
  >(undefined);

export const TradingProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [accountType, setAccountType] =
    useState<"demo" | "real">(
      "demo"
    );

  const [selectedAsset, setSelectedAsset] =
    useState("Volatility 75");

  return (
    <TradingContext.Provider
      value={{
        accountType,
        setAccountType,
        selectedAsset,
        setSelectedAsset,
      }}
    >
      {children}
    </TradingContext.Provider>
  );
};

export const useTrading = () => {
  const context =
    useContext(TradingContext);

  if (!context)
    throw new Error(
      "TradingContext missing"
    );

  return context;
};