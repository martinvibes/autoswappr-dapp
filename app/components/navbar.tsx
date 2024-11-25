import Link from "next/link";
import ConnectWallet from "./connect-wallet";
import { TetherLogo } from "@/assets/general";
import { Logo } from "@/assets/navbar";

export default function Navbar() {
  return (
    <nav className="flex  absolute justify-between top-0 left-0 w-full bg-[#000014CC] bg-opacity-80 backdrop-blur-lg py-7 px-[80px]">

      <div className="flex items-center space-x-20">
        <div>
         <Logo />
        </div>

        <div className="flex items-center space-x-4 justify-between">
          <Link href="#" className="text-primaryText text-[1em] hover:text-[#49ABD2]">
            Home
          </Link>
          <Link href="#" className="text-primaryText text-[1em] hover:text-[#49ABD2]">
            Activity
          </Link>
          <Link href="#" className="text-primaryText text-[1em] hover:text-[#49ABD2]">
            Dex
          </Link>
        </div>
      </div>

      <div className="flex items-center  gap-x-3">
        <div className="flex items-center justify-center gap-x-4 bg-[#100827] rounded-full px-4 py-2">
            <TetherLogo />
            <span className="text-primaryText">USDT: $114,000</span>
        </div>
        <ConnectWallet />
      </div>
    </nav>
  );
}
