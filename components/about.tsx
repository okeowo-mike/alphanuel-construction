"use client";

import { useEffect, useRef } from "react";

/**
 * ABOUT COMPONENT
 *
 * About section that:
 * - Presents company information in two-column layout (text + image)
 * - Animates content when scrolling into view using Intersection Observer
 * - Describes company mission, values, and expertise
 * - Fully responsive - stacks vertically on mobile devices
 */
export default function About() {
  // References to elements that need scroll animations
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    /**
     * Intersection Observer setup
     * Watches for when elements enter the viewport and adds 'visible' class
     * This triggers CSS animations defined in globals.css
     */
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: "0px 0px -50px 0px", // Trigger slightly before element enters view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'visible' class when element enters viewport
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe both content and image elements
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    // Cleanup: stop observing when component unmounts
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Text content - fades in from bottom when scrolled into view */}
        <div className="about-content" ref={contentRef}>
          <h2 className="section-title">
            About <span>Us</span>
          </h2>

          {/* Company introduction paragraph */}
          <p className="about-text">
            ALPHANUEL Construction is a leading construction company based in
            Lagos, Nigeria, dedicated to delivering exceptional building
            solutions. With years of experience in the industry, we have built a
            reputation for reliability, quality craftsmanship, and innovative
            design.
          </p>

          {/* Mission statement paragraph */}
          <p className="about-text">
            Our mission is to transform visions into reality through meticulous
            planning, skilled execution, and unwavering commitment to
            excellence. From residential projects to commercial developments, we
            bring expertise and passion to every build.
          </p>

          {/* Values and commitment paragraph */}
          <p className="about-text">
            We pride ourselves on our attention to detail, use of quality
            materials, and dedication to completing projects on time and within
            budget. Your dream project is our priority.
          </p>
        </div>

        {/* Company image - slides in from right when scrolled into view */}
        <img
          src="/Aboutus-pic.jpg"
          alt="Construction Team"
          className="about-image"
          ref={imageRef}
        />
      </div>
    </section>
  );
}
