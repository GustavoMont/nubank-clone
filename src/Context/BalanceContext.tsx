import React, { createContext } from "react";

const BalanceContext = createContext({
  isBalanceVisible: false,
  toggleBalanceVisibility: () => {},
});

export default BalanceContext;
