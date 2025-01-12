"use client";
import React, { useState } from "react";
import WalletBar from "./WalletBar";
import Image from "next/image";
import Logo from "@/public/autoswappr.png";
import { X } from "lucide-react";
import menu from "@/public/menu-11.svg";
import MobileMenu from "./mobile-menu";
import { createPortal } from "react-dom";
import LockBodyScroll from "./lock-body-scroll";
// import Link from "next/link";
// import { TetherLogo } from "@/assets/general";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Activity", href: "/activity-log" },
    { title: "Dex", href: "/dex" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#000014] bg-opacity-80 backdrop-blur-sm px-6 md:px-[80px] z-20 py-5 md:py-[14px] flex items-center justify-between">
      <LockBodyScroll lock={isMenuOpen} />
      {isMenuOpen &&
        createPortal(
          <MobileMenu
            navLinks={navLinks}
            closeMenu={() => setIsMenuOpen(false)}
          />,
          document.body
        )}
      <div className="flex items-center gap-x-[137px]">
        {/* Logo */}
        <button
          className="flex items-center cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img
            src="/auto-swappr-logo.png"
            className="w-[200px] hidden md:inline-block"
            alt=""
          />
          <img
            src="/auto-swappr-logo-icon.svg"
            className="md:hidden inline-block w-[24px]"
            alt=""
          />
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 md:left-[300px]">
          {navLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className=" text-[#e7ecf0] text-sm md:text-lg  hover:text-white transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Connect Wallet Button */}
      <div className="hidden md:flex items-center">
        <WalletBar />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={24} />
        ) : (
          <Image src={menu} alt="menu icon" width={24} height={24} />
        )}
      </button>

      {/* {isMenuOpen && (
        <div className="mt-10 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-primaryText text-base hover:text-[#49ABD2]">
              Home
            </Link>
            <Link href="#" className="text-primaryText text-base hover:text-[#49ABD2]">
              Activity
            </Link>
            <Link href="/dex" className="text-primaryText text-base hover:text-[#49ABD2]">
              Dex
            </Link>
          </div>

          <div className="mt-6 flex flex-col  space-y-4">
            <div className="flex items-center justify-center gap-x-2 bg-[#100827] rounded-full px-4 py-2">
              <TetherLogo />
              <span className="text-primaryText text-sm">USDT: $114,000</span>
            </div>
            <WalletBar />
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
