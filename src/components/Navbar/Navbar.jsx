import { useState } from 'react'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import { navLinks, sharedIcons } from '../../data/jewelryData'

function Navbar() {
  const [open, setOpen] = useState(false)
  const GemIcon = sharedIcons.gem

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-3 sm:px-4">
      {/* Fixed top navbar */}
      <nav className="mx-auto flex w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-[1.7rem] bg-[#d6caba] px-5 py-4 shadow-[0_14px_45px_rgba(52,35,20,0.12)] sm:max-w-[calc(100%-2rem)] sm:px-7 lg:px-9">
        <a href="#/" className="flex items-center gap-3 text-white drop-shadow-sm">
          <span className="grid size-11 place-items-center rounded-full bg-white text-cocoa shadow-xl sm:size-13">
            <GemIcon className="text-xl" />
          </span>
          <span className="font-serif text-3xl font-bold leading-none text-white sm:text-4xl">Kaizen Arts</span>
        </a>

        <div className="hidden items-center gap-3 rounded-full bg-white p-2 shadow-[0_18px_45px_rgba(37,23,11,0.12)] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 rounded-full px-6 py-3 text-sm font-bold text-espresso transition hover:bg-cream"
            >
              {link.label}
              {link.label === 'Profile' && <FiChevronDown />}
            </a>
          ))}
          <a
            href="mailto:concierge@kaizenarts.test"
            className="rounded-full bg-cocoa px-8 py-3 text-sm font-bold text-white transition hover:bg-espresso"
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
        <div className="mx-auto mt-3 w-full max-w-[calc(100%-1rem)] rounded-[1.6rem] bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:max-w-[calc(100%-2rem)] lg:hidden">
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
