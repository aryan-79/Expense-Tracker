"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SideNav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <nav className="md:hidden h-screen absolute right-0 top-0 px-4 w-[150px] grid place-items-center bg-slate-700 text-white z-10">
        <X
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute right-5 top-8"
        />
        <ul className="space-y-12 text-center">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/add-expenses">Add Expenses</Link>
          </li>
          <li>
            <Link href="/analytics">Analytics</Link>
          </li>
          <li>{children}</li>
        </ul>
      </nav>
    );
  } else {
    return (
      <Menu className="md:hidden" onClick={() => setIsOpen((prev) => !prev)} />
    );
  }
};

export default SideNav;
