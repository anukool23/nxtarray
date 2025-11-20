import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="w-full mx-auto max-w-screen-xl px-4 py-8 md:flex md:items-center md:justify-between">
        
        {/* Left */}
        <div className="flex items-center space-x-3">
          <img src="/logo1.png" alt="NxtArray logo" className="h-7 w-auto" />
          <span className="text-base text-slate-700 tracking-wide">
            © 2025
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 mt-6 md:mt-0">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-200 group-hover:bg-blue-600 transition-all group-hover:scale-110">
              <Facebook className="text-blue-600 group-hover:text-white" size={20} strokeWidth={1.8} />
            </div>
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            className="group"
          >
            <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center border border-pink-200 group-hover:bg-pink-600 transition-all group-hover:scale-110">
              <Instagram className="text-pink-600 group-hover:text-white" size={20} strokeWidth={1.8} />
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/company/nxt-array/"
            target="_blank"
            className="group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-200 group-hover:bg-blue-700 transition-all group-hover:scale-110">
              <Linkedin className="text-blue-700 group-hover:text-white" size={20} strokeWidth={1.8} />
            </div>
          </Link>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap items-center mt-6 gap-6 text-base font-medium text-slate-700 tracking-wide md:mt-0">
          <li>
            <Link href="/about" className="hover:text-blue-700 hover:underline underline-offset-4 transition-all">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/career" className="hover:text-blue-700 hover:underline underline-offset-4 transition-all">
              Career
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-700 hover:underline underline-offset-4 transition-all">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
