"use client";

import { useState } from "react";
import { Menu, X, Search, Mail } from "lucide-react";
import Link from "next/link";

// Navigation links - defined outside component to avoid re-creation
const NAV_LINKS = [
    { name: "Services", href: "#" },
    { name: "About", href: "#" },
    { name: "Careers", href: "/career" },
    { name: "Investors", href: "#" },
    { name: "Contact", href: "/contact" },
];

// Common button styles
const contactButtonClasses =
    "bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:from-pink-700 hover:to-pink-600 transition";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-[#0A1664] text-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex-shrink-0 text-lg font-bold italic tracking-wide"
                    >
                        NxtArray
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-gray-300 transition"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Desktop Contact Button */}
                        <button
                            className={`hidden md:block ${contactButtonClasses}`}
                        >
                            Contact us
                        </button>

                        {/* Mobile Contact Icon */}
                        <button
                            className="md:hidden bg-pink-600 text-white rounded-full p-3 hover:bg-pink-700 transition shadow-md"
                            aria-label="Contact us"
                        >
                            <Mail className="w-6 h-6" />
                        </button>

                        {/* Search Icon */}
                        <button
                            aria-label="Search"
                            className="p-1 hover:text-gray-300 transition"
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden focus:outline-none"
                            onClick={toggleMenu}
                            aria-expanded={isOpen}
                            aria-label="Toggle navigation"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-700">
                    <div className="px-4 py-3 space-y-2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block hover:text-gray-300 transition"
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className={contactButtonClasses}>
                            <Link href="/contact">Contact us</Link>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
