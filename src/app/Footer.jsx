import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="w-full mx-auto max-w-screen-xl px-4 py-6 md:flex md:items-center md:justify-between">
        {/* Left Section - Copyright */}
        <div className="flex items-center space-x-3">
          <img src="/logo1.png" alt="NxtArray logo" className="h-6 w-auto" />
          <span className="text-sm text-slate-600">
            © 2025 <a href="https://nxtarray.com/" className="hover:underline text-blue-700">NxtArray™</a>. All Rights Reserved.
          </span>
        </div>

        {/* Middle Section - Social Media Links */}
        <div className="flex items-center space-x-5 mt-4 md:mt-0">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-700"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-700"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-700"
          >
            <Linkedin size={20} />
          </Link>
        </div>

        {/* Right Section - Navigation Links */}
        <ul className="flex flex-wrap items-center mt-4 text-sm font-medium text-slate-600 sm:mt-0">
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6 hover:text-blue-700">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/career" className="hover:underline me-4 md:me-6 hover:text-blue-700">
              Career
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline me-4 md:me-6 hover:text-blue-700">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
