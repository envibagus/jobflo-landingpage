import Image from 'next/image'

const mainFeatures = [
  {
    badge: 'Dashboard',
    title: 'Customer and Project Dashboard',
    description: 'Get a comprehensive view of all your solar projects, customer interactions, and team performance in one centralized dashboard.',
    image: '/images/features/featured-image-1.png',
  },
  {
    badge: 'Calendar',
    title: 'Smart Calendar',
    description: 'Intelligent scheduling that automatically optimizes installation appointments, site visits, and team availability for maximum efficiency.',
    image: '/images/features/featured-image-2.png',
  },
]

const smallFeatures = [
  {
    badge: 'Mobile',
    title: 'Mobile Customer App',
    description: 'Empower your field teams with a powerful mobile app for on-site updates, photo documentation, and real-time sync.',
    image: '/images/features/featured-image-3.png',
  },
  {
    badge: 'Analytics',
    title: 'Customer and Project Dashboard',
    description: 'Deep analytics and reporting tools to track sales performance, project timelines, and revenue forecasting.',
    image: '/images/features/featured-image-4.png',
  },
  {
    badge: 'Tasks',
    title: 'Task Management',
    description: 'Streamlined task assignment and tracking system designed specifically for solar installation workflows.',
    image: '/images/features/featured-image-5.png',
  },
]

function FeatureCard({
  badge,
  title,
  description,
  image,
  size = 'small',
}: {
  badge: string
  title: string
  description: string
  image: string
  size?: 'large' | 'small'
}) {
  const isLarge = size === 'large'

  return (
    <div className={`card-feature group ${isLarge ? 'col-span-1' : ''}`}>
      <div className={`p-5 ${isLarge ? 'pb-0' : 'pb-0'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <span className="text-xs font-medium text-gray-600">{badge}</span>
        </div>

        {/* Title */}
        <h3 className={`font-semibold text-gray-900 mb-2 font-[family-name:var(--font-display)] ${isLarge ? 'text-xl' : 'text-lg'}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-gray-500 leading-relaxed ${isLarge ? 'text-sm' : 'text-sm'}`}>
          {description}
        </p>
      </div>

      {/* Feature Image */}
      <div className={`relative overflow-hidden ${isLarge ? 'h-[300px]' : 'h-[200px]'} mt-4`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top"
          sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section className="features-section py-20 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 font-[family-name:var(--font-display)]">
            More features
          </h2>
        </div>

        {/* Main features - 2 column */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {mainFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              badge={feature.badge}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              size="large"
            />
          ))}
        </div>

        {/* Small features - 3 column */}
        <div className="grid md:grid-cols-3 gap-4">
          {smallFeatures.map((feature) => (
            <FeatureCard
              key={feature.title}
              badge={feature.badge}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              size="small"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
