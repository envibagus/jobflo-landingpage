'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Product', href: '#', hasDropdown: true },
  { name: 'Solutions', href: '#', hasDropdown: true },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Services', href: '#services' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`header-section fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1120px] px-6">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center">
              <Image
                src={isScrolled ? '/logo-dark.svg' : '/logo-white.svg'}
                alt="JobFlo"
                width={82}
                height={24}
                className="h-6 w-auto transition-opacity duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium transition-colors rounded-lg ${
                    isScrolled
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className={`w-4 h-4 ${isScrolled ? 'opacity-40' : 'opacity-60'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#"
              className={`px-4 py-2 text-[13px] font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-600 hover:text-gray-900'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Log in
            </Link>
            <Link href="#" className="btn-primary text-[13px]">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu with transition */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`py-4 border-t ${
              isScrolled
                ? 'border-gray-200 bg-white'
                : 'border-white/10 bg-[#1a1730]'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm transition-all duration-200 ${
                    isScrolled
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div
                className={`mt-4 pt-4 border-t flex flex-col gap-2 ${
                  isScrolled ? 'border-gray-200' : 'border-white/10'
                }`}
              >
                <Link
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm ${
                    isScrolled ? 'text-gray-600' : 'text-white/80'
                  }`}
                >
                  Log in
                </Link>
                <Link
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary mx-4"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
