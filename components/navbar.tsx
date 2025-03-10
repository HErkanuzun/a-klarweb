"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Building2, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Ana Sayfa", href: "/" },
    { title: "Projelerimiz", href: "/projeler" },
    { title: "Gelecek Projeler", href: "/gelecek-projeler" },
    { title: "Hakkımızda", href: "/hakkimizda" },
    { title: "İletişim", href: "/iletisim" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">Açıklar İnşaat</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "md:hidden overflow-hidden bg-white border-b",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}