'use client'
import { useState } from "react";
import Link from "next/link";

export function SiteHeader() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container flex h-20 items-center justify-between">
      {/* Left section with logo */}
      <div className="flex w-[150px] items-center gap-2">
        <div className="rounded-lg bg-purple-100 p-2">
          <div className="h-6 w-6 text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          </div>
        </div>
        <span className="text-xl text-black font-bold">uiAid</span>
      </div>

      {/* Center section with navigation */}
      <nav
        className={`fixed top-0 left-0 z-40 flex h-screen w-full flex-col items-center gap-6 bg-white p-8 transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:h-auto md:w-auto md:flex-row md:transform-none md:bg-transparent md:p-0`}
      >
        <Link
          href="#"
          className="text-sm font-semibold text-gray-400 transition-colors hover:text-purple-600"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-semibold text-gray-400 transition-colors hover:text-purple-600"
        >
          Work
        </Link>
        <Link
          href="#"
          className="text-sm font-semibold text-gray-400 transition-colors hover:text-purple-600"
        >
          Research
        </Link>
        {/* Close button for mobile menu */}
        <button
          className="mt-6 rounded-full bg-gray-200 p-2 text-gray-600 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      {/* Right section with login button */}
      <div className="w-[150px] flex justify-end">
        <button className="hidden md:block rounded-full border border-violet-300 px-4 py-2 text-sm font-medium text-violet-700 transition-colors hover:bg-gray-50">
          Login
        </button>
      </div>

      {/* Hamburger menu button */}
      <button
        className="block md:hidden rounded-full bg-gray-200 p-2 text-gray-600"
        onClick={() => setMobileMenuOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </header>
  );
}
