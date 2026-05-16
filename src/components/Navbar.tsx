"use client";

import Link from "next/link"; // Import thư viện Link của Next.js

export default function Navbar() {
    const navItems = [
        { name: "About Me", href: "/#about" },
        { name: "Education", href: "/#education" },
        { name: "Experience", href: "/#experience" },
        { name: "Personal Skill", href: "/#skill" },
        { name: "Brand", href: "/#brand" },
        { name: "Project", href: "/projects" },
        { name: "Social Content", href: "/#social" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#f7e9c3]/80 backdrop-blur-md border-b border-stone-300">
            <div className="w-full mx-auto px-6 h-16 flex items-center justify-center md:justify-end overflow-x-auto no-scrollbar">
                <nav className="flex gap-6 md:gap-10 whitespace-nowrap px-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm md:text-base text-stone-500 hover:text-pink-600 hover:font-bold transition-all duration-300 tracking-wider"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}