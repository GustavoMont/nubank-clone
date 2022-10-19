import { useContext } from "react";
import BalanceContext from "../BalanceContext";

export default function useBalance() {
  const balance = useContext(BalanceContext);
  return balance;
}
