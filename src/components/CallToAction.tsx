import Link from 'next/link'
import Image from 'next/image'

export default function CallToAction() {
  return (
    <section
      className="cta-section py-12 md:py-16 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* CTA Content */}
          <div className="text-center mb-8 animate-on-scroll">
            <h2
              id="cta-heading"
              className="text-2xl md:text-3xl font-medium text-gray-900 mb-4 font-[family-name:var(--font-display)] leading-tight tracking-tight"
            >
              Ready to transform your solar business?
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              You can sign up with a work email and immediately jump in with a free trial. You&apos;ll have one week with access to all features to get a sense of how Jobflo can help.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="#"
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Mobile Images - Stacked on top of each other */}
          <div className="relative h-[280px] sm:h-[350px] animate-on-scroll">
            {/* Bottom Image */}
            <div
              className="absolute w-[85%] rounded-xl overflow-hidden"
              style={{ left: '0', top: '80px' }}
            >
              <Image
                src="/images/cta-bottom.png"
                alt="Jobflo Dashboard Analytics"
                width={750}
                height={500}
                className="w-full h-auto"
              />
            </div>
            {/* Middle Image */}
            <div
              className="absolute w-[85%] rounded-xl overflow-hidden"
              style={{ left: '8%', top: '40px' }}
            >
              <Image
                src="/images/cta-middle.png"
                alt="Jobflo Project Management"
                width={750}
                height={500}
                className="w-full h-auto"
              />
            </div>
            {/* Top Image */}
            <div
              className="absolute w-[85%] rounded-xl overflow-hidden"
              style={{ left: '16%', top: '0' }}
            >
              <Image
                src="/images/cta-top.png"
                alt="Jobflo Contact Management"
                width={750}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative flex flex-col lg:flex-row items-center min-h-[500px]">
            {/* CTA Content - Left Side */}
            <div className="lg:w-[480px] shrink-0 z-10 animate-on-scroll-left">
              <h2
                className="text-3xl md:text-[32px] font-medium text-gray-900 mb-4 font-[family-name:var(--font-display)] leading-tight tracking-tight"
              >
                Ready to transform your solar business?
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
                You can sign up with a work email and immediately jump in with a free trial. You&apos;ll have one week with access to all features to get a sense of how Jobflo can help.
              </p>

              {/* CTA Button Group */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Stacked Dashboard Images - Right Side */}
            <div
              className="absolute right-[-280px] top-[-40px] bottom-0 w-[950px] lg:w-[1100px] animate-on-scroll-right"
              style={{ perspective: '2000px', transitionDelay: '200ms' }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateY(-12deg) rotateX(8deg)',
                }}
              >
                {/* Bottom Image (Back layer) - Dashboard */}
                <div
                  className="absolute w-[750px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-4 hover:scale-[1.02]"
                  style={{
                    left: '40px',
                    top: '320px',
                    transform: 'translateZ(30px)',
                  }}
                >
                  <Image
                    src="/images/cta-bottom.png"
                    alt="Jobflo Dashboard Analytics"
                    width={750}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>

                {/* Middle Image - Project Information */}
                <div
                  className="absolute w-[750px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-4 hover:scale-[1.02]"
                  style={{
                    left: '180px',
                    top: '200px',
                    transform: 'translateZ(0px)',
                  }}
                >
                  <Image
                    src="/images/cta-middle.png"
                    alt="Jobflo Project Management"
                    width={750}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>

                {/* Top Image (Front layer) - Contact Information */}
                <div
                  className="absolute w-[750px] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-4 hover:scale-[1.02]"
                  style={{
                    left: '400px',
                    top: '100px',
                    transform: 'translateZ(80px)',
                  }}
                >
                  <Image
                    src="/images/cta-top.png"
                    alt="Jobflo Contact Management"
                    width={750}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
