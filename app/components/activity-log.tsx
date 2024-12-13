import btc from "../../public/coin-logos-svg/btc-logo.svg";
import eth from "../../public/coin-logos-svg/eth-logo.svg";
import sol from "../../public/coin-logos-svg/sol-logo.svg";
import graph from "../../public/coin-logos-svg/graph-logo.svg";
import strk from "../../public/coin-logos-svg/strk-logo.svg";
import usdc from "../../public/coin-logos-svg/usdc-logo.svg";
import usdt from "../../public/coin-logos-svg/usdt-logo.svg";
import Image from "next/image";

const activityLog = [
  {
    from: {
      fromImage: btc,
      toImage: usdc,
      coinFrom: "bitcoin",
      coinTo: "USDC",
    },
    to: {
      coinTo: "USDC",
      coinToAmount: 1220,
      coinFrom: "BTC",
      coinFromAmount: 0.0002,
    },
    percentage: 25,
    date: {
      day: "10.09.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: btc,
      toImage: usdt,
      coinFrom: "bitcoin",
      coinTo: "USDT",
    },
    to: {
      coinTo: "USDT",
      coinToAmount: 30,
      coinFrom: "strk",
      coinFromAmount: 900,
    },
    percentage: 75,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: graph,
      toImage: usdt,
      coinFrom: "the graph",
      coinTo: "USDT",
    },
    to: {
      coinTo: "USDT",
      coinToAmount: 30,
      coinFrom: "GRT",
      coinFromAmount: 200,
    },
    percentage: 50,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: strk,
      toImage: usdc,
      coinFrom: "starknet",
      coinTo: "USDC",
    },
    to: {
      coinTo: "USDC",
      coinToAmount: 30,
      coinFrom: "strk",
      coinFromAmount: 900,
    },
    percentage: 100,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: eth,
      toImage: usdc,
      coinFrom: "ethereum",
      coinTo: "USDC",
    },
    to: {
      coinTo: "USDC",
      coinToAmount: 2500,
      coinFrom: "eth",
      coinFromAmount: 0.7,
    },
    percentage: 25,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: sol,
      toImage: usdt,
      coinFrom: "solana",
      coinTo: "USDT",
    },
    to: {
      coinTo: "USDT",
      coinToAmount: 3000,
      coinFrom: "sol",
      coinFromAmount: 10,
    },
    percentage: 25,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
  {
    from: {
      fromImage: btc,
      toImage: usdc,
      coinFrom: "Bitcoin",
      coinTo: "USDT",
    },
    to: {
      coinTo: "USDT",
      coinToAmount: 10,
      coinFrom: "strk",
      coinFromAmount: 900,
    },
    percentage: 25,
    date: {
      day: "21.12.2024",
      time: "GMT 21:08 PM",
    },
  },
];

const ActivityLog = () => {
  return (
    <>
      <section className="bg-cover bg-main-bg md:bg-inherit bg-center bg-no-repeat mt-10 pt-[160px] md:mt-0 pb-12 mx-auto leading-[19.7px] h-[100vh]">
        <h1 className="text-center capitalize p-0 mb-8 text-lg md:text-2xl lg:text-3xl font-[600] text-main-white">
          Autoswappr Activity log
        </h1>
        {/* desktop */}
        <table className="group relative hidden px-4 sm:flex sm:flex-col w-[96%] md:w-[88%] lg:w-[64%] max-w-[800px] overflow-auto scrollbar-hide max-h-[576px] md:max-h-[600px] mx-auto items-center justify-start">
          <thead className="w-full">
            <tr className="flex justify-between capitalize font-normal text-xs md:text-sm w-full border-b-[#170F2E] border-b pb-3 place-content-end">
              <th>from</th>
              <th>to</th>
              <th>percentage</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {activityLog.map((data, index) => {
              return (
                <tr
                  className="grid grid-cols-4 place-content-between capitalize font-medium w-full py-5"
                  key={index}
                >
                  <td className="flex items-center gap-[12px]">
                    <h1 className="text-[#433B5A]">{index + 1}.</h1>
                    <div className="flex gap-8 items-center">
                      <div className="flex flex-none w-auto relative">
                        <Image
                          src={data.from.fromImage}
                          alt="coin from"
                          className="w-6 h-6 flex-none"
                        />
                        <Image
                          src={data.from.toImage}
                          alt="coin to"
                          className="absolute left-5 flex-none"
                        />
                      </div>
                      <div className="capitalize text-main-white">
                        <h2 className="text-sm md:text-base">{data.from.coinFrom}</h2>
                        <h3 className="text-[#433B5A] text-xs md:text-sm">
                          {data.from.coinTo}
                        </h3>
                      </div>
                    </div>
                  </td>
                  <td className="uppercase text-main-white place-self-center text-left">
                    <h2 className="text-sm md:text-base">
                      {data.to.coinFromAmount} {data.to.coinFrom}
                    </h2>
                    <h3 className="text-[#433B5A] text-xs md:text-sm">
                      {data.to.coinToAmount} {data.to.coinTo}
                    </h3>
                  </td>
                  <td className="bg-[#100827] rounded-full w-fit h-fit place-self-center px-6 py-3">
                    <span className="text-xs md:text-sm">{data.percentage}%</span>
                  </td>
                  <td className="uppercase text-main-white place-self-end">
                    <h2 className="text-base">{data.date.day}</h2>
                    <h3 className="text-[#433B5A] text-sm">{data.date.time}</h3>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* mobile */}
        <table className="sm:hidden leading-[19.07px] max-h-[400px] overflow-auto scrollbar-hide w-full max-w-[94%] mx-auto">
          <thead>
            <tr className="capitalize text-main-white flex justify-between border-b border-[#433B5A] pb-3">
              <th>token</th>
              <th>amount</th>
            </tr>
          </thead>
          <tbody className="capitalize text-main-white flex flex-col justify-between">
            {activityLog.map((data, index) => {
              return (
                <tr className="py-5 flex justify-between w-full" key={index}>
                  <td className="flex items-center gap-[12px]">
                    <h1 className="text-[#433B5A]">{index + 1}</h1>
                    <div className="flex gap-10 items-center">
                      <div className="flex relative">
                        <Image
                          src={data.from.fromImage}
                          alt="coin from"
                          className="w-6 h-6"
                        />
                        <Image
                          src={data.from.toImage}
                          alt="coin to"
                          className="absolute left-5"
                        />
                      </div>
                      <div className="capitalize text-main-white">
                        <h2 className="text-sm">{data.from.coinFrom}</h2>
                        <h3 className="text-[#433B5A] text-xs">
                          {data.from.coinTo}
                        </h3>
                      </div>
                    </div>
                  </td>
                  <td className="uppercase text-main-white text-start">
                    <h2 className="font-normal text-sm text-start">
                      {data.to.coinFromAmount} {data.to.coinFrom}
                    </h2>
                    <h3 className="text-[#433B5A] font-semibold text-xs text-start">
                      {data.to.coinToAmount} {data.to.coinTo}
                    </h3>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default ActivityLog;
