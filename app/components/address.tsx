"use client";

import { useAccount } from "@starknet-react/core";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import usdt from "../../public/usdt.svg"
import userIcon from "../../public/user.png"
import DisconnectModal from "./disconnect-modal";
import { useState } from "react";

const Address: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address } = useAccount();

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex items-center gap-1 rounded-lg p-2 max-w-full overflow-x-auto">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full">
       
        <div className="flex bg-[#100827] items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-full w-full sm:w-auto whitespace-nowrap">
          <Image 
            src={usdt} 
            alt="USDT icon" 
            width={20} 
            height={20}
            className="w-5 h-5 sm:w-6 sm:h-6" 
          />
          <span className="font-medium text-sm sm:text-base">USDT: $114,000</span>
        </div>

        <div className="flex bg-[#100827] items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-full w-full sm:w-auto">
          <Image 
            src={userIcon} 
            alt="User icon" 
            width={20} 
            height={20}
            className="w-5 h-5 sm:w-6 sm:h-6" 
          />
          <div className="flex-shrink min-w-0">
            <span className="text-gray-300 text-sm sm:text-base">
              {address ? shortenAddress(address) : ''}
            </span>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="p-1 hover:bg-gray-800 rounded transition-colors ml-1"
          >
            <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          </button>
          <DisconnectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>
      </div>
    </div>
  );
};

export default Address;