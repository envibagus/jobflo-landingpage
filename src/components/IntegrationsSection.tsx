import Image from 'next/image'

const industries = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Solar',
    description: 'Solar panel installation & maintenance',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'HVAC',
    description: 'Heating, ventilation & air conditioning',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Roofing',
    description: 'Roof installation & repair services',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Battery',
    description: 'Energy storage solutions',
  },
]

const sideCards = [
  { title: 'Calendar', position: 'left-1' },
  { title: 'Workflow', position: 'left-2' },
  { title: 'Employee Training', position: 'right-1' },
  { title: 'Premium Materials', position: 'right-2' },
]

export default function IntegrationsSection() {
  return (
    <section className="integrations-section py-16 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
            Built for Your Industry
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Tailored solutions for solar, HVAC, roofing, and energy storage businesses
          </p>
        </div>

        {/* Industry Cards Row - Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative p-5 rounded-xl bg-white border border-gray-300 cursor-pointer transition-[border-color,box-shadow] duration-300 ease-in-out hover:border-[#140041] hover:shadow-md animate-on-scroll"
            >
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-gray-50 text-gray-500 transition-colors duration-300 ease-in-out group-hover:bg-[#140041]/10 group-hover:text-[#140041]">
                  {industry.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm font-[family-name:var(--font-display)] text-gray-900">
                    {industry.title} Industry
                  </p>
                  <p className="text-xs mt-1 leading-relaxed text-gray-500">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Lines with Animated Dots - Hidden on mobile */}
        <div className="relative h-24 my-4 hidden lg:block">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 96"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* All paths have same structure: down → curve → horizontal → curve → down */}
              {/* Path lengths are equalized by adjusting vertical distances */}

              {/* Path 1 (Solar - far left): short vertical, long horizontal */}
              <path id="path1" d="M150 0 L150 35 Q150 45 160 45 L590 45 Q600 45 600 55 L600 96" />
              {/* Path 2 (HVAC - inner left): medium vertical, medium horizontal */}
              <path id="path2" d="M420 0 L420 35 Q420 45 430 45 L590 45 Q600 45 600 55 L600 96" />
              {/* Path 3 (Roofing - inner right): medium vertical, medium horizontal */}
              <path id="path3" d="M780 0 L780 35 Q780 45 770 45 L610 45 Q600 45 600 55 L600 96" />
              {/* Path 4 (Battery - far right): short vertical, long horizontal */}
              <path id="path4" d="M1050 0 L1050 35 Q1050 45 1040 45 L610 45 Q600 45 600 55 L600 96" />

              {/* Gradient for dots */}
              <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Master timing animation - all dots sync to this */}
              <animate id="masterTimer" attributeName="visibility" dur="2s" repeatCount="indefinite" />
            </defs>

            {/* Static lines */}
            <use href="#path1" stroke="#e5e7eb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <use href="#path2" stroke="#e5e7eb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <use href="#path3" stroke="#e5e7eb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <use href="#path4" stroke="#e5e7eb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

            {/* Dot 1 - synced to master timer */}
            <circle r="5" fill="url(#dotGradient)" filter="url(#dotGlow)">
              <animateMotion dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0 0 0.58 1" begin="masterTimer.begin">
                <mpath href="#path1" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="2s" repeatCount="indefinite" begin="masterTimer.begin" />
            </circle>

            {/* Dot 2 - synced to master timer */}
            <circle r="5" fill="url(#dotGradient)" filter="url(#dotGlow)">
              <animateMotion dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0 0 0.58 1" begin="masterTimer.begin">
                <mpath href="#path2" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="2s" repeatCount="indefinite" begin="masterTimer.begin" />
            </circle>

            {/* Dot 3 - synced to master timer */}
            <circle r="5" fill="url(#dotGradient)" filter="url(#dotGlow)">
              <animateMotion dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0 0 0.58 1" begin="masterTimer.begin">
                <mpath href="#path3" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="2s" repeatCount="indefinite" begin="masterTimer.begin" />
            </circle>

            {/* Dot 4 - synced to master timer */}
            <circle r="5" fill="url(#dotGradient)" filter="url(#dotGlow)">
              <animateMotion dur="2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0 0 0.58 1" begin="masterTimer.begin">
                <mpath href="#path4" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="2s" repeatCount="indefinite" begin="masterTimer.begin" />
            </circle>
          </svg>
        </div>

        {/* Middle Row - Side Cards + Main JobFlo Card with connecting lines */}
        <div className="relative mt-8 lg:mt-0">
          {/* Apple-style subtle shimmer animation */}
          <style>{`
            @keyframes shimmer {
              0% {
                background-position: -200% center;
              }
              100% {
                background-position: 200% center;
              }
            }
            .connector-line {
              position: relative;
              width: 32px;
              height: 2px;
              background: linear-gradient(
                90deg,
                rgba(229, 231, 235, 0.4) 0%,
                rgba(229, 231, 235, 0.6) 50%,
                rgba(229, 231, 235, 0.4) 100%
              );
              border-radius: 1px;
              overflow: hidden;
            }
            .connector-line::after {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(
                90deg,
                transparent 0%,
                transparent 30%,
                rgba(249, 115, 22, 0.6) 45%,
                rgba(255, 255, 255, 0.8) 50%,
                rgba(249, 115, 22, 0.6) 55%,
                transparent 70%,
                transparent 100%
              );
              background-size: 200% 100%;
              animation: shimmer 3s ease-in-out infinite;
            }
          `}</style>

          {/* Mobile: Grid layout */}
          <div className="lg:hidden">
            {/* Main Center Card - JobFlo */}
            <div className="relative bg-gradient-to-br from-purple-600 to-orange-500 p-[2px] rounded-xl shadow-2xl mb-6 animate-on-scroll">
              <div className="bg-gradient-to-br from-[#140041] to-[#2d1b69] rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <Image
                  src="/logo-white.svg"
                  alt="JobFlo"
                  width={100}
                  height={32}
                  className="h-7 w-auto"
                />
                <div className="hidden sm:block h-8 w-px bg-white/20" />
                <p className="text-white/80 text-sm text-center sm:text-left">Solar Business Platform</p>
              </div>
            </div>

            {/* Feature cards grid for mobile */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#1a1730] text-white shadow-lg animate-on-scroll">
                <p className="font-semibold text-sm font-[family-name:var(--font-display)]">Calendar</p>
                <p className="text-xs mt-1 text-white/60">Schedule management</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1a1730] text-white shadow-lg animate-on-scroll">
                <p className="font-semibold text-sm font-[family-name:var(--font-display)]">Workflow</p>
                <p className="text-xs mt-1 text-white/60">Process automation</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1a1730] text-white shadow-lg animate-on-scroll">
                <p className="font-semibold text-sm font-[family-name:var(--font-display)]">Employee Training</p>
                <p className="text-xs mt-1 text-white/60">Team development</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1a1730] text-white shadow-lg animate-on-scroll">
                <p className="font-semibold text-sm font-[family-name:var(--font-display)]">Premium Materials</p>
                <p className="text-xs mt-1 text-white/60">Quality resources</p>
              </div>
            </div>
          </div>

          {/* Desktop: Horizontal layout with connecting lines */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative flex items-center z-10">
              {/* Calendar */}
              <div className="p-4 rounded-xl bg-[#1a1730] text-white min-w-[160px] shadow-lg">
                <p className="font-semibold text-sm font-[family-name:var(--font-display)]">Calendar</p>
                <p className="text-xs mt-1 text-white/60">Schedule management</p>
              </div>

              {/* Line 1 */}
              <div className="connector-line mx-2" />

              {/* Workflow */}
              <div className="p-4 rounded-xl bg-[#1a1730] text-white min-w-[160px] shadow-lg">
                <p className="font-semibold text-sm font-[family-name:var(--font-display)]">Workflow</p>
                <p className="text-xs mt-1 text-white/60">Process automation</p>
              </div>

              {/* Line 2 */}
              <div className="connector-line mx-2" />

              {/* Main Center Card - JobFlo */}
              <div className="relative bg-gradient-to-br from-purple-600 to-orange-500 p-[2px] rounded-xl shadow-2xl">
                <div className="bg-gradient-to-br from-[#140041] to-[#2d1b69] rounded-xl px-8 py-6 flex items-center gap-4">
                  <Image
                    src="/logo-white.svg"
                    alt="JobFlo"
                    width={100}
                    height={32}
                    className="h-8 w-auto"
                  />
                  <div className="h-8 w-px bg-white/20" />
                  <p className="text-white/80 text-sm">Solar Business Platform</p>
                </div>
              </div>

              {/* Line 3 */}
              <div className="connector-line mx-2" />

              {/* Employee Training */}
              <div className="p-4 rounded-xl bg-[#1a1730] text-white min-w-[160px] shadow-lg">
                <p className="font-semibold text-sm font-[family-name:var(--font-display)]">Employee Training</p>
                <p className="text-xs mt-1 text-white/60">Team development</p>
              </div>

              {/* Line 4 */}
              <div className="connector-line mx-2" />

              {/* Premium Materials */}
              <div className="p-4 rounded-xl bg-[#1a1730] text-white min-w-[160px] shadow-lg">
                <p className="font-semibold text-sm font-[family-name:var(--font-display)]">Premium Materials</p>
                <p className="text-xs mt-1 text-white/60">Quality resources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
