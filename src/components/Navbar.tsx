"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "About Me", href: "/#about" },
        { name: "Education", href: "/#education" },
        { name: "Experience", href: "/#experience" },
        { name: "Personal Skill", href: "/#skill" },
        { name: "Brands", href: "/#brand" },
        { name: "Projects", href: "/projects" },
        { name: "Social Content", href: "/social-content" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#f7e9c3]/90 backdrop-blur-md border-b border-[#6d6d6d]">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between md:justify-end">

                {/* Logo/Tên hiển thị bên trái cho Mobile (Giúp Navbar đỡ trống) */}
                <div className="md:hidden font-spray text-xl text-[#d7427c] tracking-wider">
                    {"Mimi's portfolio"}
                </div>

                {/* === NÚT HAMBURGER (CHỈ HIỆN TRÊN MOBILE) === */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-stone-600 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* === GIAO DIỆN DESKTOP (Dàn hàng ngang) === */}
                <nav className="hidden md:flex gap-6 lg:gap-10 whitespace-nowrap">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-base text-stone-600 hover:text-[#d7427c] hover:font-bold transition-all duration-300 tracking-wider"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* === MENU XỔ XUỐNG CHO MOBILE === */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#f7e9c3]/95 backdrop-blur-md border-b border-[#6d6d6d] shadow-xl overflow-hidden"
                    >
                        <nav className="flex flex-col px-6 py-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-medium text-stone-700 hover:text-[#d7427c] transition-colors py-3 border-b border-stone-300/40 last:border-none"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}