import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TrustedBySection from '@/components/TrustedBySection'
import IntegrationsSection from '@/components/IntegrationsSection'
import FeaturesSection from '@/components/FeaturesSection'
import ProductShowcaseSection from '@/components/ProductShowcaseSection'
import FAQSection from '@/components/FAQSection'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import ScrollAnimationInit from '@/components/ScrollAnimationInit'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimationInit />

      {/* Navigation Header */}
      <Header />

      {/* Hero Section - Main headline and product preview */}
      <HeroSection />

      {/* Trusted By Section - Logo carousel of partner companies */}
      <TrustedBySection />

      {/* Integrations Section - Stats and integration badges */}
      <IntegrationsSection />

      {/* Features Section - Feature cards grid */}
      <FeaturesSection />

      {/* Product Showcase Section - Elevate your business */}
      <ProductShowcaseSection />

      {/* FAQ Section - Frequently asked questions */}
      <FAQSection />

      {/* Call to Action Section - Final conversion prompt */}
      <CallToAction />

      {/* Footer - Links and branding */}
      <Footer />
    </main>
  )
}
