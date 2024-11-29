"use client";
import { useState } from "react";

function SelectOption() {
  const [percentage, setPercentage] = useState<string | null>(null);
  const handlePercentageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPercentage(e.target.value);
  };

  return (
    <select
      value={percentage || ""}
      onChange={handlePercentageChange}
      className="p-[16px] bg-[#100827] rounded-3xl text-sm outline-none"
    >
      <option value="25%"></option>
      <option value="50%"></option>
      <option value="75%"></option>
      <option value="100%"></option>
    </select>
  );
}

export default SelectOption;
