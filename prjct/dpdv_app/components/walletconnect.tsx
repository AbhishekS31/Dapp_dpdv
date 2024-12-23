"use client"; // Ensure this is at the top

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming Button component exists

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [account, setAccount] = useState<string | null>(null);

  // Function to handle MetaMask connection
  const handleMetaMaskConnect = async (): Promise<void> => {
    if (window.ethereum) {
      try {
        // Request account access from MetaMask
        const accounts: string[] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        setIsConnected(true);
      } catch (err) {
        console.error("MetaMask connection error:", err);
        alert("Please install MetaMask or check if it's connected.");
      }
    } else {
      alert("MetaMask is not installed. Please install it first.");
    }
  };

  return (
    <Button
      className="fixed top-4 right-8 px-4 py-4"
      onClick={handleMetaMaskConnect}
    >
      {isConnected ? `Connected: ${account?.slice(0, 6)}...` : "Connect Wallet"}
    </Button>
  );
}
