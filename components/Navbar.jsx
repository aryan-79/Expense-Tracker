// "use client";
// import { Menu } from "lucide-react";
import Link from "next/link";
// import { useState } from "react";
import SideNav from "./SideNav";
import AuthLinkButton from "./AuthLinkButton";
const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="h=20 py-6 flex justify-between items-center text-nowrap">
      <Link href="/" className="text-4xl font-bold">
        Logo
      </Link>
      {/* Desktop nav */}
      <ul className="hidden md:flex gap-12 text-nowrap justify-between">
        <li className="font-semibold hover:text-gray-500">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="font-semibold hover:text-gray-500">
          <Link href="/add-expenses">Add Expenses</Link>
        </li>
        <li className="font-semibold hover:text-gray-500">
          <Link href="/analytics">Analytics</Link>
        </li>
      </ul>
      <div className="hidden md:block">
        <AuthLinkButton />
      </div>
      <SideNav>
        <AuthLinkButton />
      </SideNav>
    </nav>
  );
};

export default Navbar;

// <Link
//   href="/login"
//   className="hidden md:block bg-indigo-600 px-4 py-2 rounded-xl text-white hover:bg-indigo-700"
// >
//   Login
// </Link>

// {/* Mobile Nav */}
// {isOpen ? (
//   <SideNav setIsOpen={setIsOpen} />
// ) : (
//   <Menu
//     className="md:hidden"
//     onClick={() => setIsOpen((prev) => !prev)}
//   />
// )}
