"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = ["Features", "Demo", "How it works", "Stats", "Contact", "Pricing"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%] flex items-center justify-between px-6 py-3 rounded-2xl backdrop-blur-lg bg-black/40 border border-white/10 shadow-xl"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700" />
        <span className="text-white font-semibold text-lg">Magnified</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-gray-200">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replace(/ /g, "-")}`} className="hover:text-white transition">
            {link}
          </a>
        ))}
      </div>

      {/* Get Started Button */}
      <Button className="bg-purple-600 hover:bg-purple-700 rounded-2xl text-white shadow-lg">
        <span className="mr-2">⌨</span> Get Started
      </Button>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-3 left-0 w-full bg-black/50 backdrop-blur-md rounded-2xl flex flex-col items-center gap-4 p-4 md:hidden"
        >
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, "-")}`} className="text-gray-200 hover:text-white">
              {link}
            </a>
          ))}
          <Button className="bg-purple-600 hover:bg-purple-700 w-full rounded-2xl">Get Started</Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
