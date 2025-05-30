import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div
        className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1 bg-emerald-100 dark:bg-emerald-200 p-4 shadow-lg relative z-10"
        id="mobile-menu-2"
      >
        <ul className="flex items-center flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a
              className="font-sans text-lg block py-2 pr-4 pl-3 text-gray rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-500 flex items-center"
            >
              Aden Shire
            </a>
          </li>
          <li>
            <Link
              href="/"
              className="font-sans block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 flex items-center"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="font-sans block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="font-sans block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
