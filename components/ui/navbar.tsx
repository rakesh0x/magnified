"use client";
import React, { useEffect, useState } from "react";

export  function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // trigger after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2" // after scroll
          : "bg-transparent py-4" // initial
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

        {/* Links */}
        <ul className="flex space-x-6">
          {["Home", "Gallery", "Pricing", "FAQs"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer transition-colors ${
                scrolled ? "text-gray-800 hover:text-black" : "text-white hover:text-gray-200"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
