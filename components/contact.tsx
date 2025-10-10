"use client";

import type React from "react";

/**
 * Contact information interface
 */
interface ContactInfo {
  icon: string; // Emoji icon for contact method
  title: string; // Contact method title
  content: string; // Contact details
  link?: string; // Optional link for clickable contact info
}

/**
 * CONTACT COMPONENT
 *
 * Contact/Footer section that:
 * - Displays company contact information in grid layout
 * - Includes location, phone, email, and WhatsApp
 * - Features social media links with hover effects
 * - Provides "Back to Top" link for easy navigation
 * - Dark gradient background for visual contrast
 * - Fully responsive - stacks vertically on mobile
 */
export default function Contact() {
  /**
   * Array of contact methods with icons and details
   */
  const contactInfo: ContactInfo[] = [
    {
      icon: "",
      title: "Location",
      content: "Lagos, Nigeria",
    },
    {
      icon: "",
      title: "Phone",
      content: "+234 906 113 7727",
      link: "tel:+2349061137727",
    },
    {
      icon: "",
      title: "Email",
      content: "info@alphanuel.com",
      link: "mailto:info@alphanuel.com",
    },
    {
      icon: "",
      title: "WhatsApp",
      content: "Chat with us",
      link: "https://wa.me/2349061137727",
    },
  ];

  /**
   * Scrolls smoothly to top of page
   */
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Section heading */}
        <h2 className="section-title-2">Get In Touch</h2>
        <p className="about-text">
          Ready to start your construction project? Contact us today!
        </p>

        {/* Grid of contact information cards */}
        <div className="contact-info">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-item">
              {/* Contact method title with icon */}
              <h3>
                {info.icon} {info.title}
              </h3>

              {/* Contact details - clickable if link is provided */}
              {info.link ? (
                <p>
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {info.content}
                  </a>
                </p>
              ) : (
                <p>{info.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Social media links */}
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-facebook-icon lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-instagram-icon lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-linkedin-icon lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        {/* Footer with copyright and back to top link */}
        <div className="back-to-top">
          <p>&copy; 2025 ALPHANUEL Construction. All rights reserved.</p>
          <p style={{ marginTop: "1rem" }}>
            <a href="#home" onClick={scrollToTop}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevrons-up-icon lucide-chevrons-up"
              >
                <path d="m17 11-5-5-5 5" />
                <path d="m17 18-5-5-5 5" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
