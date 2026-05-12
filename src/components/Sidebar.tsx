"use client";

export default function Sidebar() {
    const navItems = [
        { name: "About Me", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Experience", href: "#experience" },
        { name: "Personal Skill", href: "#skill" },
        { name: "Brand", href: "#brand" },
        { name: "Project", href: "#project" },
        { name: "Social Content", href: "#social" },
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 flex-col justify-center pl-10 border-r border-slate-800 hidden md:flex">            <nav className="flex flex-col gap-8">
            {navItems.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className="text-lg text-slate-400 hover:text-white transition-colors duration-300 font-medium tracking-wider"
                >
                    {item.name}
                </a>
            ))}
        </nav>
        </aside>
    );
}