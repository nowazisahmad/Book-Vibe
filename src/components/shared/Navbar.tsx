"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import Link from "next/link";
import logo from "@/assets/book.ico";
const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          className={pathname === "/" ? "border border-green-500 text-green-500" : ""}
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
        className={pathname === "/books" ? "border border-green-400 text-green-500" : ""}
        href="/books">Books</Link>
      </li>
      <li>
        <Link 
        className={pathname === "/listed-books" ? "border border-green-400 text-green-500" : ""}
        href="/listed-books">Listed Book</Link>
      </li>
      <li>
        <Link 
        className={pathname === "/read-books" ? "border border-green-400 text-green-500" : ""}
        href="/read-books">Pages to Read</Link>
      </li>
    </>
  );
  const butn = (
    <>
      <button className="btn btn-success">Sign In</button>
      <button className="btn btn-info">Sign Up</button>
    </>
  );

return (
  <nav className="bg-base-100 shadow-sm">
    <div className="flex justify-between items-center container mx-auto">
      <div className="flex items-center gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <Image className="h-[40px] w-[40px]" src={logo} alt="Logo image" />
          <Link href="/" className="text-xl font-bold">Book Vibe</Link>
        </div>
        
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="flex gap-3 items-center">
        {butn}
      </div>

    </div>
  </nav>
);
};

export default Navbar;