"use client";

import { useState } from "react";
import { useAccount } from "@starknet-react/core";
import { WalletModal } from "./WalletModal";
import Address from "./address";
import { createPortal } from "react-dom";
import LockBodyScroll from "./lock-body-scroll";
// import { useRouter } from "next/navigation";

function WalletBar({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  const { address } = useAccount();

  return (
    <div className="flex items-center justify-center">
      {address ? (
        <Address />
      ) : (
        <button
          onClick={toggleModal}
          className="p-3 md:p-[16px] w-[204px] md:w-[230px] bg-[#02060D1F] border border-[#135DA3] rounded-lg text-sm md:text-base leading-5 text-[#F3F5FF] font-semibold "
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default WalletBar;
