/**
 * HERO COMPONENT
 *
 * Full-screen hero section that:
 * - Displays main headline and tagline
 * - Features background image with dark overlay for text readability
 * - Includes call-to-action button linking to WhatsApp
 * - Animates content with fade-in effect on page load
 * - Fully responsive with adjusted text sizes for mobile
 */
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* Main headline with "Excellence" highlighted in electric blue */}
        <h1>
          Building <span>Excellence</span> Since Day One
        </h1>

        {/* Tagline describing company location and services */}
        <p>Your trusted partner for quality construction services in Lagos, Nigeria</p>

        {/* 
          Call-to-action button that opens WhatsApp chat
          Pre-fills message expressing interest in construction services
        */}
        <a
          href="https://wa.me/2349061137727?text=Hi%20I%20am%20interested%20in%20your%20construction%20services"
          className="hero-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
