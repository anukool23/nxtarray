"use client";

import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { serviceGroups } from "./servicegroups";
import { productGroups } from "./productGroups";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // "services" or "products"

  const open = (menu) => setOpenMenu(menu);
  const close = () => setOpenMenu(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/75 border-b border-slate-200/60 shadow-sm">
      <div className="mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo1.png" className="h-8 w-auto" alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => open("services")}
              onMouseLeave={close}
            >
              <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition font-medium">
                Services <ChevronDown className="w-4 h-4" />
              </button>

              {openMenu === "services" && (
                <div className="absolute left-0 top-full z-50 pt-0">
                  {/* Hover Buffer Shield */}
                  <div className="absolute -top-3 left-0 right-0 h-3"></div>

                  <div className="w-[330px] rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-lg p-4">
                    {serviceGroups.map(({ slug, title, subtitle, icon: Icon }) => (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-blue-50 transition"
                      >
                        <Icon className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-semibold text-slate-900">{title}</div>
                          <div className="text-slate-500 text-sm">{subtitle}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* PRODUCTS */}
            <div
              className="relative"
              onMouseEnter={() => open("products")}
              onMouseLeave={close}
            >
              <button className="flex items-center gap-1 text-slate-700 hover:text-purple-600 transition font-medium">
                Products <ChevronDown className="w-4 h-4" />
              </button>

              {openMenu === "products" && (
                <div className="absolute left-0 top-full z-50 pt-0">
                  <div className="absolute -top-3 left-0 right-0 h-3"></div>

                  <div className="w-[330px] rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-lg p-4">
                    {productGroups.map(({ slug, title, subtitle, icon: Icon }) => (
                      <Link
                        key={slug}
                        href={`/products/${slug}`}
                        className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-purple-50 transition"
                      >
                        <Icon className="w-5 h-5 text-purple-600" />
                        <div>
                          <div className="font-semibold text-slate-900">{title}</div>
                          <div className="text-slate-500 text-sm">{subtitle}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-slate-700 hover:text-blue-600 transition font-medium">About</Link>
            <Link href="/career" className="text-slate-700 hover:text-blue-600 transition font-medium">Careers</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="text-slate-600 hover:text-blue-700 transition">
              <Search className="w-5 h-5" />
            </button>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu stays same */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 px-6 py-6 flex flex-col gap-5">
          <div>
            <div className="font-medium text-slate-800 mb-2">Services</div>
            {serviceGroups.map(({ slug, title }) => (
              <Link key={slug} href={`/services/${slug}`} onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-blue-600 pl-2">
                {title}
              </Link>
            ))}
          </div>

          <div>
            <div className="font-medium text-slate-800 mb-2">Products</div>
            {productGroups.map(({ slug, title }) => (
              <Link key={slug} href={`/products/${slug}`} onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-purple-600 pl-2">
                {title}
              </Link>
            ))}
          </div>

          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-blue-600 font-medium">
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}
