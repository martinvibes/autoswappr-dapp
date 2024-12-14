"use client";
import React, { useState } from "react";

function toggleButton() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`relative flex h-5 w-9 cursor-pointer items-center rounded-[33px] p-1 transition-colors duration-300 md:h-12 md:w-24 ${enabled ? "bg-[#0F96E3]" : " bg-[#100827]"}`}
    >
      <span className={`absolute left-6 text-[10px] font-medium md:text-base ${enabled ? "text-white" : "hidden"}`}>
        ON
      </span>
      <span className={`absolute right-5 text-[10px] font-medium md:text-base ${!enabled ? "text-white" : "hidden"}`}>
        OFF
      </span>
      <div
        className={`h-2 w-2 transform rounded-full bg-white shadow-md transition-transform duration-300 md:h-8 md:w-8 ${enabled ? "translate-x-5 md:translate-x-14" : "translate-x-0"}`}
      />
    </div>
  );
}

export default toggleButton;
