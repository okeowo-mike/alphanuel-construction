"use client";

import { useEffect, useRef } from "react";

/**
 * Service interface defining the structure of each service card
 */
interface Service {
  icon: React.ReactNode; // Icon (SVG or Emoji)
  title: string; // Service name
  description: string; // Brief description
}

/**
 * SERVICES COMPONENT
 *
 * Displays 6 service offerings in a responsive grid
 * Each card animates into view with staggered timing
 * Click opens WhatsApp with pre-filled message
 */
export default function Services() {
  const cardsRef = useRef<HTMLDivElement>(null);

  // ✅ Define all services cleanly
  const services: Service[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      ),
      title: "Building Design",
      description:
        "We create durable and efficient structures for modern projects.",
    },
    {
      icon: (
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
          className="lucide lucide-fence-icon lucide-fence"
        >
          <path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
          <path d="M6 8h4" />
          <path d="M6 18h4" />
          <path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
          <path d="M14 8h4" />
          <path d="M14 18h4" />
          <path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
        </svg>
      ),
      title: "Building Construction",
      description:
        "Complete residential and commercial projects from foundation to finish.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
          />
        </svg>
      ),
      title: "Building Renovation",
      description:
        "Transform and modernize existing structures with expert renovation.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>
      ),
      title: "Electrical Installation",
      description:
        "Professional electrical systems installation and maintenance.",
    },
    {
      icon: (
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
          className="lucide lucide-droplets-icon lucide-droplets"
        >
          <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
          <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
        </svg>
      ),
      title: "Plumbing Services",
      description: "Reliable plumbing installation, repair, and maintenance.",
    },
    {
      icon: (
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
          className="lucide lucide-id-card-lanyard-icon lucide-id-card-lanyard"
        >
          <path d="M13.5 8h-3" />
          <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
          <path d="M16.899 22A5 5 0 0 0 7.1 22" />
          <path d="m9 2 3 6" />
          <circle cx="12" cy="15" r="3" />
        </svg>
      ),
      title: "Project Management",
      description:
        "End-to-end supervision ensuring quality and timely delivery.",
    },
  ];

  // ✅ Scroll animation for cards
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, observerOptions);

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".service-card");
      cards.forEach((card, index) => {
        (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  // ✅ WhatsApp click handler
  const openWhatsApp = (serviceName: string) => {
    const message = `Hi, I am interested in your ${serviceName} services`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2349061137727?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="section-title">
          Our <span>Services</span>
        </h2>
        <p className="about-text">
          We offer comprehensive construction solutions tailored to your needs.
        </p>

        <div className="services-grid" ref={cardsRef}>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              onClick={() => openWhatsApp(service.title)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
