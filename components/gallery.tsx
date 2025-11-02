"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Gallery image interface
 */
interface GalleryImage {
  src: string; // Image source URL
  alt: string; // Alternative text for accessibility
  category: string; // Category field for each image
}

/**
 * GALLERY COMPONENT
 *
 * Gallery section that:
 * - Displays project images in responsive grid layout
 * - Each image has hover effect with blue overlay and zoom
 * - Clicking an image opens it in full-screen lightbox
 * - Lightbox can be closed by clicking X, outside image, or pressing Escape
 * - Images animate into view with staggered timing
 * - Fully responsive - adjusts from 3 columns to 1 column on mobile
 */
export default function Gallery() {
  // Reference to gallery items container for scroll animations
  const itemsRef = useRef<HTMLDivElement>(null);
  // State to control lightbox visibility
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Add state for filtering by category
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  /**
   * Array of gallery images showcasing completed projects
   */
  const images: GalleryImage[] = [
    {
      src: "ba-k-1.png",
      alt: "Residential Project",
      category: "Kitchen",
    },
    {
      src: "ba-k-2.png",
      alt: "Residential Project",
      category: "Kitchen",
    },
    {
      src: "gallery1.jpeg",
      alt: "Residential Project",
      category: "Kitchen",
    },
    {
      src: "gallery2.jpeg",
      alt: "Commercial Project",
      category: "Kitchen",
    },
    {
      src: "gallery3.jpeg",
      alt: "Interior Design",
      category: "Kitchen",
    },
    {
      src: "gallery4.jpeg",
      alt: "Renovation Project",
      category: "Kitchen",
    },
    {
      src: "gallery5.jpeg",
      alt: "Electrical Work",
      category: "Kitchen",
    },
    {
      src: "gallery6.jpeg",
      alt: "Office Building",
      category: "Kitchen",
    },
    {
      src: "ba-c-1.png",
      alt: "Office Building",
      category: "closet",
    },
    {
      src: "ba-c-2.png",
      alt: "Office Building",
      category: "closet",
    },
    {
      src: "gallery7.jpeg",
      alt: "Office Building",
      category: "closet",
    },
    {
      src: "gallery8.jpeg",
      alt: "Office Building",
      category: "closet",
    },
    {
      src: "gallery9.jpeg",
      alt: "Office Building",
      category: "closet",
    },
    {
      src: "gallery10.jpeg",
      alt: "Office Building",
      category: "closet",
    },
    {
      src: "ba-b-1.png",
      alt: "Office Building",
      category: "bathroom",
    },
    {
      src: "ba-b-2.png",
      alt: "Office Building",
      category: "bathroom",
    },
    {
      src: "gallery11.jpeg",
      alt: "Office Building",
      category: "bathroom",
    },
    {
      src: "gallery12.jpeg",
      alt: "Office Building",
      category: "bathroom",
    },
    {
      src: "gallery13.jpeg",
      alt: "Office Building",
      category: "bathroom",
    },
    {
      src: "gallery14.jpeg",
      alt: "Office Building",
      category: "bathroom",
    },
  ];

  // Get all unique categories from images
  const categories = [
    "All",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];

  // Filter images to display based on selected category
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  useEffect(() => {
    /**
     * Intersection Observer for gallery items
     * Adds staggered animation for cascading reveal effect
     */
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all gallery items with staggered delays
    if (itemsRef.current) {
      const items = itemsRef.current.querySelectorAll(".gallery-item");
      items.forEach((item, index) => {
        (item as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
      });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    /**
     * Keyboard event handler for:
     * - Escape key: closes lightbox
     * - Arrow Left: navigate to previous image
     * - Arrow Right: navigate to next image
     */
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        navigatePrevious();
      } else if (e.key === "ArrowRight") {
        navigateNext();
      }
    };

    // Add keyboard listener when lightbox is open
    if (lightboxOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup listener
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  /**
   * Opens lightbox at the filtered image index
   */
  const openLightbox = (filteredIndex: number) => {
    setCurrentImageIndex(filteredIndex);
    setLightboxOpen(true);
  };

  /**
   * Closes the lightbox
   */
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  /**
   * Lightbox navigation: previous, wraps to end
   */
  const navigatePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };
  /**
   * Lightbox navigation: next, wraps to start
   */
  const navigateNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <section className="gallery" id="gallery">
        <div className="gallery-container">
          {/* Section heading */}
          <h2 className="section-title">
            Our <span>Projects</span>
          </h2>
          <p className="about-text">
            Explore our portfolio of completed construction projects
          </p>

          {/* CATEGORY FILTER BUTTONS */}
          <div
            className="gallery-categories"
            style={{ marginBottom: "2rem", textAlign: "center" }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`gallery-category-btn${
                  category === selectedCategory ? " active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid of gallery images, NOW FILTERED */}
          <div className="gallery-grid" ref={itemsRef}>
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                {/* Project image */}
                <img src={image.src || "/placeholder.svg"} alt={image.alt} />

                {/* Blue overlay with magnifying glass icon - appears on hover */}
                <div className="gallery-overlay">
                  <span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        LIGHTBOX MODAL
        Full-screen overlay for viewing images in detail
        Features:
        - Click X button or outside image to close
        - Press Escape key to close
        - Use arrow buttons or arrow keys to navigate between images
        - Image counter shows current position (e.g., "3 / 6")
      */}
      <div
        className={`lightbox ${lightboxOpen ? "active" : ""}`}
        onClick={(e) => {
          // Close lightbox when clicking on dark background (not the image)
          if (e.target === e.currentTarget) {
            setLightboxOpen(false);
          }
        }}
      >
        {/* Close button (X) */}
        <span className="lightbox-close" onClick={() => setLightboxOpen(false)}>
          &times;
        </span>

        <button
          className="lightbox-nav lightbox-prev"
          onClick={navigatePrevious}
          aria-label="Previous image"
        >
          &#10094;
        </button>

        <img
          src={filteredImages[currentImageIndex]?.src || "/placeholder.svg"}
          alt={filteredImages[currentImageIndex]?.alt}
        />

        <button
          className="lightbox-nav lightbox-next"
          onClick={navigateNext}
          aria-label="Next image"
        >
          &#10095;
        </button>

        <div className="lightbox-counter">
          {filteredImages.length > 0
            ? `${currentImageIndex + 1} / ${filteredImages.length}`
            : "0 / 0"}
        </div>
      </div>
    </>
  );
}
