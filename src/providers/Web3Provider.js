"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

export const Web3Context = createContext(null);

export function Web3Provider({ children }) {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(web3Provider);
    }
  }, []);

  return (
    <Web3ReactProvider getLibrary={() => provider}>
      <Web3Context.Provider value={{ provider }}>
        {children}
      </Web3Context.Provider>
    </Web3ReactProvider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}
