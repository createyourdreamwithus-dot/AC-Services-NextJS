"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        <Link
          href="/"
          aria-label="Rajan Service Home"
          className="block flex-shrink-0 w-40"
        >
          <Image
            src="/images/Logo/Logo.png"
            alt="Rajan Service Logo"
            width={160}
            height={64}
            style={{ objectFit: "contain", height: "auto" }}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="/about" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-900">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 text-2xl"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-600 font-medium">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-900"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
