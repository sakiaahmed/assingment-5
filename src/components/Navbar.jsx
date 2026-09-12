import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:grid md:grid-cols-3">
          {/* LEFT: hamburger (mobile) / logo (desktop) */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <a href="#" className="hidden md:flex items-center">
              <img src="/logo-text.png" alt="Dev Stack" className="h-8" />
            </a>
          </div>

          {/* CENTER: logo (mobile) / nav links (desktop) */}
          <div className="flex justify-center">
            <a href="#" className="md:hidden flex items-center">
              <img src="/logo-text.png" alt="Dev Stack" className="h-8" />
            </a>
            <div className="hidden md:flex items-center gap-8">
              {["Home", "Technologies", "Projects", "About", "Contact"].map((link) => (
                <a key={link} href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Sign In / Sign Up */}
          <div className="flex items-center justify-end gap-3">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden sm:block">
              Sign In
            </button>
            <button className="gradient-brand text-white text-sm font-semibold px-4 py-2 rounded-full">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          {["Home", "Technologies", "Projects", "About", "Contact"].map((link) => (
            <a key={link} href="#" className="block text-sm font-medium text-gray-700">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}