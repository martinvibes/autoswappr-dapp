"use client";
import React, { useState } from "react";
import { Open_Sans } from "next/font/google";
import btc from "../../public/coin-logos/btc-logo.png";
import eth from "../../public/coin-logos/eth-logo.png";
import strk from "../../public/coin-logos/strk-logo.png";
import alt from "../../assets/alt.png";
import type { StaticImageData } from "next/image";

import Image from "next/image";
const openSans = Open_Sans({ subsets: ["latin"] });

type Coin = {
  key: string;
  imgLink: StaticImageData | string;
  coinName: string;
  coinSymbol: string;
};

const Selecttokens = () => {
  const coins: Coin[] = [
    { key: "bitcoin", imgLink: strk, coinName: "Bitcoin", coinSymbol: "BTC" },
    { key: "ethereum", imgLink: eth, coinName: "Ethereum", coinSymbol: "ETH" },
    { key: "dogecoin", imgLink: eth, coinName: "Dogecoin", coinSymbol: "DOGE" },
    { key: "litecoin", imgLink: btc, coinName: "Litecoin", coinSymbol: "LTC" },
    { key: "ripple", imgLink: alt, coinName: "Ripple", coinSymbol: "XRP" },
    { key: "cardano", imgLink: alt, coinName: "Cardano", coinSymbol: "ADA" },
    { key: "polkadot", imgLink: alt, coinName: "Polkadot", coinSymbol: "DOT" },
    { key: "solana", imgLink: alt, coinName: "Solana", coinSymbol: "SOL" },
    {
      key: "binanceCoin",
      imgLink: alt,
      coinName: "Binance Coin",
      coinSymbol: "BNB",
    },
    {
      key: "avalanche",
      imgLink: alt,
      coinName: "Avalanche",
      coinSymbol: "AVAX",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCoins, setSelectedCoins] = useState<string[]>([]);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.coinName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.coinSymbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCoinSelection = (coinKey: string) => {
    setSelectedCoins((prev) =>
      prev.includes(coinKey)
        ? prev.filter((key) => key !== coinKey)
        : [...prev, coinKey]
    );
  };

  return (
    <div className=" w-full  pt-[180px] items-center justify-center flex">
      <div
        className={`shadow-lg rounded w-[350px] sm:w-[800px] ${openSans.className}  h-[660px] flex justify-center flex-col items-center`}
      >
        <div className=" w-[80%] flex items-center justify-between">
          <p className="none sm:block"></p>
          <p className="font-[600]  text-center sm:text-left text-[20px] sm:text-[24px] ">
            Select token(s) to auto-swap from
          </p>
          <div className="none sm:block">
            <CloseButton />
          </div>
        </div>
        <br />
        <p className="text-center font-normal text-[14px] sm:text-[16px]  leading-[22px] w-[318px] sm:w-[620px] ">
          You can select multiple tokens to auto-swap from here. You can select
          how many percent of that token should be auto-swapped whenever you get
          funded.
        </p>
        <br />

        <form className="mx-auto flex items-center justify-center flex-col">
          <div className="relative bg-[#100827] px-4 py-2 flex items-center justify-between w-[318px] sm:w-[704px] rounded-full">
            <input
              type="search"
              className="w-[600px] bg-[#100827] text-[14px] p-1 text-white border-none focus:outline-none focus:border-none focus:no-underline  "
              placeholder="Search tokens..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <SearchIcon />
          </div>
          <br />
          <div className="flex  w-[318px] sm:w-[704px] flex-col">
            <div className="flex  items-center  gap-2">
              <TimeIcon />
              <p>Selected tokens</p>
            </div>
            <div className="grid mt-4 grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-4 ">
              {filteredCoins.map((coin) => (
                <div
                  key={coin.key}
                  onClick={() => toggleCoinSelection(coin.key)}
                  className={`sm:w-[224px] w-[150px] h-[48px] rounded-full border-[#170F2E] py-1 px-2 grid grid-cols-[24px_auto_30px] sm:grid-cols-[35px_auto_30px] cursor-pointer 
                    ${selectedCoins.includes(coin.key) ? "bg-[#0F96E3]/10" : ""}`}
                >
                  <div className="items-center justify-center flex">
                    <Image
                      src={coin.imgLink}
                      alt={coin.coinName}
                      width={24}
                      height={24}
                      className="sm:w-8 sm:h-8 "
                    />
                  </div>
                  <div className="flex pl-2 flex-col items-start justify-between text-center">
                    <p className="text-[14px] sm:text-[16px] font-normal sm:font-semibold">
                      {coin.coinName}
                    </p>
                    <p className="capitalize text-[12px] sm:text-[13px] text-[#433B5A]">
                      {coin.coinSymbol}
                    </p>
                  </div>
                  <div className="items-center justify-center flex">
                    {selectedCoins.includes(coin.key) ? <CheckIcon /> : <UncheckedIcon /> }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
        <br />
        <hr className="border-[#100827] w-[704px]" />
        <br />
        <button
          className="w-[318px] sm:w-[704px] text-white bg-[#100827] h-[60px] rounded-[32px]"
          disabled={selectedCoins.length === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export const CloseButton = () => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8337 4.6665L4.16699 16.3332M4.16699 4.6665L15.8337 16.3332"
        stroke="#F9F9F9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5835 14.5833L18.3335 18.3333"
        stroke="#BABABA"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6665 9.16675C16.6665 5.02461 13.3087 1.66675 9.1665 1.66675C5.02437 1.66675 1.6665 5.02461 1.6665 9.16675C1.6665 13.3089 5.02437 16.6667 9.1665 16.6667C13.3087 16.6667 16.6665 13.3089 16.6665 9.16675Z"
        stroke="#BABABA"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TimeIcon = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.84641 2.16675C5.66503 2.2316 5.48721 2.3037 5.31335 2.38268M3.61684 3.47719C3.46584 3.6096 3.32087 3.74845 3.18239 3.89327M2.02135 5.54325C1.89749 5.79211 1.78892 6.04956 1.69682 6.31443M1.34422 8.09435C1.32941 8.35395 1.32997 8.61861 1.34573 8.87828M1.71246 10.6773C1.80114 10.9265 1.90444 11.1691 2.02135 11.4039M3.1274 12.9957C3.29021 13.1701 3.46231 13.336 3.64293 13.4928M5.18439 14.5043C5.44731 14.6303 5.71967 14.7405 6.00016 14.8334"
        stroke="#433B5A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 15.1666C11.6819 15.1666 14.6667 12.1818 14.6667 8.49992C14.6667 4.81802 11.6819 1.83325 8 1.83325"
        stroke="#433B5A"
        strokeLinecap="round"
      />
      <path
        d="M8 9.5C8.55227 9.5 9 9.05227 9 8.5C9 7.94773 8.55227 7.5 8 7.5M8 9.5C7.44773 9.5 7 9.05227 7 8.5C7 7.94773 7.44773 7.5 8 7.5M8 9.5V11.1667M8 7.5V4.5"
        stroke="#433B5A"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const CheckIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        fill="#0F96E3"
      />
      <path
        d="M8 12.5L10.5 15L16 9"
        stroke="#F9F9F9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UncheckedIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        stroke="#433B5A"
      />
      <path
        d="M8 12.5L10.5 15L16 9"
        stroke="#433B5A"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default Selecttokens;
