"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * NAVBAR COMPONENT
 *
 * A fixed navigation bar that:
 * - Starts transparent at the top of the page
 * - Transitions to semi-transparent black background when scrolled
 * - Includes responsive mobile menu with hamburger toggle
 * - Provides smooth scroll navigation to page sections
 * - Features animated underline hover effects on links
 */
export default function Navbar() {
  // State to track if navbar should have scrolled styling
  const [isScrolled, setIsScrolled] = useState(false);
  // State to control mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    /**
     * Scroll event handler
     * Changes navbar background when user scrolls past 100px
     */
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Closes mobile menu when a navigation link is clicked
   */
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  /**
   * Scrolls smoothly to top of page when logo is clicked
   */
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : "transparent"}`}>
      {/* Logo image — clicking scrolls to top */}
      <a href="#" className="navbar-logo" onClick={handleLogoClick}>
        <Image
          src="/logo-blue-3.png" // path from public folder
          alt="Alphanuel Construction Logo"
          width={100} // adjust as needed
          height={70} // adjust as needed
          className="logo-img"
          priority
        />
      </a>

      {/* Hamburger menu toggle for mobile */}
      <div
        className="menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation links - transforms to mobile menu on small screens */}
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={handleLinkClick}>
            Services
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={handleLinkClick}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
