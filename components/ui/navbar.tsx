"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // use lucide-react icons (or Heroicons)

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div
          className={`text-xl font-bold transition-colors ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          Magnified
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "Gallery", "Pricing", "FAQs"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer transition-colors ${
                scrolled
                  ? "text-gray-800 hover:text-black"
                  : "text-white hover:text-gray-200"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X
              className={`h-6 w-6 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col space-y-4 px-6 py-4 ${
            scrolled ? "bg-white shadow-md" : "bg-black/80"
          }`}
        >
          {["Home", "Gallery", "Pricing", "FAQs"].map((item) => (
            <span
              key={item}
              className={`cursor-pointer ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
}
