"use client";

import { useState } from "react";
import { Menu, X, Search, Mail } from "lucide-react";
import Link from "next/link";

// Navigation links
const NAV_LINKS = [
    { name: "Services", href: "/ServicesSection" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/career" },
    { name: "Why Us", href: "/WhyUs" },
    { name: "Product", href: "/" },
];

// Contact button styles
const contactButtonClasses =
    "bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:from-pink-700 hover:to-pink-600 transition";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-50 bg-gray-100/90 backdrop-blur-md text-gray-900">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link
                        href="/"
                        className="flex-shrink-0 flex items-center h-16"
                    >
                        <img
                            src="/logo1.png"
                            alt="Illustration"
                            className="max-h-full w-auto"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                            key={link.name}
                            href={link.href}
                            className="block font-normal text-base hover:font-bold hover:text-sky-950 transform hover:scale-110 transition-all duration-300"
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
                            <Link href="/contact">Contact us</Link>
                        </button>

                        {/* Mobile Contact Icon */}
                        <button
                            className="md:hidden bg-pink-600 text-white rounded-full p-3 hover:bg-pink-700 transition shadow-md"
                            aria-label="Contact us"
                        >
                            <Link href="/contact">
                                <Mail className="w-6 h-6" />
                            </Link>
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
                    </div>
                </div>
            )}
        </nav>
    );
}
