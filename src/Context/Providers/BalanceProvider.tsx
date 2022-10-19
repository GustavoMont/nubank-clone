import React, { useState } from "react";
import BalanceContext from "../BalanceContext";

export default function BalanceProvider({ children }: any) {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  function toggleBalanceVisibility() {
    setIsBalanceVisible((state) => !state);
  }
  return (
    <BalanceContext.Provider
      value={{ isBalanceVisible, toggleBalanceVisibility }}
    >
      {children}
    </BalanceContext.Provider>
  );
}
