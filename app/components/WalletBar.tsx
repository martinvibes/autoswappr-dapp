"use client";

// WalletBar.tsx
import { useState } from "react";
import { useAccount, useDisconnect } from "@starknet-react/core";
import { WalletModal } from "./WalletModal";
import Address from "./address";

const WalletBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <>
      {!address ? (
        <>
          <button
            onClick={() => setIsModalOpen(true)}
            className=" py-3 w-[200px] bg-[#2AB2FF] rounded-full text-sm leading-5 px-4 bg-greenish-500 hover:bg-greenish-300 text-white font-semibold transition-colors"
          >
            Connect Wallet
          </button>
          <WalletModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </>
      ) : (
        <Address />
      )}
    </>
  );
};

export default WalletBar;
