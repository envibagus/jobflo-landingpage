'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const faqs = [
  {
    question: 'How does Jobflo help manage solar installations?',
    answer: "Jobflo streamlines your entire solar workflow from lead capture to project completion. Track permits, schedule installations, manage inventory, and communicate with customers—all in one platform designed specifically for solar and HVAC contractors.",
  },
  {
    question: 'Can I manage multiple crews and job sites?',
    answer: 'Absolutely! Jobflo supports unlimited crews and job sites. Assign technicians to projects, track their progress in real-time, manage schedules, and ensure every installation is completed on time and within budget.',
  },
  {
    question: 'Does Jobflo integrate with proposal and design tools?',
    answer: 'Yes! Jobflo integrates with popular solar design tools like Aurora, OpenSolar, and Helioscope. Generate proposals, sync system designs, and convert quotes to active projects seamlessly.',
  },
  {
    question: 'How does the lead management system work?',
    answer: 'Our CRM captures leads from multiple sources, scores them automatically, and routes them to your sales team. Track every touchpoint, automate follow-ups, and convert more prospects into paying customers.',
  },
  {
    question: 'Is Jobflo suitable for HVAC and roofing companies?',
    answer: 'Yes! While built for solar, Jobflo is perfect for HVAC, roofing, and battery storage companies. The platform adapts to your workflow with customizable pipelines, job types, and reporting for any home service business.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="faq-section py-20 bg-white">
      <div className="max-w-[540px] mx-auto px-6">
        {/* Section header */}
        <h2 className={`text-2xl md:text-3xl font-semibold text-gray-900 mb-10 font-[family-name:var(--font-display)] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Frequently asked questions
        </h2>

        {/* FAQ items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-100 last:border-b-0 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
            >
              <button
                className="w-full flex items-start justify-between py-4 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`text-base font-medium pr-4 transition-colors ${openIndex === index ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all ${openIndex === index ? 'bg-orange-100 text-orange-600 rotate-45' : 'bg-gray-100 text-gray-400'}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-500 text-sm leading-relaxed pr-10">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Help link */}
        <div className="mt-10">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            See all questions
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
