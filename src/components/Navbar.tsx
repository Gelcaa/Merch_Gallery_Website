import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiAlignJustify, FiX } from "react-icons/fi"; // Removed FiSearch

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if the current page is the homepage
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/about", label: "About Us" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white text-black shadow-lg"
          : "bg-black bg-opacity-50 text-white"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 w-full max-w-screen-xl mx-auto">
        {/* Left: Logo and Navigation Links */}
        <div className="flex items-center space-x-6 text-lg">
          {/* Center: Logo */}
          <div className="ml-2 sm:text-xl md:text-2xl lg:text-3xl font-bold-700">
            <Link to="/">Circle of Student Assistants</Link>
          </div>

          {/* Navigation Links (hidden on small screens) */}
          <div className="hidden lg:flex space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-gray-500 transition duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu icon (Hamburger) */}
        <div className="lg:hidden">
          {isMenuOpen ? (
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <FiAlignJustify
              aria-label="Menu"
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white text-black p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block hover:text-gray-500 transition duration-200"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
