"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-2" : isMenuOpen ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-semibold text-teal-700 flex items-center">
            <span className="hidden sm:inline">Dr.</span> Serena Blake
            {scrolled && (
              <span className="ml-2 text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded-full hidden sm:inline-block">
                Psychologist
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/#about" 
              className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-500 transition-colors px-1 py-2`}
            >
              About
            </Link>
            <Link 
              href="/#services" 
              className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-500 transition-colors px-1 py-2`}
            >
              Services
            </Link>
            <Link 
              href="/#faq" 
              className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-500 transition-colors px-1 py-2`}
            >
              FAQ
            </Link>
            <Link 
              href="/#contact" 
              className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-500 transition-colors px-1 py-2`}
            >
              Contact
            </Link>
            <Link 
              href="/#contact" 
              className="bg-teal-600 text-white px-5 py-2 rounded-md hover:bg-teal-700 transition-colors ml-2"
            >
              Book a Free Consult
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            aria-label="Toggle menu"
            className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'} p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md`}
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/#about" 
                className="text-gray-700 hover:text-teal-600 transition-colors py-2 pl-2 border-l-4 border-transparent hover:border-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/#services" 
                className="text-gray-700 hover:text-teal-600 transition-colors py-2 pl-2 border-l-4 border-transparent hover:border-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/#faq" 
                className="text-gray-700 hover:text-teal-600 transition-colors py-2 pl-2 border-l-4 border-transparent hover:border-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/#contact" 
                className="text-gray-700 hover:text-teal-600 transition-colors py-2 pl-2 border-l-4 border-transparent hover:border-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 mt-2 border-t border-gray-100">
                <Link 
                  href="/#contact" 
                  className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Free Consult
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 