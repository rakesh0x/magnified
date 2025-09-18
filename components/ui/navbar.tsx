"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Geist } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
});

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 transition-all duration-300`}
    >
      <div
        className={`backdrop-blur-xl rounded-2xl border border-white/20 px-6 py-3 shadow-lg transition-all duration-300 flex justify-between items-center
          ${
            scrolled
              ? "bg-white/20 shadow-xl"
              : "bg-white/10 shadow-md"
          }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
          WebkitBackdropFilter: "blur(20px)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Logo */}
        <div
          className={`${geistSans.className} text-xl font-bold text-white drop-shadow-md`}
        >
          Magnified
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "Gallery", "Pricing", "FAQs"].map((item) => (
            <li
              key={item}
              className={`${geistSans.className} text-white/90 hover:text-white cursor-pointer transition-colors`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA / Mobile Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/20 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`md:hidden mt-2 backdrop-blur-xl rounded-2xl border border-white/20 px-6 py-4 flex flex-col space-y-4 transition-all duration-300 shadow-lg`}
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
            WebkitBackdropFilter: "blur(20px)",
            backdropFilter: "blur(20px)",
          }}
        >
          {["Home", "Gallery", "Pricing", "FAQs"].map((item) => (
            <span
              key={item}
              className={`${geistSans.className} text-white/90 hover:text-white cursor-pointer transition`}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
}

