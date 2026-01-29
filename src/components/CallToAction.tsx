import Link from 'next/link'
import Image from 'next/image'

export default function CallToAction() {
  return (
    <section
      className="cta-section py-16 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative flex flex-col lg:flex-row items-start min-h-[500px]">
          {/* CTA Content - Left Side */}
          <div className="lg:w-[480px] shrink-0 z-10 pt-8">
            <h2
              id="cta-heading"
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
            className="absolute right-[-200px] top-0 bottom-0 w-[900px] lg:w-[1000px]"
            style={{ perspective: '1500px' }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-15deg) rotateX(5deg)',
              }}
            >
              {/* Bottom Image (Back layer) */}
              <div
                className="absolute w-[700px] shadow-2xl rounded-lg overflow-hidden"
                style={{
                  left: '0',
                  top: '180px',
                  transform: 'translateZ(-100px)',
                  opacity: 0.85,
                }}
              >
                <Image
                  src="/images/cta-bottom.svg"
                  alt="Jobflo Dashboard Analytics"
                  width={700}
                  height={450}
                  className="w-full h-auto"
                />
              </div>

              {/* Middle Image */}
              <div
                className="absolute w-[700px] shadow-2xl rounded-lg overflow-hidden"
                style={{
                  left: '80px',
                  top: '90px',
                  transform: 'translateZ(0px)',
                  opacity: 0.92,
                }}
              >
                <Image
                  src="/images/cta-middle.svg"
                  alt="Jobflo Project Management"
                  width={700}
                  height={450}
                  className="w-full h-auto"
                />
              </div>

              {/* Top Image (Front layer) */}
              <div
                className="absolute w-[700px] shadow-2xl rounded-lg overflow-hidden"
                style={{
                  left: '160px',
                  top: '0px',
                  transform: 'translateZ(100px)',
                }}
              >
                <Image
                  src="/images/cta-top.svg"
                  alt="Jobflo Contact Management"
                  width={700}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
