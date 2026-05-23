import { useEffect, useState } from 'react'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import { navLinks, sharedIcons } from '../../data/jewelryData'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const GemIcon = sharedIcons.gem

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4">
      {/* Premium rounded navbar */}
      <nav
        className={`luxury-container flex items-center justify-between rounded-[1.6rem] border px-5 py-4 transition duration-300 sm:px-7 ${
          scrolled
            ? 'border-white/45 bg-[#8b6642]/70 shadow-[0_22px_70px_rgba(52,35,20,0.18)] backdrop-blur-xl'
            : 'border-white/20 bg-[#8b6642]/34 shadow-[0_18px_55px_rgba(52,35,20,0.12)] backdrop-blur-md'
        }`}
      >
        <a href="#/" className="flex items-center gap-3 text-white drop-shadow-sm">
          <span className="grid size-11 place-items-center rounded-full bg-white text-cocoa shadow-xl">
            <GemIcon className="text-xl" />
          </span>
          <span className="font-serif text-3xl font-bold leading-none text-white">Utsav</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-white p-2 shadow-[0_18px_45px_rgba(37,23,11,0.18)] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 rounded-full px-5 py-3 text-xs font-bold text-espresso transition hover:bg-cream"
            >
              {link.label}
              {link.label === 'Profile' && <FiChevronDown />}
            </a>
          ))}
          <a
            href="mailto:concierge@kaizenarts.test"
            className="rounded-full bg-cocoa px-7 py-3 text-xs font-bold text-white transition hover:bg-espresso"
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid size-12 place-items-center rounded-full bg-white text-espresso shadow-lg lg:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="luxury-container mt-3 rounded-[1.6rem] bg-white/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold text-espresso hover:bg-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:concierge@kaizenarts.test"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-cocoa px-4 py-3 text-center text-sm font-bold text-white hover:bg-espresso"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
