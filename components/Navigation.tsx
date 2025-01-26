'use client';
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="main-nav bg-green-800 relative">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo section */}
        <div className="logo flex-shrink-0">
          <Link href="/" className="text-l sm:text-xl md:text-2xl text-white">
            Snappy Squirrel
          </Link>
        </div>
        
        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden sm:flex flex-grow">
          <ul className="flex space-x-6 text-white ml-auto">
            <li className="text-right"><Link href="/about" className="hover:text-gray-200">About</Link></li>
            <li className="text-right"><Link href="/contact" className="hover:text-gray-200">Contact</Link></li>
            <li className="text-right"><Link href="/parents" className="hover:text-gray-200">Parent and Teacher Corner</Link></li>
            <li className="text-right"><Link href="https://lunar-opinion-169.notion.site/A-Short-Book-About-Money-for-Beginners-187c5bca5d12808ab1edd079070f73ec" className="hover:text-gray-200">More Reading</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden w-full bg-blue-800 z-50`}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1">
          {[
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/parents", label: "Parent and Teacher Corner" },
            { href: "https://lunar-opinion-169.notion.site/A-Short-Book-About-Money-for-Beginners-187c5bca5d12808ab1edd079070f73ec", label: "More Reading" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
