'use client'

const logos = [
  { name: 'Stake', width: 61 },
  { name: 'MotherDuck', width: 140 },
  { name: 'Superhuman', width: 160 },
  { name: 'AG1', width: 50 },
  { name: 'myfitnesspal', width: 130 },
  { name: 'AngelList', width: 100 },
  { name: 'Lambda', width: 110 },
  { name: 'Kit', width: 45 },
  { name: 'Sprig', width: 70 },
  { name: 'VitalBio', width: 45 },
  { name: 'Kick', width: 60 },
  { name: 'Rootly', width: 90 },
  { name: 'Pinpoint', width: 95 },
  { name: '818', width: 40 },
  { name: 'RevenueCat', width: 110 },
]

export default function TrustedBySection() {
  return (
    <section className="trusted-by-section py-16 bg-white overflow-hidden">
      <div className="relative">
        {/* Gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling logos */}
        <div className="flex animate-marquee">
          {/* First set */}
          <div className="flex items-center gap-12 px-6">
            {logos.map((logo, i) => (
              <div
                key={`${logo.name}-1-${i}`}
                className="flex items-center justify-center h-9 opacity-40 hover:opacity-70 transition-opacity"
                style={{ minWidth: logo.width }}
              >
                <span className="text-lg font-semibold text-gray-800 whitespace-nowrap tracking-tight font-[family-name:var(--font-display)]">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-12 px-6">
            {logos.map((logo, i) => (
              <div
                key={`${logo.name}-2-${i}`}
                className="flex items-center justify-center h-9 opacity-40 hover:opacity-70 transition-opacity"
                style={{ minWidth: logo.width }}
              >
                <span className="text-lg font-semibold text-gray-800 whitespace-nowrap tracking-tight font-[family-name:var(--font-display)]">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
