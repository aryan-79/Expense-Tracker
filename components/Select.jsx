"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
const Select = ({ category, setCategory }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const categories = [
    "Entertainment",
    "Food",
    "Rent",
    "Utilities",
    "Groceries",
    "Transportation",
  ];
  return (
    <div className="space-x-4 relative flex gap-2">
      <span className="font-medium text-sm md:text-lg">Select Category</span>
      <span
        className="border-2 px-4 bg-gray-100 text-gray-600 text-sm md:text-lg flex gap-2 cursor-pointer"
        onClick={() => setOpenOptions((prev) => !prev)}
      >
        {category}
        <ChevronDown />
      </span>
      {openOptions && (
        <ul className="px-4 absolute left-[35%] top-0 border-2 bg-gray-100 flex flex-col">
          {categories.map((item) => (
            <li
              key={item}
              className="cursor-pointer"
              onClick={() => {
                setCategory(item);
                setOpenOptions(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
