import Link from 'next/link'
import Image from 'next/image'

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Security',
    description: 'Enterprise-grade security with SOC2 compliance',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Simplicity',
    description: 'Intuitive interface designed for solar teams',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Scalability',
    description: 'Grows seamlessly with your business',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Analytics',
    description: 'Real-time insights and reporting tools',
  },
]

export default function ProductShowcaseSection() {
  return (
    <section className="product-showcase-section py-20 bg-white border-y border-gray-100">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left content */}
          <div className="lg:w-[400px] shrink-0 animate-on-scroll-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600">Features</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 font-[family-name:var(--font-display)] leading-tight">
              Elevate your business with superior software
            </h2>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed mb-6">
              Jobflo provides an agile and customizable platform that enables quick adaptation to changing business needs, ensuring your solar company continues to grow and thrive
            </p>

            {/* CTA */}
            <Link href="#" className="btn-primary">
              Get Started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {highlights.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center text-orange-600 group-hover:from-orange-100 group-hover:to-orange-200 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm mb-0.5">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product mockup */}
          <div className="flex-1 relative animate-on-scroll-right" style={{ transitionDelay: '200ms' }}>
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
              {/* Animated gradient background */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
              </div>

              {/* Mockup Image */}
              <div className="relative p-6">
                <Image
                  src="/images/last-featured-image.png"
                  alt="Jobflo Dashboard"
                  width={632}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
