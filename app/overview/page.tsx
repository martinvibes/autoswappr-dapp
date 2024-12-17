'use client'

import React, { useState } from "react";
import ToggleButton from "../components/toggleButton";
import Image, { StaticImageData } from "next/image";
import arrow from "../../public/arrow.svg";
import eth from "../../public/coin-logos/eth-logo.png"
import usdc from "../../public/coin-logos/usdc-logo.png"
import { Open_Sans } from "next/font/google";
import AdditionalButton from "../components/additional-button";
interface TokenPair {
  id: number;
  from: { name: string; symbol: string; logo: StaticImageData };
  to: { name: string; symbol: string; logo: StaticImageData };
  percentage: string;
  enabled: boolean;
}
const openSans = Open_Sans({ subsets: ["latin"] });
export default function page() {

  
  const [tokenPairs, setTokenPairs] = useState<TokenPair[]>([
    { id: 1, from: { name: 'Ethereum', symbol: 'ETH', logo: eth }, to: { name: 'USDC', symbol: 'USDC', logo: usdc }, percentage: '50', enabled: true },
    { id: 2, from: { name: 'Ethereum', symbol: 'ETH', logo: eth }, to: { name: 'USDC', symbol: 'USDC', logo: usdc }, percentage: '50', enabled: true },
    { id: 3, from: { name: 'Ethereum', symbol: 'ETH', logo: eth }, to: { name: 'USDC', symbol: 'USDC', logo: usdc }, percentage: '50', enabled: true },
    { id: 4, from: { name: 'Ethereum', symbol: 'ETH', logo: eth }, to: { name: 'USDC', symbol: 'USDC', logo: usdc }, percentage: '50', enabled: false },
    { id: 5, from: { name: 'Ethereum', symbol: 'ETH', logo: eth }, to: { name: 'USDC', symbol: 'USDC', logo: usdc }, percentage: '50', enabled: true },
  ]);

  const handlePercentageChange = (e: React.ChangeEvent<HTMLSelectElement>, id: number) => {
    const newPercentage = e.target.value;
    setTokenPairs((prevTokenPairs) =>
      prevTokenPairs.map((pair) =>
        pair.id === id ? { ...pair, percentage: newPercentage } : pair
      )
    );
  };

  return (
    <div className={`${openSans.className} font-[200] h-auto min-h-screen bg-[#06021A] pb-10`}>
      <div className="flex flex-col items-center text-center md:pt-[150px] pt-[150px] px-5 md:px-0">
        <h1 className="max-w-[700px] text-[20px] md:text-[28px] font-semibold text-[#F7F7F7] mb-2">
          Autoswappr Overview
        </h1>
        <p className="text-center text-[14px] text-[#A199B8] max-w-[700px]">
          These are a list of all the tokens you have setup to be auto-swapped to a stable token. 
          To add more tokens to the list, click on the &apos;Add More Tokens&apos; Button below.
        </p>
        
        <div className="w-full min-w-[350px] overflow-x-auto max-w-[900px] mt-10">
          <table className="w-full border-collapse">
            <thead className="">
              <tr className="border-b border-[#1E1B24]  text-white">

                <th colSpan={2} className="py-3 px-4 font-[200] text-left">From</th>
                <th className="py-3 px-4 font-[200]"></th>
                <th className="py-3 px-4 font-[200] text-left">To</th>
                <th className="py-3 px-4 font-[200] text-left "><div className="ml-12 md:ml-0">Percentage</div></th>
                <th className="py-3 px-4 font-[200] text-left">Autoswappr</th>
              </tr>
            </thead>
            <tbody>
              {tokenPairs.map((pair, index) => (
                <tr 
                  key={pair.id} 
                  className=" hover:bg-[#100827]/20 transition-colors"
                >
                  <td className="py-4 px-4 text-[#A199B8]">{index + 1}.</td>
                  
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <Image 
                        src={pair.from.logo} 
                        alt={pair.from.name} 
                        width={32} 
                        height={32} 
                        className="rounded-full  w-6 h-6 md:w-8 md:h-8"
                      />
                      <div>
                        <div className="text-white text-sm md:text-base">{pair.from.name}</div>
                        <div className="text-[#A199B8] text-left text-xs  md:text-sm">{pair.from.symbol}</div>
                      </div>
                    </div>
                  </td>

                  <td className=" py-4 px-4">
                    <Image
                      src={arrow}
                      alt="arrow"
                      width={24}
                      height={24}
                      className="-rotate-90"
                    />
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <Image 
                        src={pair.to.logo} 
                        alt={pair.to.name} 
                        width={32} 
                        height={32} 
                        className="rounded-full w-6 h-6 md:w-8 md:h-8"
                      />
                      <div>
                        <div className="text-white text-sm md:text-base">{pair.to.name}</div>
                        <div className="text-[#A199B8] text-left text-xs  md:text-sm">{pair.to.symbol}</div>
                      </div>
                    </div>
                  </td>

                  <td className="py-4  px-4">
                    <div className="relative ml-12 md:ml-0 w-24">
                      <select
                        value={pair.percentage}
                        onChange={(e) => handlePercentageChange(e, pair.id)}
                        className="bg-[#100827] text-white p-2 text-center rounded-full text-sm outline-none w-full appearance-none pr-8"
                      >
                        <option value="25">25%</option>
                        <option value="50">50%</option>
                        <option value="75">75%</option>
                        <option value="100">100%</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="#A199B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 ml-auto px-4 text-right">
                    <ToggleButton />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <AdditionalButton/>
        </div>
        
      </div>
    </div>
  );
}
