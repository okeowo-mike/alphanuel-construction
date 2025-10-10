import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"

/**
 * MAIN PAGE COMPONENT
 *
 * Single-page construction company website for ALPHANUEL Construction
 *
 * Structure:
 * - Navbar: Fixed navigation with scroll effects
 * - Hero: Full-screen landing section with CTA
 * - About: Company information and mission
 * - Services: 6 service offerings with WhatsApp integration
 * - Gallery: Project portfolio with lightbox
 * - Contact: Contact information and footer
 *
 * Features:
 * - Fully responsive design (mobile-first approach)
 * - Smooth scrolling between sections
 * - Scroll-triggered animations using Intersection Observer
 * - WhatsApp integration for service inquiries
 * - Pure CSS styling (no Tailwind framework)
 * - Poppins font from Google Fonts
 * - Color palette: whites, blacks, dark blue (#1a1a2e), electric blue (#00a8ff)
 */
export default function Page() {
  return (
    <>
      {/* Fixed navigation bar */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
    </>
  )
}
