"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="bg-emerald-100 dark:bg-emerald-200 shadow-lg relative z-50">
      <div
        className="flex items-center w-full lg:flex lg:w-auto lg:order-1 bg-emerald-100 dark:bg-emerald-200 p-4 shadow-lg relative z-10"
        id="mobile-menu-2"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="order-first mr-2 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg lg:hidden hover:bg-gray-200 dark:text-gray-700 dark:hover:bg-gray-300"
          aria-controls="navbar"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center">
          <Link
            href="/"
            className="font-sans text-lg block py-2 pr-4 pl-3 mr-4 font-medium text-gray rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-600 flex items-center"
          >
            Aden Shire
          </Link>
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-emerald-100 dark:bg-emerald-200 shadow-xl p-4 z-30 transition-transform duration-300 ease-in-out lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent lg:dark:bg-transparent lg:shadow-none lg:p-0 lg:flex lg:items-center ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            id="navbar"
          >
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="ml-auto mb-4 flex items-center justify-center w-10 h-10 text-gray-600 rounded-lg lg:hidden hover:bg-gray-200 dark:text-gray-700 dark:hover:bg-gray-300"
            >
              <span className="sr-only">Close main menu</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <ul className="flex items-center flex-col font-medium lg:flex-row lg:space-x-8 lg:ml-4">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="font-sans block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-600 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 flex items-center"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className="font-sans block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-600 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 flex items-center"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="font-sans block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-600 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 flex items-center"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          type="button"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="ml-auto flex items-center justify-center w-10 h-10 rounded-full bg-emerald-200 hover:bg-emerald-300 dark:bg-emerald-300 dark:hover:bg-emerald-500 shadow text-xl leading-none"
        >
          {isDark ? "🌙" : "☀️"}
        </button>
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 z-20 bg-black/40 transition-opacity duration-300 lg:hidden ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        ></div>
      </div>
    </header>
  );
}
