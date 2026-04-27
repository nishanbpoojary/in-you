"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <Link href="/" className="font-serif text-white text-xl font-semibold tracking-wide">
          in<span className="italic">you</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/90 font-sans">
          <li><Link href="#" className="hover:text-white transition-colors">Shop</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Science</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Quiz</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
          <li><Link href="#" className="hover:text-white transition-colors">Consult</Link></li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="text-sm text-white/90 hover:text-white transition-colors font-sans"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="text-sm bg-white text-[#2C1F14] px-5 py-2 rounded-full font-medium hover:bg-white/90 transition-colors font-sans"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#2C1F14]/95 backdrop-blur-sm px-6 py-6 flex flex-col gap-5">
          {["Shop", "Science", "Quiz", "About Us", "Consult"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-white/90 text-base font-sans hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-white/20">
            <Link href="#" className="text-white/80 text-sm font-sans">Log in</Link>
            <Link
              href="#"
              className="text-sm bg-white text-[#2C1F14] px-5 py-2.5 rounded-full font-medium text-center font-sans"
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
