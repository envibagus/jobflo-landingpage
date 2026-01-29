import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="hero-section relative min-h-screen gradient-hero overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Gradient mesh accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-60 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
      </div>

      {/* Solar panel background illustration */}
      <div className="absolute bottom-[500px] left-1/2 -translate-x-1/2 w-full max-w-[1800px] pointer-events-none">
        <Image
          src="/images/hero-bg.png"
          alt=""
          width={1800}
          height={600}
          className="w-full h-auto opacity-60"
          priority
        />
      </div>

      <div className="relative max-w-[1120px] mx-auto px-6 pt-[136px] pb-12">
        {/* Announcement badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-1 py-1 pr-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
            <span className="text-xs font-medium text-white/90">Top Solar Energy Company</span>
          </Link>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-5xl mx-auto mb-6 animate-fade-in stagger-1">
          <h1 className="text-[33px] md:text-5xl lg:text-[56px] font-semibold text-white leading-[1.1] tracking-tight">
            Maximize sales, simplify management,
            <br className="hidden lg:block" />
            and effortlessly streamline operations
          </h1>
        </div>

        {/* Subheadline */}
        <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in stagger-2">
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            Jobflo is tailored for the solar industry&apos;s unique needs, drives efficiency, scalability, and profitability, automating workflows, optimizing operations, and empowering sales teams to increase realization rates.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in stagger-3">
          <Link href="#" className="btn-primary px-6 py-3">
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="#" className="btn-secondary px-6 py-3 bg-white/10 border-white/20 text-white hover:bg-white/20">
            Demo
          </Link>
        </div>

      </div>

      {/* Product mockup - Full size, outside container for full width */}
      <div className="relative max-w-[1400px] mx-auto px-6 pb-0 animate-fade-in stagger-4">
        {/* Decorative glow behind mockup - positioned to be visible */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-orange-500/30 via-purple-500/20 to-transparent rounded-full blur-[80px] z-0" />

        {/* Mockup container */}
        <div className="relative z-10">
          <Image
            src="/images/hero-mockup.svg"
            alt="Jobflo Dashboard - Project Management"
            width={1400}
            height={840}
            className="w-full h-auto"
            priority
          />
          {/* Gradient fade overlay - covers bottom 50% */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, white 100%)'
            }}
          />
        </div>
      </div>
    </section>
  )
}
