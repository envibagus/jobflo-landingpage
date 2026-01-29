'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    question: 'How do I get started?',
    answer: "You can sign up with a work email and immediately jump in with a free trial. You'll have one week with access to all features to get a sense of how Jobflo can help your solar business grow.",
  },
  {
    question: 'Can I work with my whole team?',
    answer: 'Absolutely! Jobflo is built for teams of all sizes. You can invite unlimited team members, assign roles and permissions, and collaborate seamlessly on projects and leads.',
  },
  {
    question: 'Where can I search for candidates?',
    answer: 'Jobflo integrates with major job boards and candidate databases. You can search, filter, and manage candidates directly within the platform, streamlining your hiring process for solar technicians and sales teams.',
  },
  {
    question: 'Will there be more updates?',
    answer: 'Yes! We release new features and improvements every month based on customer feedback. Our roadmap includes advanced analytics, AI-powered lead scoring, and expanded integrations.',
  },
  {
    question: 'Who does Jobflo work the best for?',
    answer: 'Jobflo is specifically designed for solar installation companies, from small residential installers to large commercial operations. It works best for teams looking to streamline sales, project management, and customer communication.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-section py-20 bg-white">
      <div className="max-w-[540px] mx-auto px-6">
        {/* Section header */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 font-[family-name:var(--font-display)]">
          Frequently asked questions
        </h2>

        {/* FAQ items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-b-0"
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
