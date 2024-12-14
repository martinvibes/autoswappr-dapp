'use client'

import React, { useState } from "react";
import ToggleButton from "../components/toggleButton";
import Image from "next/image";
import arrow from "../../public/arrow.svg";
import eth from "../../public/coin-logos/eth-logo.png"
import usdc from "../../public/coin-logos/usdc-logo.png"
import { Open_Sans } from "next/font/google";
import AdditionalButton from "../components/additional-button";

const openSans = Open_Sans({ subsets: ["latin"] });
export default function page() {
  const [percentage, setPercentage] = useState('50');
  
  const tokenPairs = [
    { id: 1, from: { name: 'Ethereum', symbol: 'ETH', logo: eth }, to: { name: 'USDC', symbol: 'USDC', logo: usdc }, percentage: '50', enabled: true },
    { id: 2, from: { name: 'Ethereum', symbol: 'ETH', logo: eth }, to: { name: 'USDC', symbol: 'USDC', logo: usdc }, percentage: '50', enabled: true },
    { id: 3, from: { name: 'Ethereum', symbol: 'ETH', logo: eth }, to: { name: 'USDC', symbol: 'USDC', logo: usdc }, percentage: '50', enabled: true },
    { id: 4, from: { name: 'Ethereum', symbol: 'ETH', logo: eth }, to: { name: 'USDC', symbol: 'USDC', logo: usdc }, percentage: '50', enabled: false },
    { id: 5, from: { name: 'Ethereum', symbol: 'ETH', logo: eth }, to: { name: 'USDC', symbol: 'USDC', logo: usdc }, percentage: '50', enabled: true },
  ];

  const handlePercentageChange = (e: React.ChangeEvent<HTMLSelectElement>, id: number) => {
    
  };

  return (
    <div className={`${openSans.className} font-[200] h-auto min-h-screen bg-[#06021A] pb-10`}>
      <div className="flex flex-col items-center text-center md:pt-[150px] pt-[150px] px-5 md:px-0">
        <h1 className="max-w-[700px] text-[20px] md:text-[28px] font-semibold text-[#F7F7F7] mb-2">
          Autoswappr Overview
        </h1>
        <p className="text-center text-[14px] text-[#A199B8] max-w-[700px]">
          These are a list of all the tokens you have setup to be auto-swapped to a stable token. 
          To add more tokens to the list, click on the 'Add More Tokens' Button below.
        </p>
        
        <div className="w-full min-w-[350px] overflow-x-auto max-w-[900px] mt-10">
          <div className="grid grid-cols-[auto_3fr_2fr_2fr_4fr_auto] font-200 gap-4 items-center text-[#A199B8] text-sm mb-4 px-4">
            <div className="w-8"></div>
            <div className="text-left">From</div>
            <div></div>
            <div className="text-left">To</div>
            <div className="text-left">Percentage</div>
            <div className="text-right">Autoswappr</div>
          </div>
          <div className="h-[1px] bg-[#1E1B24] w-full mb-4"></div>
          
          {tokenPairs.map((pair, index) => (
            <div key={pair.id} className="grid grid-cols-[auto_3fr_2fr_2fr_4fr_auto] gap-4 items-center rounded-lg p-4 mb-4">
              <div className="text-[#A199B8] w-8">{index + 1}.</div>
              
              <div className="flex items-center gap-2">
                <Image src={pair.from.logo} alt={pair.from.name} width={24} height={24} className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-white">{pair.from.name}</div>
                  <div className="text-[#A199B8] text-sm">{pair.from.symbol}</div>
                </div>
              </div>

              <Image
                src={arrow}
                alt="arrow"
                width={24}
                height={24}
                className="-rotate-90"
              />

              <div className="flex items-center gap-2">
                <Image src={pair.to.logo} alt={pair.to.name} width={24} height={24} className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-white">{pair.to.name}</div>
                  <div className="text-[#A199B8] text-sm">{pair.to.symbol}</div>
                </div>
              </div>
              <div className="relative w-24">
                <select
                  value={pair.percentage}
                  onChange={(e) => handlePercentageChange(e, pair.id)}
                  className="bg-[#100827] text-white p-3 text-center rounded-full text-sm outline-none w-full appearance-none pr-8"
                >
                  <option value="25">25%</option>
                  <option value="50">50%</option>
                  <option value="75">75%</option>
                  <option value="100">100%</option>
                </select>
                <div className="absolute right-4 opacity-50 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#A199B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <ToggleButton />
            </div>
          ))}
        </div>
        <AdditionalButton/>
      </div>
    </div>
  );
}
